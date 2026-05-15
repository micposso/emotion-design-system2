import React from 'react';
import './Divider.css';

type Variant = 'solid' | 'dashed' | 'dotted' | 'thick';

type Props = {
  variant?: Variant;
  vertical?: boolean;
  label?: string;
  className?: string;
};

export default function Divider({ variant = 'solid', vertical = false, label, className = '' }: Props) {
  const cls = ['a-divider', `a-divider--${variant}`, vertical ? 'a-divider--vertical' : '', className].filter(Boolean).join(' ');

  if (label) {
    return (
      <div className={`a-divider__labeled ${className}`.trim()} role="separator">
        <span className="a-divider__line" />
        <span className="a-divider__label">{label}</span>
        <span className="a-divider__line" />
      </div>
    );
  }

  return <div className={cls} role="separator" />;
}
