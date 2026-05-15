import React from 'react';
import Button from '../../atoms/button/Button';
import Avatar from '../../atoms/avatar/Avatar';
import Badge from '../../atoms/badge/Badge';
import './Header.css';

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  logo?: string;
  navItems?: NavItem[];
  avatarSrc?: string;
  notificationCount?: number;
};

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Documentation', href: '#' },
];

export default function Header({
  logo = 'DesignSystem',
  navItems = defaultNavItems,
  avatarSrc,
  notificationCount = 0,
}: Props) {
  return (
    <header className="o-header">
      <div className="o-header__brand">
        <span className="o-header__logo">{logo}</span>
      </div>
      <nav className="o-header__nav" aria-label="Main navigation">
        <ul className="o-header__nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="o-header__nav-item">
              <a href={item.href} className="o-header__nav-link">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="o-header__actions">
        {notificationCount > 0 && (
          <Badge color="primary">{notificationCount}</Badge>
        )}
        <Button variant="secondary">Sign in</Button>
        {avatarSrc && <Avatar src={avatarSrc} size="sm" />}
      </div>
    </header>
  );
}
