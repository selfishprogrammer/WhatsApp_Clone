import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCdHiK72xKDBNbABzdEj6H1RVgGe1CiT9E",
    authDomain: "whatsapp-clone-bc765.firebaseapp.com",
    projectId: "whatsapp-clone-bc765",
    storageBucket: "whatsapp-clone-bc765.appspot.com",
    messagingSenderId: "394049389528",
    appId: "1:394049389528:web:58917d7c36b3ed5ff728ad",
};

const whatsappClone = firebase.initializeApp(firebaseConfig);

const db = whatsappClone.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;