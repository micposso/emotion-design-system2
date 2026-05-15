import React from 'react';
import Avatar from '../../atoms/avatar/Avatar';
import Badge from '../../atoms/badge/Badge';
import Divider from '../../atoms/divider/Divider';
import Typography from '../../atoms/typography/Typography';
import './Sidebar.css';

type NavItem = {
  label: string;
  href: string;
  badge?: string | number;
};

type Props = {
  logo?: string;
  navItems?: NavItem[];
  user?: { name: string; role: string; avatarSrc: string };
};

const defaultNavItems: NavItem[] = [
  { label: 'Dashboard', href: '#' },
  { label: 'Components', href: '#', badge: 'New' },
  { label: 'Tokens', href: '#' },
  { label: 'Documentation', href: '#' },
  { label: 'Settings', href: '#' },
];

export default function Sidebar({
  logo = 'DesignSystem',
  navItems = defaultNavItems,
  user = { name: 'Jane Doe', role: 'Designer', avatarSrc: '' },
}: Props) {
  return (
    <aside className="o-sidebar">
      <div className="o-sidebar__brand">
        <Typography as="span" variant="h4" className="o-sidebar__logo">{logo}</Typography>
      </div>
      <Divider />
      <nav className="o-sidebar__nav" aria-label="Sidebar navigation">
        <ul className="o-sidebar__nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="o-sidebar__nav-item">
              <a href={item.href} className="o-sidebar__nav-link">
                <span>{item.label}</span>
                {item.badge && <Badge color="primary">{item.badge}</Badge>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {user && (
        <>
          <Divider />
          <div className="o-sidebar__user">
            {user.avatarSrc
              ? <Avatar src={user.avatarSrc} size="sm" />
              : <div className="o-sidebar__avatar-fallback">{user.name[0]}</div>
            }
            <div className="o-sidebar__user-info">
              <Typography as="span" variant="body" className="o-sidebar__user-name">{user.name}</Typography>
              <Typography as="span" variant="caption" className="o-sidebar__user-role">{user.role}</Typography>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
