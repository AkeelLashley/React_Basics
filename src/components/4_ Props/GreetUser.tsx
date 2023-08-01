interface Props {
  name: string;
  age: number;
  isMale: boolean;
}


// RE USUABLE COMPONENT
// DEFAULT: props: Props
// ALTERNATIVE DESTRUCTING PROPS: ONLY NEED TO ACCESS NAME {name, ...props}
const GreetUser = ( props: Props) => {

  // PROPS SHOULD NEVER BE UPDATED AS THEY ARE DYNAMIC VALUES BEING PASSED 
  // props.age = 12

  return (
    <>
      <h1>Hello, {props.name} !</h1>
      <p>Your age is {props.age}</p>
      <p>You are a {props.isMale ? "Male" : "Female"}</p>
      {/* <p>{props.isMale && "Male"}</p> */}
    </>
  );
};

export default GreetUser;
