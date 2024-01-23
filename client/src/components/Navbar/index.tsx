import "./style.css";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="left">
            <h1 className="logo"><a href="/">Q</a></h1>
            <p className="logo-text"><a href="/">Quizzaro</a></p>
         </div>
         <ul className="right">
            <li>
               <a href="/leaderboard">Leaderboard</a>
            </li>
            <li>
               <a href="/all-quizes">All Quizes</a>
            </li>
            {/* <li></li> */}
         </ul>
      </nav>
   );
};

export default Navbar;
