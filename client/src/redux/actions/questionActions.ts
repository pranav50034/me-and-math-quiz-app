import { SET_QUESTIONS } from "./actionTypes";

interface Questions {
   type: string;
   difficulty: string;
   category: string;
   question: string;
   correct_answer: string;
   incorrect_answers: string[];
}

export const setQuestions = (questions: Questions) => {
   return {
      type: SET_QUESTIONS,
      payload: questions,
   };
};
