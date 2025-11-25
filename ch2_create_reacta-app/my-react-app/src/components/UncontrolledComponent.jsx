import { useRef, useState } from "react";

function UncontrolledComponent() {
  const inputRef = useRef();
  const [surname, setSurName] = useState("");


  function handleSubmit(e) {
    //alert("You typed: " + inputRef.current.value);
   setSurName(e.target.value)
  }

  return (
    <div> 
    <h2>{surname}</h2>
      <input type="text" ref={inputRef} />
      <input type="text" onChange={handleSubmit} />
      <button onClick={handleSubmit}>Show Value</button>
    </div>
  );
}

export default UncontrolledComponent