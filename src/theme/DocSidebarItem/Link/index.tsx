import type {Props} from '@theme/DocSidebarItem/Link';
import OriginalDocSidebarItemLink from '@theme-original/DocSidebarItem/Link';

export default function DocSidebarItemLink(props: Props) {
  const badge = props.item.customProps?.badge as string | undefined;
  const badgeVariant = props.item.customProps?.badgeVariant as string | undefined;
  if (!badge) {
    return <OriginalDocSidebarItemLink {...props} />;
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

  return <OriginalDocSidebarItemLink {...props} item={item} />;
}
