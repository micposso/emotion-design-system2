import React from 'react'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'disabled'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...rest
}: Props) {
  const isDisabled = disabled || variant === 'disabled'
  const cls = `ds-button ds-button--${variant} ${isDisabled ? 'ds-button--disabled' : ''} ${className}`.trim()
  return (
    <button className={cls} disabled={isDisabled} aria-disabled={isDisabled} {...rest}>
      {children}
    </button>
  )
}
