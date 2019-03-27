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

var database = firebase.database();


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
$(".form-field").on("keyup", function () {
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
// pulls train name, destination, first and freq from the sessions storage
$("#train-name").val(sessionStorage.getItem("train"));
$("#destination").val(sessionStorage.getItem("city"));
$("#first-train").val(sessionStorage.getItem("time"));
$("#frequency").val(sessionStorage.getItem("freq"));
// starts a fucntion when you click on the submit button and prevents the page from reloading
$("#submit").on("click", function (event) {
    event.preventDefault();

    // set up and if loop to make sure people fill in the necisarry information without leaving anything blank
    if ($("#train-name").val().trim() === "" ||
        $("#destination").val().trim() === "" ||
        $("#first-train").val().trim() == "" ||
        $("#frequency").val().trim() === "")
        {
        alert("Fill in the necisary information on the right");
        } else {
    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    startTime = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();

    $(".form-field").val("");

    database.ref().push({
        trainName: trainName,
        destination: destination,
        startTime: startTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    sessionStorage.clear();
}
});

database.ref().on("child_added", function(snapshot) {
    // storing snapshot.val() in a variable for convience
    var sv = snapshot.val();
    // console log the snapshots to pull for html
    console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.startTime);
    console.log(sv.frequency);
    //pull the console logs so html refelcts, not sure how to make it reflect in a table
    $("#train-table-rows").text(sv.trainName);
    $("#train-table-rows").text(sv.destination);
    $("#train-table-rows").text(sv.startTime);
    $("#train-table-rows").text(sv.frequency);
    // line of code for handling errors
},function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

//   calling the current time function so that it runs
currentTime();