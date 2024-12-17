import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeKR0yt0K1NTOa22GqRQBTv7GIjkGB2w0",
  authDomain: "jobportal-4a360.firebaseapp.com",
  projectId: "jobportal-4a360",
  storageBucket: "jobportal-4a360.firebasestorage.app",
  messagingSenderId: "524110933355",
  appId: "1:524110933355:web:32051e2f72e2d1fac2f02e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);