interface MyProps {
  name: string;
}

const MyArrowFunctionalComponent = ({ name }: MyProps) => {
  return <h1>Hello, {name}</h1>;
};

export default MyArrowFunctionalComponent;
