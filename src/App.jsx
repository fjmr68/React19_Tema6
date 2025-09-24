import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent/MyComponent'

function App() {
  return (
    <>
      <MyComponent caption='Prueba de componente' placeholder='Escribe algo...' color='black'/>
    </>
  )
}

export default App
