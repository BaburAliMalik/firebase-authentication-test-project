import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { auth } from "./config.js";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const forgot = document.querySelector("#forgot-btn");
const googleBtn = document.querySelector("#google-signin");
const githubBtn = document.querySelector("#github-signin");

form.addEventListener('submit', (event) =>{
    event.preventDefault();
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location = 'home.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})

forgot.addEventListener('click', ()=>{
  const resetEmail = prompt("enter your email")
  sendPasswordResetEmail(auth, resetEmail)
  .then(() => {
  alert("email send")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });


})


// authentication with google
const provider = new GoogleAuthProvider();

googleBtn.addEventListener('click', ()=>{
  console.log("login with google");

  signInWithPopup(auth, provider)
  .then((result) => { 
    const user = result.user;
  console.log(user);
  window.location = 'home.html'

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log(errorMessage);
  });

})


// authentication with github
const githubProvider = new GithubAuthProvider();

githubBtn.addEventListener('click', ()=>{
  signInWithPopup(auth, githubProvider)
  .then((result) => {
   
    const user = result.user;
    console.log(user);
    window.location = 'home.html'
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
   
  });


})

