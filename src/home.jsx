import React from 'react';

const Home = () => {

  return (
    
    
    <div className="home-container"> {/* Home bileşenini bir kapsayıcı div içine al */}
    <h1>Welcome to the Home Page!</h1>
    <Link to="/order">Create Order</Link>
    {/* Burada Home sayfanızın diğer içeriğini ekleyebilirsiniz */}
  </div>
    
    
  );  
};

export default Home;