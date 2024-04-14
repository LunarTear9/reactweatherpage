import React from 'react';

import './App.css';
import Logo from './assets/flutterico.png'



        

const handleIconClick = () => {
  window.location.href = "https://www.pitmtech.com/diafaneies/Getting%20Started%202994f5ac540946b6abc5a2259b645280.html";
};
const handleIconClick2 = () => {
  window.location.href = "https://www.pitmtech.com/diafaneies/Project%20startup%2062d55a78d55841bc92edcdcd2e66b62b.html";
};
const handleIconClick3 = () => {
  window.location.href = "https://www.pitmtech.com/diafaneies/Basics%20654d91d79f654f2d889bdbfa4b9af1f6.html";
};
const Courses = () => {
  return (
    <div>
       {/* Render NavBar component */}
       <div className='gradient-background2'>
       
<div className='button-container2'> 
<img src={Logo} alt="Icon" className="icon" style={{ width: '210px', height: '210px', cursor: 'pointer' ,alignItems:'center',justifyItems:'center'}} />
  <button class="button" onClick={handleIconClick}>Getting Started </button>
  <button class="button" onClick={handleIconClick2}>Project Startup </button>
  <button class="button" onClick={handleIconClick3}>Basics </button>
 
  

</div>
</div>
       
      {/* GUI for App B */}
      {/* Add your GUI components here */}
      
      {/* Link to navigate back to App.js */}
      <div className="button-container">
        
           
      </div>
      
      </div>
   
  );
}

export default Courses;
