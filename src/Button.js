import React from 'react'
import './App.css'
import App from './App'

const Button = ({keys, onClickFunc, type}) => {
  return (
    <button onClick={onClickFunc(keys)}>
      <h3>{keys}</h3>
    </button>
  )
}
export default Button
