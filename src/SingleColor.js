import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert]= useState(false)
  const bgc = rgb.join(',')
  const hex = rgbToHex(...rgb) 

  

    useEffect(()=>{
      let timeOut = setTimeout(()=>{
        setAlert(false)
      },3000)
      return ()=>{
        clearTimeout(timeOut)
      }
    },[alert])

  return <article onClick={()=>{
    setAlert(true)
     navigator.clipboard.writeText(hex)
  }} className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bgc})`}}>
    <p className='percent-value'>
{weight}%
    </p>
    <p className='color-value'>
      {hex}
    </p>
    {alert&&<p className='alert'>copied to clipboard </p>}
  </article>
}

export default SingleColor
