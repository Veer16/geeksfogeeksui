// To pass the arguments within Component we use props

import React from "react";

interface IAddProps {
  a: number;
  b: number;
}

export default class Add extends React.Component<IAddProps> {
  render() {
    return <div>{this.props.a + this.props.b}</div>;
  }
}
// prop is only a readonly property
