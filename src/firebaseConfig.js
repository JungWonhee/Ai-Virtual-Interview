// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDsaF57Ud3-GrnRXIknvOa8vZRrppXresQ',
  authDomain: 'ai-interview-app-84c41.firebaseapp.com',
  projectId: 'ai-interview-app-84c41',
  storageBucket: 'ai-interview-app-84c41.appspot.com',
  messagingSenderId: '253726950034',
  appId: '1:253726950034:web:812b9b1cc447b2ef02dc4b',
  measurementId: 'G-6ME967F5JC'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);