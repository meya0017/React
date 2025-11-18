import { useState } from "react"

 export function Tiriye() {
  let  [count, setcount] = useState (0);
  

  return (
    <div style={{backgroundColor:"green"}}>
        <h2>count: {count}</h2>
        <button onClick={() => setcount(count+1)}>increase</button>
        <button onClick={() => setcount(count-1)}>decrease</button>
    </div>
  );  
}

