import{useState,useCallback,useEffect,useRef} from 'react'
import './App.css';

function App() {
  const[length,setLength] = useState(8)
  const[password,setPassword]= useState("")
  const[numberAllowed,setNumberAllowed]= useState(false)
  const[charAllowed,setCharrAllowed]= useState(false) 

  //useRef 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed){
      str = str+"!@#$%^&*"
    }
    if(numberAllowed){
      str = str + "1234567890"  
    }

    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length +1) 
      pass = pass+str.charAt(char)
    }

    setPassword(pass)
  }, [length,charAllowed,numberAllowed,setPassword])

  const copypasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])

  return (
    <> 
    <div className='w-full max-w-md mx-auto max-h-max  mb-5shadow-md rounded-lg px-4 my-8 text-orange-700 bg-gray-400'>
          <h1 className='text-black text-center'> Password Generator
          </h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}></input> 
            <button className='outline-none bg-blue-300 text-black px-3 py-0.5 shrink-0' onClick={copypasswordToClipboard}>copy</button>

          </div>
          <div className='flex text-sm gap-x-2'>
            <div  className='flex items-center gap-x-1'>
              <input type='range'
               min={6}
               max={100}
               value={length}
               className='cursor-pointer ' onChange={(e)=>{
                setLength(e.target.value)
               }}
               > 
               </input>
               <label>length:{length}</label>
              
            </div>
            <div className='flex items-center gap-x-1'>
               <input type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{
                  setNumberAllowed((prev)=>!prev);
                }}
                ></input>
                <label> Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
               <input type='checkbox'
                defaultChecked={charAllowed}
                id='charInput'
                onChange={()=>{
                  setCharrAllowed((prev)=>!prev);
                }}
                ></input>
                <label> Characters</label>
            </div>

          </div>
    </div>
    </>
  );
}

export default App;
