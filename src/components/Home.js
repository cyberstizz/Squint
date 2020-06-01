import React from 'react';
import '../App.css';
import Splash from './Splash';
import firebase from 'firebase';



export default class Home extends React.Component{
  
  render(){

  
    return (
       <React.Fragment>
          <Splash />
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
       <div id='yourFocus'> Your next goal : <span id='focusGoal'> this is where your next goal will get displayed.<br/>start by clicking the goals tab to your left</span></div>
       <div id='logistics'>
          <div id='calendarDiv'></div>
          <div id='graphDiv'></div>
       </div>


      <div id='bottomButtons'>
         <div id='goalListButton'><span id='affirmationWord'>Goals    &#10148;</span></div>
         <div id='affirmationButton'><span id='affirmationWord'>Affirmation    &#10148;</span></div>
         <div id='scheduleButton'><span id='affirmationWord'>Books    &#10148;</span></div>

    </div>
     </div>
     <div id='profileDiv'>
        <div id='logOUtDiv'>
          <div id='logoutDash'></div><div id='logOutDashIcon'></div>
        </div>
        <div id='profilePic'></div>

     </div>
    </div>
    </React.Fragment>
  );
    }
}
