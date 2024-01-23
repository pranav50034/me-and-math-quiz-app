import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Question from "../../components/Question/Question";

const Quizes = () => {
   const [options, setOptions] = useState([]);
   const [currQues, setCurrQues] = useState(0);
   const [currentScore, setCurrentScore] = useState(0)

   interface State {
      user: {
         currentUser: {
            name: string;
         };
         score: number;
      };
      questions: string[];
   }

   const { questions } = useSelector((state: any) => state.question);
   const { currentUser, score } = useSelector((state: State) => state.user);

   useEffect(() => {
      setOptions(
         questions &&
            handleShuffle([
               questions[currQues]?.correct_answer,
               ...questions[currQues]?.incorrect_answers,
            ])
      );
   }, [currQues, questions]);

   const handleShuffle = (options: string[]) => {
      console.log(options.sort(() => Math.random() - 0.5));

      return options.sort(() => Math.random() - 0.5);
   };

   return (
      <div className="wrapper">
         <h1>Welcome {currentUser.name}</h1>
         {questions && (
            <Question
               currQues={currQues}
               setCurrQues={setCurrQues}
               questions={questions}
               options={options}
               correct={questions[currQues]?.correct_answer}
               score={currentScore}
               setCurrScore={setCurrentScore}
            />
         )}
      </div>
   );
};

export default Quizes;
