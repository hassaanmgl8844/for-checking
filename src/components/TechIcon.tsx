import React from 'react'

const TechIcon = ({component}:{component: React.ElementType}) => {
    const Componenet = component;
  return (
    <Componenet className="size-10" />
  )
}

export default TechIcon