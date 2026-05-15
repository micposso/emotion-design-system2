import React from 'react'
import Button from '../../atoms/button/Button'
import Badge from '../../atoms/badge/Badge'
import Typography from '../../atoms/typography/Typography'
import Divider from '../../atoms/divider/Divider'
import './Card.css'
const CARD_IMAGE = 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

type Layout = 'horizontal' | 'vertical'

type Props = {
  title?: string
  text?: string
  imageSrc?: string | null
  showImage?: boolean
  showActions?: boolean
  layout?: Layout
  badge?: string
  meta?: string
  footer?: React.ReactNode
  stat?: { value: string; label: string }
}

export default function Card({
  title = 'Card Title',
  text = 'This is a placeholder description for the card component.',
  imageSrc = CARD_IMAGE,
  showImage = true,
  showActions = true,
  layout = 'horizontal',
  badge,
  meta,
  footer,
  stat,
}: Props) {
  return (
    <article className={`m-card m-card--${layout}`}>
      {showImage && imageSrc && (
        <img className="m-card__image" src={imageSrc} alt="Card visual" />
      )}
      <div className="m-card__body">
        {badge && <Badge color="primary" className="m-card__badge">{badge}</Badge>}
        {meta && <Typography as="span" variant="overline" className="m-card__meta">{meta}</Typography>}
        <h3 className="m-card__title">{title}</h3>
        {stat && (
          <div className="m-card__stat">
            <span className="m-card__stat-value">{stat.value}</span>
            <span className="m-card__stat-label">{stat.label}</span>
          </div>
        )}
        <p className="m-card__text">{text}</p>
        {showActions && (
          <div className="m-card__actions">
            <Button variant="primary" size="sm">Primary action</Button>
            <Button variant="ghost" size="sm">Learn more</Button>
          </div>
        )}
        {footer && (
          <>
            <Divider />
            <div className="m-card__footer">{footer}</div>
          </>
        )}
      </div>
    </article>
  )
}
