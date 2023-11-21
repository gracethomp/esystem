import { Dropdown } from "../../dropdown/Dropdown";

export const Question = ({ question, answers, onChange }) => {
  return (
    <div className="flex flex-col md:items-center justify-between w-full py-6">
      <p className="text-2xl">{question}</p> 
      <Dropdown answers={answers} onChange={onChange} name={question}/>
    </div> 
  );
};
