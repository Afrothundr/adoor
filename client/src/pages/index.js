import React from "react";
import HomePage  from '../components/HomePage/homePage';
import './gridStyles.css';

const Home = props => {
  return (
    <div className="home-page transition-item page">
        <HomePage />
    </div>
  );
}

export default Home;