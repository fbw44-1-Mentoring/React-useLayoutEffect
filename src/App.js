
import React, { useLayoutEffect,useEffect, useRef } from 'react';

function App() {
const heading = useRef()


useLayoutEffect(()=>{
  console.log("useEffect")
  heading.current.style.backgroundColor="green"
  heading.current.style.position="relative"
  heading.current.style.top="200px"
},[])

/* useEffect(()=>{
  console.log("useEffect")
  heading.current.style.backgroundColor="green"
  heading.current.style.position="relative"
  heading.current.style.top="200px"


  //  fetch("")  asynchronous 
},[]) */

  return (
    <div className="App">
      {console.log("jsx")}
      <h1 ref={heading}>My React App</h1>
    </div>
  );
}


export default App;