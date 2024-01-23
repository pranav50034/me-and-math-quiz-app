import { useState } from "react";
import "./Question.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser, setScore } from "../../redux/actions/userActions";

interface Question {
   currQues: number;
   setCurrQues: any;
   questions: any;
   options: string[];
   correct: string;
   score: number;
   setCurrScore: any;
}

const Question = ({
   currQues,
   setCurrQues,
   questions,
   options,
   correct,
   score,
   setCurrScore,
}: Question) => {
   const [selected, setSelected] = useState("");
   const [error, setError] = useState(false);

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleSelect = (i: any) => {
      if (selected === i && selected === correct) return "select";
      else if (selected === i && selected !== correct) return "wrong";
      else if (i === correct) return "select";
   };

   const handleCheck = (i: any) => {
      setSelected(i);
      if (i === correct) setCurrScore(score + 1);
      setError(false);
   };

   const handleNext = () => {
      if (currQues > 8) {
        dispatch(setScore(score));
         navigate("/results")
      } else if (selected) {
         setCurrQues(currQues + 1);
         setSelected("")
      } else alert("Please select an option first");
   };

   const handleQuit = () => {
      setCurrQues(0);
      dispatch(setCurrentUser(""));
      dispatch(setScore(0))
      navigate("/");
   };

   return (
      <div className="question">
         <h1>Question {currQues + 1} :</h1>

         <div className="singleQuestion">
            <h2>{questions[currQues].question}</h2>
            <div className="options">
               {options &&
                  options.map((i) => (
                     <button
                        className={`singleOption  ${
                           selected && handleSelect(i)
                        }`}
                        key={i}
                        onClick={() => handleCheck(i)}
                        disabled={selected ? true : false}
                     >
                        {i}
                     </button>
                  ))}
            </div>
            <div className="controls">
               <button onClick={() => handleQuit()}>Quit</button>
               <button onClick={handleNext}>
                  {currQues > 20 ? "Submit" : "Next Question"}
               </button>
            </div>
         </div>
      </div>
   );
};

export default Question;
