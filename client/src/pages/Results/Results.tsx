import { useEffect } from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/actions/userActions";
import axios from "axios";

interface Props {
    name: string;
    score: number;
}

const Result = ({ name, score }: Props) => {
   const navigate = useNavigate();
   const dispatch = useDispatch()

   useEffect(() => {
      const postStudentData = async () => {
         try {
            if (!name) {
               navigate("/");
            } else {
               await axios.post(
                  `${
                     import.meta.env.VITE_REACT_APP_BACKEND_API_URL
                  }/student/newStudent`,
                  {
                     name,
                     score,
                  }
               );
            }
         } catch (error) {
            console.error("Error creating student:", error);
         }
      };

      postStudentData();
   }, []);

   return (
      <div className="result">
         <span className="title">Final Score : {score}</span>
         <button
            style={{ alignSelf: "center", marginTop: 20 }}
            onClick={() => {
               dispatch(setCurrentUser(""))
            }}
         >
            Go to homepage
         </button>
      </div>
   );
};

export default Result;
