import React from 'react'
import img from './img.jpg'

const ErrorMsg =()=>{
 return <div>
  <img src={img} alt='Ошибка'></img>
  <span>Произошла ужасающая ошибка. </span>

 </div>

 
}
export default ErrorMsg