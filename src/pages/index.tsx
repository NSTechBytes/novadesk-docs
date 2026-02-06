import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const heroCards = [
  {
    title: 'Getting Started',
    description: 'Kick off your first NovaDesk widget in minutes.',
    to: '/docs/introduction/getting-started',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 12a8 8 0 1 1 8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4 12a8 8 0 0 0 8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 12h6l-2.5-2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Installation',
    description: 'Install NovaDesk and set up the Widget Maker.',
    to: '/docs/introduction/installation',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3v10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="m8 9 4 4 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="15"
          width="16"
          height="6"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: 'Guides',
    description: 'Deep dives on scripts, colors, and layouts.',
    to: '/docs/guides/script-types',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 4h9a3 3 0 0 1 3 3v11H9a3 3 0 0 0-3 3V4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 17h9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="NovaDesk documentation for building desktop-grade experiences.">
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroBackdrop} />
          <div className={clsx('container', styles.heroInner)}>
            <div className={styles.heroContent}>
              <div className={styles.heroCards}>
                {heroCards.map((card) => (
                  <Link key={card.title} to={card.to} className={styles.heroCard}>
                    <div className={styles.heroCardIcon}>{card.icon}</div>
                    <div className={styles.heroCardContent}>
                      <span className={styles.heroCardTitle}>{card.title}</span>
                      <span className={styles.heroCardDescription}>{card.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
