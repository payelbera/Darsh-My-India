import  firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
apiKey: "AIzaSyCHphw7Q0JzJx2ZktXnMeb7bqcpOvhFHvU",
  authDomain: "my-india-c890b.firebaseapp.com",
  databaseURL: "https://my-india-c890b-default-rtdb.firebaseio.com",
  projectId: "my-india-c890b",
  storageBucket: "my-india-c890b.appspot.com",
  messagingSenderId: "676717722376",
  appId: "1:676717722376:web:18ecbf8eac3ae077cc0abd"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
