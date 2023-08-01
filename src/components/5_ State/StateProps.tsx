import React, { useState } from "react";
import DisplayName from "./DisplayName";

const StateProps = () => {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <DisplayName name={name} />
    </div>
  );
};

export default StateProps;
