import React from 'react';
import './Badge.css';

type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props = {
  children: React.ReactNode;
  color?: Color;
  size?: Size;
  dot?: boolean;
  className?: string;
};

export default function Badge({ children, color = 'primary', size = 'md', dot = false, className = '' }: Props) {
  return (
    <span className={['a-badge', `a-badge--${color}`, `a-badge--${size}`, dot ? 'a-badge--dot' : '', className].filter(Boolean).join(' ')}>
      {dot && <span className="a-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
