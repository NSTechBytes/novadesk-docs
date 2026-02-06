import clsx from 'clsx';
import styles from './styles.module.css';

type BadgeProps = {
  text: string;
  variant?: 'new' | 'fixed' | 'enhanced' | 'improved' | 'default';
};

export default function Badge({text, variant = 'default'}: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[variant])}>
      {text}
    </span>
  );
}
