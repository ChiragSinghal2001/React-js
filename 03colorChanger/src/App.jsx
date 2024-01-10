import { useState } from 'react'
import ButtonFormat from './components/buttonformat'


function App() {
  const [color, setColor] = useState("olive")
  const handleButtonClick = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
    <div className="w-full h-screen duration-200" 
    style={ {backgroundColor: color}}
    ><div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      
      <ButtonFormat givencolor="Red" Click={() => handleButtonClick('red')} />
            <ButtonFormat givencolor="Blue" Click={() => handleButtonClick('blue')} />
            <ButtonFormat givencolor="Green" Click={() => handleButtonClick('green')} />
            <ButtonFormat givencolor="Olive" Click={() => handleButtonClick('Olive')} />
            <ButtonFormat givencolor="Gray" Click={() => handleButtonClick('Gray')} />
            <ButtonFormat givencolor="Purple" Click={() => handleButtonClick('Purple')} />
            <ButtonFormat givencolor="Black" Click={() => handleButtonClick('Black')} />
            <ButtonFormat givencolor="Yellow" fontcolor="black" Click={() => handleButtonClick('Yellow')} />
            <ButtonFormat givencolor="Lavender" fontcolor="black" Click={() => handleButtonClick('Lavender')} />
      </div>
    </div>
    </div>
    </>
  )
}

export default App
