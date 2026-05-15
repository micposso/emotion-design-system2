import React from 'react';
import './Loader.css';

type Color = 'primary' | 'success' | 'danger' | 'warning' | 'muted';
type Size = 'sm' | 'md' | 'lg';

type Props = {
  color?: Color;
  size?: Size;
  label?: string;
  className?: string;
};

export default function Loader({ color = 'primary', size = 'md', label = 'Loading...', className = '' }: Props) {
  return (
    <div className={['a-loader', `a-loader--${color}`, `a-loader--${size}`, className].filter(Boolean).join(' ')} role="status" aria-label={label}>
      <span className="a-loader__ring" aria-hidden="true" />
      <span className="a-loader__sr-only">{label}</span>
    </div>
  );
}
