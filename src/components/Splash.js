import React, { useState } from 'react';
import '../App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Splash(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [otherModalIsOpen, setotherModalIsOpen] = useState(false)

    
    
    return (
      <React.Fragment>
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
      height: '100vh'
    },
    content: {
      color: 'blue',
      backgroundColor: '#9DF8FA',
      width: '60vw',
      margin: '0 auto'
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
    <form>
    <input type='text' id='userName' placeholder='Username&#x2217;'></input>
    <input type ='text' id='email' placeholder='email&#x2217;'></input>
    <input type='text' id='password' placeholder='Password&#x2217;'></input>
    <input type='submit' id='modalSubmit'></input>
    </form>

  </Modal>



  <Modal isOpen={otherModalIsOpen} onRequestClose={ () => setModalIsOpen(false) }
  
  style={
    {
    overlay: {
      backgroundColor: '#9DF8FA',
      height: '100vh'
    },
    content: {
      color: 'blue',
      backgroundColor: '#0D4354',
      width: '60vw',
      margin: '0 auto'
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
    <form>
    <input type='text' id='userName' placeholder='Username&#x2217;'></input>
    <input type ='text' id='email' placeholder='email&#x2217;'></input>
    <input type='text' id='password' placeholder='Password&#x2217;'></input>
    <input type='submit' id='modalSubmit' value='Get started'></input>
    </form>

  </Modal>



  </React.Fragment>
  );
    }

