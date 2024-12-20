import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter,setCounter] = useState(10)
//let counter = 5
const addvalue = ()=>{
  if(counter<20)
  setCounter(counter+1);
}
const removeValue = ()=>{
  if(counter>0)
    setCounter(counter-1)
}

  return (
    <>
      <div>
        <h1> couter </h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={addvalue}>add value by 1</button>
        <button onClick={removeValue}>decrease value by 1</button>
        
      </div>
        
    </>
  )
}

export default App
