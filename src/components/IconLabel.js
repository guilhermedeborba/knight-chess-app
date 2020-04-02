import React from 'react'
import Icon from './Icon'

const IconLabel = ({ iconName, label, children, key }) => (
  <>
    <Icon iconName={iconName} key={key}>
      {children}
    </Icon>
    <span class="link-label">{label}</span>
  </>
)

export default IconLabel
