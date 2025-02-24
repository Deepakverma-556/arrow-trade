import React from 'react'
interface DescriptionItem{
    myClass?: string;
    text: string;
}
const Description = ({myClass,text}:DescriptionItem) => {
  return (
      <p className={`${myClass} max-sm:text-sm text-base leading-6 text-white/70`}>{text}</p>
  )
}

export default Description