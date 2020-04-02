import React from 'react'
import Icon from './Icon'

const Button = props => {
  const { iconPosition = 'left', iconName } = props

  return (
    <button {...props}>
      {iconPosition === 'left' ? <Icon iconName={iconName} /> : ''}

      <span class="btn-label">{props.children}</span>

      {iconPosition === 'right' ? <Icon iconName={iconName} /> : ''}
    </button>
  )
}
export default Button
