import React from "react";

const Header = () => {
  /*
  -this function required a logic so that
  -only if
  -the user is not at the fresh onload state of website 
  -and whenever clicks on the logo
  -he will redirected to the website fresh onload state;
  -else this function should not be invoked
   */
  // fresh onload state contains search result of 'Spiderman' & page no=1

  const handleClick = ( )=>{
  
  }
  return (
    <div className="header">
      <h1 onClick={handleClick}>MoviesLand</h1>
    </div>
  );
};

export default Header;
