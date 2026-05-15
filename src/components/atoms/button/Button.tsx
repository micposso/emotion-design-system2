import React from 'react'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'link' | 'disabled'
type Size = 'sm' | 'md' | 'lg'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  loading?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  iconLeft,
  iconRight,
  children,
  className = '',
  disabled,
  ...rest
}: Props) {
  const isDisabled = disabled || variant === 'disabled' || loading
  const cls = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    isDisabled ? 'ds-button--disabled' : '',
    loading ? 'ds-button--loading' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button className={cls} disabled={isDisabled} aria-disabled={isDisabled} aria-busy={loading} {...rest}>
      {loading && <span className="ds-button__spinner" aria-hidden="true" />}
      {!loading && iconLeft && <span className="ds-button__icon">{iconLeft}</span>}
      <span className="ds-button__label">{children}</span>
      {!loading && iconRight && <span className="ds-button__icon">{iconRight}</span>}
    </button>
  )
}
