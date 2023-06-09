// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

  // apiKey: "AIzaSyAUkK450S4lSvtKYNI98hnQZJRa4MUSwt8",
  // authDomain: "the-news-dragonii.firebaseapp.com",
  // projectId: "the-news-dragonii",
  // storageBucket: "the-news-dragonii.appspot.com",
  // messagingSenderId: "495183390798",
  // appId: "1:495183390798:web:6e76e490fbaed7576cbb1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;