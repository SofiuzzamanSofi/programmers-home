// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHCA6pxQLEyr_rZIp07A8Orr_bmdStE7E",
    authDomain: "programmers-home.firebaseapp.com",
    projectId: "programmers-home",
    storageBucket: "programmers-home.appspot.com",
    messagingSenderId: "513688462429",
    appId: "1:513688462429:web:c89abed355867275ed19b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;