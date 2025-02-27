import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    
    
    <div className="background-container">
    
      <img className="img-logo" src="../images/iteration-1-images/logo.svg" alt="" />
      
      <h4 >Fırsatı Kaçırma</h4>
      <h1>KOD ACIKTIRIR</h1>  
      <h1>PIZZA, DOYURUR</h1>   
      <button className='button'>
      <Link to="/order">Acıktım</Link>
      </button>
    
      
    </div>
    
    
    
  );  
};

export default Home;