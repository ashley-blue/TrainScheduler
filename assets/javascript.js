var firebaseConfig = {
    apiKey: "AIzaSyCPfcR5EFD0XYWxvjx5QzemBtkitGKUXcw",
    authDomain: "trainscheduler-c58d5.firebaseapp.com",
    databaseURL: "https://trainscheduler-c58d5.firebaseio.com",
    projectId: "trainscheduler-c58d5",
    storageBucket: "",
    messagingSenderId: "407190504481",
    appId: "1:407190504481:web:3ab5aa6ab7dda793"
  };

firebase.initializeApp(firebaseConfig);

let database = firebase.database();

$("#addTrainButton").on("click", function(event) {
    event.preventDefault();

    let trainName = $("#trainName").val().trim();
    let destinationName = $("#destinationName").val().trim();
    let firstTrainTime = $("#firstTrainTime").val().trim();
    let frequencyTime = $("#frequencyTime").val().trim();

  let newTrain = {
    name: trainName,
    destination: destinationName ,
    time: firstTrainTime,
    frequency: frequencyTime 
  };