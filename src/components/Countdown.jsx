import { Component } from "react";

class CountDown extends Component {
  state = {
    sec: 0,
    min: 0,
  };
  incrementCounter = (event) => {
    setInterval(() => {
      this.setState({ sec: this.state.sec + 1 });
      if (this.state.sec == 60) {
        this.setState({ sec: 0 });
        this.setState({ min: this.state.min + 1 });
      }
    }, 1000);
  };

  render() {
    return (
      <P>
        Time:{this.state.min}:{this.state.sec}
      </P>
    );
  }
}

export default CountDown;
