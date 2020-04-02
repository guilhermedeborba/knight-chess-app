import React from 'react'

const Icon = ({ children, iconName, key }) => (
  <i key={key || `icon-${iconName}`} class={`fas fa-${iconName}`}>
    {children}
  </i>
)

export default Icon
