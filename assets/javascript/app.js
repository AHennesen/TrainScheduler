// app.js
 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDRvuzLDwzgqt_JNha1GV1n3vGJr38TUeU",
    authDomain: "trainschedule-c47be.firebaseapp.com",
    databaseURL: "https://trainschedule-c47be.firebaseio.com",
    projectId: "trainschedule-c47be",
    storageBucket: "trainschedule-c47be.appspot.com",
    messagingSenderId: "443345583166"
  };
  firebase.initializeApp(config);

//   set up variables

var trainName = "";
var destination = "";
var startTime = "";
var frequency = "";

function currentTime() {
    var current = moment().format('LT');
    $("#currentTime").html(current);
    setTimeout(currentTime, 1000);
  };
  console.log(currentTime);

  currentTime();