import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyCvpSRN0Vg10GUcSFJ-DdvZRZCOquE1V7A",
    authDomain: "crwn-db-9d7d6.firebaseapp.com",
    databaseURL: "https://crwn-db-9d7d6.firebaseio.com",
    projectId: "crwn-db-9d7d6",
    storageBucket: "crwn-db-9d7d6.appspot.com",
    messagingSenderId: "276437341206",
    appId: "1:276437341206:web:2b3490f85c6ddbe5c8d137",
    measurementId: "G-EYW2J1QV96"
  };

  export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth)return

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    
    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log("error creating user",error.message);

      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;