function NameList() {
  const names = ["Meya", "Sara", "John", "Huda"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index} >{name}</li>
      ))}
    </ul>
  );
}

export default NameList;
 