import React from 'react';
import './Radio.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Radio({ label, className = '', ...rest }: Props) {
  return (
    <label className={`a-radio ${className}`.trim()}>
      <input type="radio" className="a-radio__input" {...rest} />
      {label && <span className="a-radio__label">{label}</span>}
    </label>
  );
}
