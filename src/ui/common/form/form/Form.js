import { Button } from "../../button/Button";
import { Question } from "../question/Question";
import { questions } from "../../../../data/questions";
import { useState } from "react";
import { choose } from "../../../../utils/picker";

export const Form = () => {
  const [formData, setFormData] = useState({
    reasonOfLearning: "",
    experience: "",
    field: "",
    wayToLearn: "",
    startup: "",
    apple: "",
    microsoft: "",
  });

  const [results, setResults] = useState(undefined);

  const handleQuestionChange = (question, answer) => {
    setFormData((prevData) => ({
      ...prevData,
      [question]: answer.target.value,
    }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value !== "");
  };

  return (
    <div className="px-20 lg:px-44 xl:px-80 py-10 flex items-center flex-col">
      {results === undefined ? (
        <>
          {questions.map((q, index) => (
            <Question
              key={index}
              question={q.question}
              answers={q.answers}
              onChange={(answer) =>
                handleQuestionChange(q.shortDescription, answer)
              }
            />
          ))}
        </>
      ) : <>{results.Java}</>}

      {isFormValid() && (
        <Button text="Get results" onClick={() => setResults(choose(formData))} />
      )}
    </div>
  );
};
