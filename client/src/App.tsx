import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quizes from './pages/Quiz/Quizes';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Result from './pages/Results/Results';
import { useSelector } from 'react-redux';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import AllQuizes from './pages/All Quizes/All Quizes';

const App = () => {

  interface State {
     user: {
        currentUser: {
           name: string;
        };
        score: number;
     };
     questions: string[];
  }

  const { currentUser, score } = useSelector((state: State) => state.user);

  return (
     <BrowserRouter>
     <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizes' element={<Quizes />} />
          <Route path='/results' element={<Result name={currentUser.name} score={score}/>} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/all-quizes' element={<AllQuizes />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App