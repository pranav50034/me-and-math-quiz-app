import axios from "axios";
import { useEffect, useState } from "react";

const AllQuizes = () => {

    const [quizesData, setquizesData] = useState([])

    useEffect(() => {
       const fetchQuizesData = async () => {
          try {
             const response = await axios.get(
                `${
                   import.meta.env.VITE_REACT_APP_BACKEND_API_URL
                }/score/leaderboard`
             );
             return response.data;
          } catch (error) {
             console.error("Error fetching leaderboard data:", error);
             return [];
          }
       };
       const fetchDataAndSetLeaderboard = async () => {
          const data = await fetchQuizesData();
          setquizesData(data);
       };

       fetchDataAndSetLeaderboard();
    }, []);

  return (

    <div className="wrapper">
        <h1>All Quizes</h1>
        {
            quizesData && quizesData.map((data: any) => (
                <div className="leader" key={data.id}>
                    <p>{data.name}</p>
                    <p>{data.score}</p>
                </div>
            ))
        }
    </div>
  )
}

export default AllQuizes