import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    
    
  <div className="home-container"> {/* Home bileşenini bir kapsayıcı div içine al */}
    <h1>Welcome to the Home Page!</h1>
    <Link to="/order">Create Order</Link>
  </div>
    
    
  );  
};

export default Home;