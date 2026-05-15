import React from 'react';
import './Typography.css';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'body-lg' | 'caption' | 'overline';
  children: React.ReactNode;
  className?: string;
};

export default function Typography({ as = 'span', variant = 'body', children, className = '' }: Props) {
  const Tag = as;
  return (
    <Tag className={`a-typography a-typography--${variant} ${className}`.trim()}>{children}</Tag>
  );
}
