import React from 'react'
import ProducDetailpage from '../pages/ProductDetailpage'
import { Navigate } from 'react-router'

const Private = ({authenticate}) => {
  return authenticate== 
  true?<ProducDetailpage/>:<Navigate to =''></Navigate>
}

export default Private