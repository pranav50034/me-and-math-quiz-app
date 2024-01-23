import "./Home.css";
import { useSelector } from "react-redux";
import Form from "../../components/Form";

const Home = () => {
   interface State {
      user: {
         currentUser: {
         name: string;
      };
      score: number;
      },
      questions: string[]
   }

   const { currentUser, score } = useSelector((state: State) => (state.user));

   return (
      <div className="wrapper">
         <h1>Welcome to Quizzaro</h1>
         {!currentUser.name.length && <Form />}
      </div>
   );
};

export default Home;
