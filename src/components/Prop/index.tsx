import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type PropProps = {
  name: string;
  type?: string;
  defaultValue?: string;
  children: ReactNode;
  className?: string;
};

export default function Prop({name, type, defaultValue, children, className}: PropProps) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <div className={clsx(styles.prop, className)} id={slug}>
      <div className={styles.header}>
        <a className={styles.name} href={`#${slug}`}>
          {name}
        </a>
        <div className={styles.meta}>
          {type && <span className={styles.pill}>Type: {type}</span>}
          {defaultValue && <span className={styles.pill}>Default: {defaultValue}</span>}
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
