import { Component } from "react";

interface MyProps {
  name: string;
}

class MyClassComponent extends Component<MyProps> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
export default MyClassComponent

