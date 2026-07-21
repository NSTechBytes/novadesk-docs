<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const props = withDefaults(defineProps<{
  name: string
  type: string
  defaultValue?: string
}>(), {
  defaultValue: undefined
})

const id = computed(() => {
  // Replace dots with hyphens to prevent DOMException / querySelector errors in SPAs
  return props.name.toLowerCase().trim().replace(/\./g, '-').replace(/\s+/g, '-').replace(/[^\w-]/g, '')
})

const isAnchored = ref(false)

let route: any = null
try {
  route = useRoute()
} catch (e) {
  // Safe fail for SSR build
}

const checkHash = () => {
  if (typeof window !== 'undefined') {
    const currentHash = decodeURIComponent(window.location.hash.slice(1))
    isAnchored.value = currentHash === id.value
  }
}

const handleGlobalClick = () => {
  // Check the hash after URL updates
  setTimeout(checkHash, 50)
}

onMounted(() => {
  window.addEventListener('hashchange', checkHash)
  document.addEventListener('click', handleGlobalClick)
  checkHash()
  // Check again after a short delay to account for Vitepress router load sequences
  setTimeout(checkHash, 150)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('hashchange', checkHash)
    document.removeEventListener('click', handleGlobalClick)
  }
})

if (route) {
  watch(() => route.path, () => {
    setTimeout(checkHash, 100)
  })
}
</script>

<template>
  <div :id="id" :class="['property-box', { 'is-anchored': isAnchored }]">
    <div class="property-box__header">
      <div class="property-box__left">
        <span class="property-box__name">
          {{ name }}
          <a :href="`#${id}`" class="property-box__anchor" :aria-label="`Permalink to ${name}`">#</a>
        </span>
        <span class="property-box__badge">{{ type }}</span>
      </div>
      <div v-if="defaultValue !== undefined" class="property-box__right">
        <span class="property-box__default-label">Default:</span>
        <code class="property-box__default-value">{{ defaultValue }}</code>
      </div>
    </div>
    <div class="property-box__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.property-box {
  margin: 20px 0;
  padding: 22px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s, transform 0.25s;
}

.property-box:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.property-box:target,
.property-box.is-anchored {
  border-color: var(--vp-c-brand-1) !important;
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft), 0 8px 24px rgba(0, 0, 0, 0.08);
  background-color: var(--vp-c-bg-elv);
  animation: anchor-pulse 1.5s ease-out;
}

@keyframes anchor-pulse {
  0% {
    box-shadow: 0 0 0 10px var(--vp-c-brand-soft), 0 8px 24px rgba(0, 0, 0, 0.08);
  }
  100% {
    box-shadow: 0 0 0 3px var(--vp-c-brand-soft), 0 8px 24px rgba(0, 0, 0, 0.08);
  }
}

.property-box__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.property-box__left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.property-box__name {
  font-family: var(--vp-font-family-mono);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  letter-spacing: -0.2px;
  position: relative;
}

.property-box__anchor {
  margin-left: 6px;
  color: var(--vp-c-brand-1);
  opacity: 0;
  transition: opacity 0.25s, color 0.25s;
  font-weight: normal;
  text-decoration: none !important;
  user-select: none;
}

.property-box:hover .property-box__anchor {
  opacity: 0.6;
}

.property-box__anchor:hover {
  opacity: 1 !important;
  color: var(--vp-c-brand-2);
}

.property-box__badge {
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 6px;
  text-transform: uppercase;
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  letter-spacing: 0.5px;
}

.property-box__right {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}

.property-box__default-label {
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.property-box__default-value {
  font-family: var(--vp-font-family-mono);
  color: #10b981 !important; /* Green color for value */
  background-color: rgba(16, 185, 129, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
  border: 1px solid rgba(16, 185, 129, 0.18);
  font-weight: 500;
}

.dark .property-box__default-value {
  color: #34d399 !important; /* Brighter green in dark mode for contrast */
  background-color: rgba(52, 211, 153, 0.08);
  border-color: rgba(52, 211, 153, 0.18);
}

.property-box__body {
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* Format any paragraph blocks inside the slot to have no extra margin */
.property-box__body :deep(p) {
  margin: 0;
}

.property-box__body :deep(p + p) {
  margin-top: 8px;
}

/* Style inline code inside the description */
.property-box__body :deep(code) {
  font-family: var(--vp-font-family-mono);
  background-color: var(--vp-c-bg-mute);
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}
</style>
