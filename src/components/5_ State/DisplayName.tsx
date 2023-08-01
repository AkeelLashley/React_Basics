interface DisplayNameProps {
  name: string;
}

const DisplayName = ({name} : DisplayNameProps) => {
  
  return <h1>{name}</h1>;
};

export default DisplayName;
