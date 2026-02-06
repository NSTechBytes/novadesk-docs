import type {Props} from '@theme/DocSidebarItem/Category';
import OriginalDocSidebarItemCategory from '@theme-original/DocSidebarItem/Category';

export default function DocSidebarItemCategory(props: Props) {
  const badge = props.item.customProps?.badge as string | undefined;
  const badgeVariant = props.item.customProps?.badgeVariant as string | undefined;
  if (!badge) {
    return <OriginalDocSidebarItemCategory {...props} />;
  }

  const item = {
    ...props.item,
    label: (
      <span>
        {props.item.label}
        <span className={`sidebarBadge${badgeVariant ? ` sidebarBadge--${badgeVariant}` : ''}`}>
          {badge}
        </span>
      </span>
    ),
  };

  return <OriginalDocSidebarItemCategory {...props} item={item} />;
}
