import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h2>Hello,{name || "Stranger"}! </h2>
      <input type="text" onChange={handleChange} placeholder="Enter Your Name" />
    </div>
  );
}
