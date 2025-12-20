import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  onSkipAnswer,
  questionText,
  answers,
  selectedAnswers,
  answerState,
  onSelectAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswers}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
