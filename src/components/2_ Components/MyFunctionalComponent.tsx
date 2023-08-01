interface MyProps {
  name: string;
}

function MyFunctionalComponent({ name }: MyProps) {
  return <h1>Hello, {name}</h1>;
}

export default MyFunctionalComponent;
