import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export default function Input({ className = '', ...props }: InputProps) {
  const baseStyles = 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
  
  return (
    <input 
      className={`${baseStyles} ${className}`}
      {...props}
    />
  )
}
