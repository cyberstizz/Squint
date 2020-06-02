import React from 'react';


import * as firebase from 'firebase/firebase-app'




const firebaseConfig = process.env.REACT_APP_Squint_API_KEY;

const Auth = firebase.initializeApp(firebaseConfig);



export default Auth;
