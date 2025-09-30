import React from "react";
import { Link } from "react-router-dom";
import '../index.css'; // 👈 important


const Home: React.FC = () => {
  return (
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6">Welcome!</h1>
   
        <Link
          to="/notes"
          className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition"
        >
          Create Notes
        </Link>
      </div>
  );
};

export default Home;
