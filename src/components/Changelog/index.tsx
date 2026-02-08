import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ChangelogProps = {
  children: ReactNode;
  className?: string;
};

type VersionProps = {
  version: string;
  date: string;
  releaseDate: string;
  children: ReactNode;
  className?: string;
  isLatest?: boolean;
};

type ChangeTypeProps = {
  type: 'added' | 'fixed' | 'changed' | 'removed' | 'deprecated' | 'security';
  children: ReactNode;
  className?: string;
};

type ChangeItemProps = {
  children: ReactNode;
  className?: string;
};

export function Changelog({ children, className }: ChangelogProps) {
  return (
    <div className={clsx(styles.changelog, className)}>
      {children}
    </div>
  );
}

export function Version({ 
  version, 
  date, 
  releaseDate, 
  children, 
  className,
  isLatest = false
}: VersionProps) {
  const slug = version.toLowerCase().replace(/[^a-z0-9.]+/g, '-');
  
  return (
    <div 
      className={clsx(styles.version, className, isLatest && styles.latest)}
      id={slug}
    >
      <div className={styles.versionHeader}>
        <h2 className={styles.versionTitle}>
          <a href={`#${slug}`} className={styles.versionLink}>
            [{version}]
          </a>
          {isLatest && <span className={styles.latestBadge}>Latest</span>}
        </h2>
        <div className={styles.versionMeta}>
          <time dateTime={releaseDate} className={styles.releaseDate}>
            {date}
          </time>
          <time dateTime={releaseDate} className={styles.isoDate}>
            {releaseDate}
          </time>
        </div>
      </div>
      <div className={styles.versionContent}>
        {children}
      </div>
    </div>
  );
}

export function ChangeType({ type, children, className }: ChangeTypeProps) {
  const typeLabels = {
    added: 'Added',
    fixed: 'Fixed',
    changed: 'Changed',
    removed: 'Removed',
    deprecated: 'Deprecated',
    security: 'Security'
  };

  const typeClasses = {
    added: styles.added,
    fixed: styles.fixed,
    changed: styles.changed,
    removed: styles.removed,
    deprecated: styles.deprecated,
    security: styles.security
  };

  return (
    <div className={clsx(styles.changeType, typeClasses[type], className)}>
      <h3 className={styles.changeTypeTitle}>{typeLabels[type]}</h3>
      <ul className={styles.changeList}>
        {children}
      </ul>
    </div>
  );
}

export function ChangeItem({ children, className }: ChangeItemProps) {
  return (
    <li className={clsx(styles.changeItem, className)}>
      {children}
    </li>
  );
}

// Individual components are exported above