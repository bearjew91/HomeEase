import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent'
  const defaultStyles = 'bg-[var(--brand)] text-white shadow-[0_16px_30px_rgba(124,45,18,0.22)] hover:-translate-y-0.5 hover:bg-[var(--brand-deep)] hover:shadow-[0_18px_36px_rgba(124,45,18,0.28)]'
  
  return (
    <button className={`${baseStyles} ${className || defaultStyles}`} {...props}>
      {children}
    </button>
  )
}
