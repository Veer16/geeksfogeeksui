import React from "react";

export default class Lifecycle extends React.Component {
  constructor(props: {}) {
    super(props);
    console.log("constructor");
  }
  static getDerivedStateFromProps() {
    console.log("getDrivedFromProps");
  }
  render() {
    console.log("render");
    return <div>render</div>;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}
