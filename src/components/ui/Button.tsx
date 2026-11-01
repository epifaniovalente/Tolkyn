import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-sm font-semibold transition-all disabled:opacity-60'

  const variants = {
    primary: 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-700)] hover:shadow-lg',
    secondary: 'bg-white text-[var(--color-primary-900)] hover:bg-gray-50',
    outline: 'border border-white/25 text-white hover:bg-white/10',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}