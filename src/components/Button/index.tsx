import React from 'react'
import {Button} from './ButtonElements'

type PropTypes = {
  buttonText:string
  marginTop:string
  type:string
}

const OrangeButton = ({buttonText,marginTop,type}:PropTypes) => {

  

  return (
    <Button marginTop={marginTop} type={type}>{buttonText}</Button>
  )
}

export default OrangeButton