import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { setCurrentUser, setScore } from "../../redux/actions/userActions";
import Categories from "../../data/categories";
import axios from "axios";
import { setQuestions } from "../../redux/actions/questionActions";
import { useNavigate } from "react-router-dom";

const Form = () => {
   const [name, setName] = useState("");
   const [category, setCategory] = useState("");
   const [difficulty, setDifficulty] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate()

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!name || !category || !difficulty) {
         return;
      }
      dispatch(setCurrentUser(name));
      dispatch(setScore(0));

      const { data } = await axios.get(
         `https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
         }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      

      dispatch(setQuestions(data.results));
      navigate("/quizes")
   };

   return (
      <form
         onSubmit={(e) => {
            handleSubmit(e);
         }}
      >
         <input
            type="text"
            onChange={(e) => {
               setName(e.target.value);
            }}
            name="name-input"
            className="name-input"
            required
         />
         <label htmlFor="name-input">Your name</label>
         <select
            required
            name="category-input"
            className="categories"
            onChange={(e) => setCategory(e.target.value)}
         >
            <option value="" disabled selected>
               Select a category
            </option>
            {Categories.map((cat) => (
               <option key={cat.value} value={cat.value}>
                  {cat.category}
               </option>
            ))}
         </select>
         <select
            required
            name="difficulty-input"
            className="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
         >
            <option disabled selected value="">
               Select difficulty
            </option>
            <option key="Easy" value="easy">
               Easy
            </option>
            <option key="Medium" value="medium">
               Medium
            </option>
            <option key="Hard" value="hard">
               Hard
            </option>
         </select>
         <input className="submit-button" type="submit" value="Start Quiz!" />
      </form>
   );
};

export default Form;
