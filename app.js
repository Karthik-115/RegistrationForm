import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMa8R8qhekNVq01DCiHmcoeCf746x5NGY",
  authDomain: "registrationform-8cf31.firebaseapp.com",
  projectId: "registrationform-8cf31",
  storageBucket: "registrationform-8cf31.appspot.com",
  messagingSenderId: "332705692405",
  appId: "1:332705692405:web:e95544bb7ced0da39ea3bc",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "RegistrationForm");

const form = document.querySelector(".input-fields");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const gender = document.querySelector("#gender");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const dob = document.querySelector("#dob");
const course = document.querySelector("#course");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    firstname: firstname.value,
    lastname: lastname.value,
    gender: gender.value,
    email: email.value,
    password: password.value,
    dob: dob.value,
    course: course.value,
  })
    .then((result) => {
      form.reset();
      alert("Form data submitted!");
    })
    .catch((err) => {
      alert(err);
    });
});
