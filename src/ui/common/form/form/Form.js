import { Question } from "../question/Question";

export const Form = () => {
  return (
    <div className="px-20 lg:px-44 xl:px-80 py-10 flex items-center flex-col">
      <Question
        question="1) Why do you want to learn programming?"
        answers={["Interest", "Make money", "I don't know"]}
      />
      <Question
        question="2) Do you have experience in programming?"
        answers={["Yes", "No"]}
      />
      <Question
        question="3) What field are you interested in?"
        answers={["Frontend", "Backend", "Mobile", "Enterprise", "Gamedev"]}
      />
      <Question
        question="4) How do you study?"
        answers={["I always look for easy ways", "I like difficult tasks"]}
      />
    </div>
  );
};
