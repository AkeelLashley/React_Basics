import { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

   const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setAge(parseInt(event.target.value));
   };


  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <input type="number" value={age} onChange={handleAgeChange} />

      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </>
  );
};

export default NameInput;
