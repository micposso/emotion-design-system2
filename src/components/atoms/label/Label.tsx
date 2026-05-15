import React from 'react';
import './Label.css';

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ children, className = '', ...rest }: Props) {
  return (
    <label className={`a-label ${className}`.trim()} {...rest}>
      {children}
    </label>
  );
}
