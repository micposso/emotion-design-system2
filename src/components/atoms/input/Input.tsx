import React from 'react';
import './Input.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, className = '', ...rest }: Props) {
  return (
    <label className={`a-input ${className}`.trim()}>
      {label && <span className="a-input__label">{label}</span>}
      <input className="a-input__field" {...rest} />
    </label>
  );
}
