import type {ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type FileTreeProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

type FolderProps = {
  name: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

type FileProps = {
  name: string;
};

function FileTreeFolder({name, defaultOpen = true, children}: FolderProps) {
  return (
    <details className={styles.folder} open={defaultOpen}>
      <summary className={styles.folderSummary}>
        <span className={styles.folderIcon} aria-hidden="true">▾</span>
        <span className={styles.folderName}>{name}/</span>
      </summary>
      <div className={styles.folderBody}>{children}</div>
    </details>
  );
}

function FileTreeFile({name}: FileProps) {
  return <div className={styles.file}>• {name}</div>;
}

export default function FileTree({title = 'File Tree', children, className}: FileTreeProps) {
  return (
    <div className={clsx(styles.fileTree, className)}>
      <div className={styles.header}>
        <span>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

FileTree.Folder = FileTreeFolder;
FileTree.File = FileTreeFile;
