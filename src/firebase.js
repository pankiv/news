/**
 * Created by Vasul on 25.09.2017.
 */


import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDjvPyr9ld2TnfP8B5lP8QYCCqJutedtUc',
    authDomain: 'react-test-30f79.firebaseapp.com',
    databaseURL: 'https://react-test-30f79.firebaseio.com',
    projectId: 'react-test-30f79',
    storageBucket: '',
    messagingSenderId: '532916494421'
};

export const firebaseApp = firebase.initializeApp(config);
