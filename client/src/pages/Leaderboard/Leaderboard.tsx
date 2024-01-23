import axios from 'axios'
import React, { useEffect } from 'react';
import "./Leaderboard.css"

const Leaderboard = () => {

    const [leaderboardData, setLeaderboardData] = React.useState([])

    useEffect(() => {
       const fetchLeaderboard = async () => {
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
          const data = await fetchLeaderboard();
          const sortByKey = "score";
          const leaderboard = data.sort((a: any, b: any) => b[sortByKey] - a[sortByKey]);
          setLeaderboardData(leaderboard);
       };

       fetchDataAndSetLeaderboard();
    }, []);
    
    
  return (
    <div className='wrapper'>
        <h1>Leaderboard</h1>
        {
            leaderboardData && leaderboardData.map((data: any) => (
                <div className='leader' key={data.id}>
                    <p>{data.name}</p>
                    <p>{data.score}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Leaderboard