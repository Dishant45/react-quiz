import { Component } from "react";
import questions from "../data/question";
import Instruction from "./Instruction";
import Question from "./Question";
import CountDown from "./Countdown";
// import Button from "./Button";

class QuizApp extends Component {
  state = {
    isQuizStarted: false,
    questions: "",
    value: 0,
  };
  componentDidMount() {
    let quizQuestions = questions.map((question) => {
      return {
        ...question,
        isCorrectlyAnswered: false,
        timeTaken: 0,
        isAttempted: false,
        isSubmitted: false,
        selectedAnswer: "",
      };
    });
    this.setState({ questions: [...quizQuestions] });
  }

  startQuiz = (event) => {
    this.setState({ isQuizStarted: true });
  };
  nextQuiz = (event) => {
    if (this.state.value < 4) {
      this.setState({ value: this.state.value + 1 });
    }
  };
  previousQuiz = (event) => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };
  render() {
    return (
      <div>
        <h1>Quiz Application</h1>
        <CountDown />
        {this.state.isQuizStarted ? (
          <div>
            <Question question={this.state.questions[this.state.value]} />
            <button onClick={this.nextQuiz}>Next</button>
            <button onClick={this.previousQuiz}>Previous</button>
          </div>
        ) : (
          <div>
            <Instruction />
            {/* <Button /> */}
            <button onClick={this.startQuiz}>Start Quiz</button>
          </div>
        )}
      </div>
    );
  }
}
export default QuizApp;
