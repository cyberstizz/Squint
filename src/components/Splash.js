import React, { useState } from 'react';
import '../App.css';
import Modal from 'react-modal';
import firebase from 'firebase/app';


export default function Splash(){


const firebaseConfig = process.env.REACT_APP_Squint_API_KEY;

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}







Modal.setAppElement('#root');

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [otherModalIsOpen, setotherModalIsOpen] = useState(false)


    

    const signIn = (event, user, email, password, profile) => {
        event.preventDefault();



        const splash = document.getElementById('entireSplash');

        splash.style.display = 'none';
        setModalIsOpen(false);
    }

    const signInTwo = (event, usertwo, emailTwo, passwordTwo, profileTwo) => {
      event.preventDefault();


      const signupForm = document.getElementById('theSignUpformTwo')

     usertwo = signupForm['userNameTwo'].value;
      emailTwo = signupForm['emailTwo'].value;
      passwordTwo = signupForm['passwordTwo'].value;
      profileTwo = signupForm['userNameTwo'].value;

     
     
     
     
     
      const splash = document.getElementById('entireSplash');

      
      
      alert(usertwo)
      alert(emailTwo)
      alert(passwordTwo)
      alert(profileTwo)

      splash.style.display = 'none';
      setotherModalIsOpen(false);
    }
    
    return (
      <div id='entireSplash'>
    <div id='splashPic'>
    </div>
  <div id='splashElements'>
<div id='splashLogo'></div>
<div id='textField'>All the tools you need <br/>to help you stay on track</div>
<div id='lineDiv'></div>
<div id='buttons'>
  <button id='signIn' onClick={ () => setModalIsOpen(true) }>Sign in</button>
  <button id='signUp' onClick={ () => setotherModalIsOpen(true) }>Sign up</button>
</div>
  </div>
 
 
  <Modal isOpen={modalIsOpen} onRequestClose={ () => setModalIsOpen(false) }
  
  style={
    {
    overlay: {
      backgroundColor: '#0D4354',
      height: '100vh',
      zIndex: '6',
      position: 'fixed'
    },
    content: {
      color: 'blue',
      backgroundColor: '#9DF8FA',
      width: '60vw',
      margin: '0 auto',
      zIndex: '6',
      position: 'fixed'
    }
  }
  }
  >
    <div id='modalTopButtons'>
      <button id='modalSignup'>Signup</button>
      <button id='modalLogin'>Log in</button>
    </div>
    <div id='modalText'>
      <h2>Make life simple</h2>
      <div id='modalLineDiv'></div>
    </div>
    <form onSubmit={signIn}>
    <input type='text' id='userName' placeholder='Username&#x2217;'></input>
    <input type ='text' id='email' placeholder='email&#x2217;'></input>
    <input type='text' id='password' placeholder='Password&#x2217;'></input>
    <input type='file' id='uploadFile'></input>
    <input type='submit' id='modalSubmit'></input>
    </form>

  </Modal>



  <Modal isOpen={otherModalIsOpen} onRequestClose={ () => setModalIsOpen(false) }
  
  style={
    {
    overlay: {
      backgroundColor: '#9DF8FA',
      height: '100vh',
      zIndex: '6',
      position: 'fixed'
    },
    content: {
      color: 'blue',
      backgroundColor: '#0D4354',
      width: '60vw',
      margin: '0 auto',
      zIndex: '6',
      position: 'fixed'
    }
  }
  }
  >
    <div id='modalTopButtons'>
      <button id='modalSignup'>Signup</button>
      <button id='modalLogin'>Log in</button>
    </div>
    <div id='modalText'>
      <h2>Start your journey</h2>
      <div id='signOutmodalLineDiv'></div>
    </div>
    <form id='theSignUpformTwo' onSubmit={signInTwo}>
    <input type='text' id='userNameTwo' placeholder='Username&#x2217;'></input>
    <input type ='text' id='emailTwo' placeholder='email&#x2217;'></input>
    <input type='text' id='passwordTwo' placeholder='Password&#x2217;'></input>
    <input type='file' id='uploadFileTwo'></input>
    <input type='submit' id='modalSubmitTwo' value='Get started'></input>
    </form>

  </Modal>



  </div>
  );
}