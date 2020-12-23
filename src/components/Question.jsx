import { Component } from "react";

class Question extends Component {
  render() {
    console.log("Current question", this.props.question);
    let { question } = this.props;
    return (
      <div>
        <h1>{question.questionStatement}</h1>
        {question.options.map((answer) => {
          return (
            <div>
              <input type="radio" value={answer.value} name="options" />
              <label htmlFor="options">{answer.value}</label>
            </div>
          );
        })}
        <button>Reset</button>
      </div>
    );
  }
}
export default Question;
