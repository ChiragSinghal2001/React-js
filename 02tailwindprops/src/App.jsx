import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  // let myobj={
  //   user:"your father",
  //   password:"Baap bol"
  // }

  return (
    <>
      <h1 className='bg-green-400 rounded-xl mb-4'>
      Hello world!
    </h1>
    <Card  username="codewithchai" />
    <Card />

    </>
  )
}

export default App
