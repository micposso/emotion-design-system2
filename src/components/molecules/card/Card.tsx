import React from 'react'
import Button from '../../atoms/button/Button'
import './Card.css'
import hero from '../../../assets/hero.png'

type Props = {
  title?: string
  text?: string
  imageSrc?: string | null
  showImage?: boolean
  showActions?: boolean
}

export default function Card({
  title = 'Card Title',
  text = 'This is a placeholder description for the card component. Use this space to communicate a short summary or metric.',
  imageSrc = hero,
  showImage = true,
  showActions = true
}: Props) {
  return (
    <article className="m-card">
      {showImage && imageSrc && (
        <img className="m-card__image" src={imageSrc} alt="Placeholder" />
      )}

      <div className="m-card__body">
        <h3 className="m-card__title">{title}</h3>
        <p className="m-card__text">{text}</p>

        {showActions && (
          <div className="m-card__actions">
            <Button variant="primary">Primary action</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        )}
      </div>
    </article>
  )
}
