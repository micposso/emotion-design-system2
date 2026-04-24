import React from 'react'
import Button from '../button/Button'
import './DownloadButton.css'

type Props = {
  label?: string
  href?: string
  filename?: string
  disabled?: boolean
}

// Level: Atom | Reason: Simple, single-purpose control implemented using the canonical Button atom.
export default function DownloadButton({
  label = 'Download',
  href,
  filename = 'download',
  disabled = false
}: Props) {
  const handleDownload = () => {
    if (!href) return
    const a = document.createElement('a')
    a.href = href
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <Button variant={disabled ? 'disabled' : 'primary'} onClick={handleDownload} aria-label={label} disabled={disabled}>
      <svg
        className="ds-button__icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>{label}</span>
    </Button>
  )
}
