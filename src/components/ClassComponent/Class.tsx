import { Component } from "react";
import { Props } from "./Class.types";

export class Class extends Component<Props> {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Props name: {name}</p>
        <p>Props age: {age}</p>
      </div>
    );
  }
}
