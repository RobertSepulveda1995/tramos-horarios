import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCrckXlbeWExVuDGgZ8TMJ-cC_V__NjIGg',
    authDomain: 'schedule-delivery-3385f.firebaseapp.com',
    projectId: 'schedule-delivery-3385f',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();