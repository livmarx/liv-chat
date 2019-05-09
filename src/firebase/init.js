import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDQL5gGnLQDdb5k7K5tboVDPO6f1o4Dz18',
  authDomain: 'liv-chat-app.firebaseapp.com',
  databaseURL: 'https://liv-chat-app.firebaseio.com',
  projectId: 'liv-chat-app',
  storageBucket: 'liv-chat-app.appspot.com',
  messagingSenderId: '454655179615',
  appId: '1:454655179615:web:5b11d138ea84bc92',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
