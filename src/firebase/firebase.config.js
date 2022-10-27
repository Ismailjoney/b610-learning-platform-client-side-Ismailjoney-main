// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// apiKey: "AIzaSyAh8SuOQNEsvofzyILvlRyibBb2zC96Ec8",
// authDomain:  "edu-website-d9487.firebaseapp.com",
// projectId: "edu-website-d9487",
// storageBucket: "edu-website-d9487.appspot.com",
// messagingSenderId: "794740022122",
// appId: "1:794740022122:web:d443b7bed5010148ad2313"