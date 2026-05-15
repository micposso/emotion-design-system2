import React from 'react';
import './Switch.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Switch({ label, className = '', ...rest }: Props) {
  return (
    <label className={`a-switch ${className}`.trim()}>
      <input type="checkbox" className="a-switch__input" {...rest} />
      <span className="a-switch__slider" />
      {label && <span className="a-switch__label">{label}</span>}
    </label>
  );
}
