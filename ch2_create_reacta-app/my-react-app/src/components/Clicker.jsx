function Clicker() {
  function sayHello(name) {
    alert("You clicked me " + name);
  }

  return (
    <>
      <button onClick={() => sayHello("Meya")}> Click Me Meya</button>
    
    </>
  );
}

export default Clicker;