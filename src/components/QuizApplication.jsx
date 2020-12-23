import { Component } from "react";
import questions from "../data/question";
import Instruction from "./Instruction";
import Question from "./Question";
// import Button from "./Button";

class QuizApp extends Component {
  state = {
    isQuizStarted: false,
    questions: "",
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

  render() {
    return (
      <div>
        <h1>Quiz Application</h1>
        {this.state.isQuizStarted ? (
          <Question question={this.state.questions[0]} />
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
