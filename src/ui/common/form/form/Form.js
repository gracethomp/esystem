import { Button } from "../../button/Button";
import { Question } from "../question/Question";
import { questions } from "../../../../data/questions";

export const Form = () => {
  return (
    <div className="px-20 lg:px-44 xl:px-80 py-10 flex items-center flex-col">
      {questions.map((q, index) => (
        <Question key={index} question={q.question} answers={q.answers} />
      ))}
      <Button text="Get results" />
    </div>
  );
};
