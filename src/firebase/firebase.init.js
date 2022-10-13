
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCz5YZCS1m8ryiPwU4Lu_SCoNjIlFUjNgI",
    authDomain: "simple-firebase-auth-e28c4.firebaseapp.com",
    projectId: "simple-firebase-auth-e28c4",
    storageBucket: "simple-firebase-auth-e28c4.appspot.com",
    messagingSenderId: "696085543711",
    appId: "1:696085543711:web:c699ced7175c88c7bf8e2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app