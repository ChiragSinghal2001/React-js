import { useState , useCallback} from 'react'
import './App.css'

function App() {
    let [counter, setCounter] = useState(17)
  // let counter=5;

  function addValue(){
    // setCounter((counter)=>{
    //   return counter=counter+1
    // })
    // setCounter((counter)=>{
    //   return counter=counter+1
    // })
    // setCounter((counter)=>{
    //   return counter=counter+1
    // })
    // setCounter((counter)=>{
    //   return counter=counter+1
    // })
    setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    console.log(counter);
  }
  function removeValue(){
    if(counter>0){
      counter--;
    setCounter(counter)
    } 
    console.log(counter);
  }
  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}  disabled={counter === 0}>Remove value Value</button>
      <p>lets check the value: {counter}</p>
    </>
  )
}

export default App
