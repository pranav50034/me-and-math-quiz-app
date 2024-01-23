import { SET_QUESTIONS } from "../actions/actionTypes";

const initialState = {
    questions: []
}

const questionReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case SET_QUESTIONS:
         return {
            ...state,
            questions: action.payload,
         };
      default:
         return state;
   }
};

export default questionReducer;
