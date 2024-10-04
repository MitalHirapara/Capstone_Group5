import React from 'react'
import PropTypes from 'prop-types'

/**
 * @typedef {'default' | 'secondary' | 'destructive' | 'outline'} BadgeVariant
 * @typedef {'sm' | 'md' | 'lg'} BadgeSize
 */

/**
 * @typedef {Object} BadgeProps
 * @property {React.ReactNode} children - The content of the badge
 * @property {BadgeVariant} [variant='default'] - The visual style variant of the badge
 * @property {BadgeSize} [size='md'] - The size of the badge
 * @property {string} [className=''] - Additional CSS classes to apply to the badge
 */

/**
 * A customizable Badge component
 * @param {BadgeProps} props
 */
export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '' 
}) {
  const baseStyles = 'skill-badge inline-flex items-center'
  
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-3.5 py-1.5'
  }

  return (
    <span 
      className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${className}
      `}
    >
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'secondary', 'destructive', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
}