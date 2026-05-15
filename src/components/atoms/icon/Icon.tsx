import React from 'react';
import './Icon.css';

type Props = {
  name: string;
  size?: string;
  color?: string;
  className?: string;
};

export default function Icon({ name, size = '1.5rem', color = 'currentColor', className = '' }: Props) {
  return (
    <span className={`a-icon a-icon--${name} ${className}`.trim()} style={{ fontSize: size, color }} aria-hidden="true" />
  );
}
