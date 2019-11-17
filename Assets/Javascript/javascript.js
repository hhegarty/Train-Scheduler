$(document).ready(function(){

    // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyB3D7JmsKxfrdYnTqBV5iJ7Ciz3_7fDhKA",
        authDomain: "train-scheduler-44e3a.firebaseapp.com",
        databaseURL: "https://train-scheduler-44e3a.firebaseio.com",
        projectId: "train-scheduler-44e3a",
        storageBucket: "train-scheduler-44e3a.appspot.com",
        messagingSenderId: "513056043743",
        appId: "1:513056043743:web:489ddeeb41f39f73d76f6a",
        measurementId: "G-PEMT9Z5X9H"
      };
      firebase.initializeApp(firebaseConfig);

    //Declaring a variable to store the database info
    var database = firebase.database();

    //Initializing the variables .
    var trainName = "";
    var trainDestination = "";
    var trainFrequency = 0;
    var trainTime = "";
    var clickCounter = 1;
