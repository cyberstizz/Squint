import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class Home extends React.Component{
  
  render(){

  
    return (
    <div >
     <div id="navBar">
        <div id='navLogo'></div>
        
        
        <div id='navItems'>
          
            <div id='homeNavSpace'>
               <div id='HomeIcon'></div> <div id='Home'></div> 
            </div>

            <div id='goalNavSpace'>
               <div id='GoalsIcon'></div><div id='Goals'></div> 
            </div>

            <div id='bookNavSpace'>
               <div id='BooklistIcon'></div><div id='Booklist'></div>
            </div>

            <div id='affirmationNavSpace'>
               <div id='affirmationIcon'></div><div id='affirmation'></div>
            </div>

        </div>
        <div id='bottomNavButton'><h1>help</h1></div>
     
     </div>
     <div id='dashbody'>
       <div id='topDashText'></div>
       <div id='yourFocus'></div>
       <div id='logistics'>
          <div id='calendarDiv'></div>
          <div id='graphDiv'></div>
       </div>


      <div id='bottomButtons'>
         <div id='goalListButton'></div>
         <div id='affirmationButton'></div>
         <div id='scheduleButton'></div>

    </div>
     </div>
     <div id='profileDiv'>

       
     </div>
    </div>
  );
    }
}
