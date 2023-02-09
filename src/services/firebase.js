import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ1rvPAl10k0zDBKqcdYx9V0ReAhp-uZE",
  authDomain: "feed-57ae7.firebaseapp.com",
  projectId: "feed-57ae7",
  storageBucket: "feed-57ae7.appspot.com",
  messagingSenderId: "988271371004",
  appId: "1:988271371004:web:fbea5cb7b6bdc448802d79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const authentication = getAuth(app)