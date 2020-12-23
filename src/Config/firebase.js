import * as firebase from 'firebase';

import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyAscEbb0bhIsjLQV6Xgps3Tvj0qeKRksjo",
  authDomain: "reactibr-3037d.firebaseapp.com",
  databaseURL: "https://reactibr-3037d.firebaseio.com",
  projectId: "reactibr-3037d",
  storageBucket: "reactibr-3037d.appspot.com",
  messagingSenderId: "753399354640",
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
})
firebase.db = db;
firebase.auth=firebase.auth()
const storage = firebase.storage();
export { storage, firebase as default };
