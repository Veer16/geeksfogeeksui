import React from "react";
interface IProps {
  init: number;
}
interface IState {
  value: number;
}
// If we have to have the variable that don't vanish in the class and hold the value
export default class Increment extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: props.init,
    };
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          Increment by 1
        </button>
        <div>{this.state.value}</div>
      </>
    );
  }
}
// State can be updated inside the class
