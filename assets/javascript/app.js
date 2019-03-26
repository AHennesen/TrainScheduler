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
//  console log to check current time working
  console.log(currentTime);
  
//   checks for keypresses in the form-field class and then assigns the data to the right variables based on the ids.
  $(".form-field").on("keyup", function() {
    var traintemp = $("#train-name").val().trim();
    var citytemp = $("#destination").val().trim();
    var timetemp = $("#first-train").val().trim();
    var freqtemp = $("#frequency").val().trim();
    // stores the items entered into a local storage so that way they can be recalled later.
    // Used sesions storage over localstorage because it is easier to check things when you can reset.
  sessionStorage.setItem("train", traintemp);
  sessionStorage.setItem("city", citytemp);
  sessionStorage.setItem("time", timetemp);
  sessionStorage.setItem("freq", freqtemp);
});

//   calling the current time function so that it runs
  currentTime();