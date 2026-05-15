import React from 'react';
import './Checkbox.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Checkbox({ label, className = '', ...rest }: Props) {
  return (
    <label className={`a-checkbox ${className}`.trim()}>
      <input type="checkbox" className="a-checkbox__input" {...rest} />
      {label && <span className="a-checkbox__label">{label}</span>}
    </label>
  );
}
