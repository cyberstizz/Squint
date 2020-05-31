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
        <div id='Home'></div> <div id='Goals'></div> <div id='Booklist'></div>

        </div>
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
     <div id='profileDiv'></div>
    </div>
  );
    }
}
