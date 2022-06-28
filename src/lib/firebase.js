import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw7La_Jwlu4LbrPHYnlAqRWIyC47CwRk8",
  authDomain: "fir-dangkhacdat.firebaseapp.com",
  projectId: "fir-dangkhacdat",
  storageBucket: "fir-dangkhacdat.appspot.com",
  messagingSenderId: "910926735912",
  appId: "1:910926735912:web:0dc072853b097c8b4e231d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();

export const getFirebaseItems = async () => {
    try {
      const snapshot = await db.collection("todos").get();
      const items = snapshot.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id })
      );
      return items;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  export const addFirebaseItem = async (item) => {
    try {
      const todoRef = db.collection("todos");
      await todoRef.add(item);
    } catch (err) {
      console.log(err);
    }
  }

  export const updateFirebaseItem = async (item, id) => {
    try {
      const todoRef = db.collection("todos").doc(id);
      await todoRef.update(item);
    } catch (err) {
      console.log(err);
    }
  }

  export const clearFirebaseItem = async (item) => {
    const todoRef = db.collection("todos").doc(item.id);
    await todoRef.delete().then(function () {
    }).catch(function (err) {
      console.log(err);
    });
  };

export const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const storeUserInfo = async (user) => {
  const { uid } = user;
  const userDoc = await db.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("users").doc(uid).set({ name: user.displayName });
    return {
      name: user.displayName,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
};
export default firebase
