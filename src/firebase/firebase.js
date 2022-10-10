import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
// Firebase Config Object

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;