import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { TOKEN } from "@/constants";

const firebaseConfig = {
  apiKey: "AIzaSyA_Q29d3Bn-CvINr8Fwf9qV3qg5JG6yn_0",
  authDomain: "login-18762.firebaseapp.com",
  projectId: "login-18762",
  storageBucket: "login-18762.appspot.com",
  messagingSenderId: "1087038899813",
  appId: "1:1087038899813:web:1f1e0329601eac31ada88c",
  measurementId: "G-E823DWT4YL"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//   } else {
//   }
// });

export async function register(user) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        localStorage.setItem(TOKEN, userCredential.user.accessToken);
    } catch (error) {
        alert(error.message);
    }
}

export async function login(user) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
        localStorage.setItem(TOKEN, userCredential.user.accessToken);
    } catch (error) {
        alert(error.message);
    }
}