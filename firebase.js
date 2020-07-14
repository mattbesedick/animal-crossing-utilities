import * as firebase from 'firebase-admin'

var firebaseConfig = {
    apiKey: "AIzaSyCdzvLhrMGhbIWSYsA6cApwvSt72IX3qyw",
    authDomain: "animal-crossing-utilities.firebaseapp.com",
    databaseURL: "https://animal-crossing-utilities.firebaseio.com",
    projectId: "animal-crossing-utilities",
    storageBucket: "animal-crossing-utilities.appspot.com",
    messagingSenderId: "353357348810",
    appId: "1:353357348810:web:0a16d5dc52da90344dd933",
    measurementId: "G-DNNMLXH23Y"
};

firebase.initializeApp(firebaseConfig)