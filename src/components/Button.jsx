import React from 'react'

const Button = ({color,bgColor,size,text,borderRadius}) => {
  return (
    <button type='button' className={`text-${size} p-3 hover:drop-shadow-xl`} style={{
      color:color,
      backgroundColor:bgColor,
      borderRadius:borderRadius
    }}>{text}</button>
  )
}

export default Button
