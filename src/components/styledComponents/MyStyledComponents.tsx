import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  text-align: center;
`;
const Button = styled.button`
  background-color: #f45465;
`;

const MyStyledComponent = () => {
  return (
    <Wrapper>
      <Title>Hello, World!</Title>
      <Button>Click Me</Button>
    </Wrapper>


  );
};

export default MyStyledComponent;
