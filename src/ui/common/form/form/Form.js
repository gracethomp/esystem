import { Button } from "../../button/Button";
import { Question } from "../question/Question";
import { questions } from "../../../../data/questions";
import { useState } from "react";
import { choose } from "../../../../utils/picker";
import { logos } from "./languages";

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

  const defineResult = (results) => {
    setResults(
      Object.entries(results)
        .filter(([_, value]) => value > 0 && value <= 3)
        .sort((a, b) => b[1] - a[1])
    );
    setFormData({
      reasonOfLearning: "",
      experience: "",
      field: "",
      wayToLearn: "",
      startup: "",
      apple: "",
      microsoft: "",
    });
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
      ) : (
        <div className="flex items-center flex-col">
          {results.map(([language, value], index) => (
            <>
              {index === 0 && (
                <img src={logos[language]} alt="language" className="w-28" />
              )}
              <div
                key={language}
                className={index === 0 ? "text-2xl text-violet-500" : ""}
              >
                {language}: {value}
              </div>
            </>
          ))}
        </div>
      )}

      {isFormValid() && (
        <Button
          text="Get results"
          onClick={() => defineResult(choose(formData))}
        />
      )}
    </div>
  );
};
