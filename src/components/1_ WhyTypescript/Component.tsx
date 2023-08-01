import { useState } from "react";


interface User {
  id: string;
  name: string;
  country: Country;
}

interface Country {
  name: string;
  continent: string;
}


interface Props {
  title: string;
  description: string;
  getName: () => string;
  user: User;
}


function Component(props: Props) {
  const [name, setName] = useState("");

  const onClick = () => {
    const name = props.getName();
    setName(name);
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={onClick}> Click Here </button>
      <h1>{props.user.country.continent}</h1>
      {/* AUTOCOMPLETE */}
      {/* IF I HAVE A TYPO IN JAVASCRIPT WONT KNOW THIS IS A TYPO AnD YOU WILL SPEND HOURS DEBUGGING */}
      {/* <h1>{props.user.contry.continent}</h1> */}

      {name}
    </div>
  );
}
export default Component;
