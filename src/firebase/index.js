import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCkkIJReLnx_uUVbrcWE9l17YD8_KKWd7o",
    authDomain: "delta-ac7be.firebaseapp.com",
    projectId: "delta-ac7be",
    storageBucket: "delta-ac7be.appspot.com",
    messagingSenderId: "432082722546",
    appId: "1:432082722546:web:4f890b343e8243867f7a6b"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)