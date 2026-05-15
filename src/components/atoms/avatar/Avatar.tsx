import React from 'react';
import './Avatar.css';

type Props = {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function Avatar({ src, alt = 'Avatar', size = 'md', className = '' }: Props) {
  return (
    <img className={`a-avatar a-avatar--${size} ${className}`.trim()} src={src} alt={alt} />
  );
}
