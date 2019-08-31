

function firebase_api() {
  const firebaseConfig = {
    apiKey: "AIzaSyCrU_y9UAhbnHZHcqQmf6UXnfhvLqobIKM",
    authDomain: "tesa-e41fa.firebaseapp.com",
    databaseURL: "https://tesa-e41fa.firebaseio.com",
    projectId: "tesa-e41fa",
    storageBucket: "tesa-e41fa.appspot.com",
    messagingSenderId: "344256809964",
    appId: "1:344256809964:web:415a0136546054d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    var uidURLCheck = localStorage.getItem("uid");

  let qrcode = new QRCode("output", {
      width: 177,
      height: 177,
      colorDark : "#990000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
  });

  qrcode.clear();
  qrcode.makeCode(uidURLCheck);


  firebase.database().ref().child("participant").child(uidURLCheck).child("imageURL").on('value', function(snapshot) {

    document.getElementById("setImage").src = snapshot.val();
  });
  firebase.database().ref().child("participant").child(uidURLCheck).child("name").on('value', function(snapshot) {

    document.getElementById("name_field").innerHTML = snapshot.val();
    document.getElementById("unique").innerHTML = localStorage.getItem("uid");
  });
}

function verify_existence() {
  var entered_uid = document.getElementById("uid_code").value;
  localStorage.setItem("uid",entered_uid);
//  window.alert("Error : " + entered_uid);

  //firebase.database().ref().child("Company References").set("");
  firebase.database().ref().child("participant").child(entered_uid).once("value").then(function(snapshot){
    if (snapshot.exists()) {
      window.location.replace("registration_q43gr34b3248b3184bt0rb24.html");
    }
    else{
      window.alert("MayDay MayDay this is not a free ride!!");
    }
  });
}

function submitData(){
  var gotUid = localStorage.getItem("uid");
  var gotEvent = localStorage.getItem("event");
  var gotName = document.getElementById("name-participant").value;
  var gotMobile = document.getElementById("contact-participant").value;
  var gotYear = document.getElementById("year-participant").value;
  var gotDivision = document.getElementById("division-participant").value;
  var gotRollNo = document.getElementById("roll-no-participant").value;
  var gotEmail = document.getElementById("email-participant").value;


  if (gotName.length > "5" && gotMobile.length > "8" && gotYear.length > "1" && gotDivision.length > "0" && gotRollNo > "0") {
    var database = firebase.database().ref().child("participant").child(gotUid);

    database.child("name").set(gotName);
    database.child("contact").set(gotMobile);
    database.child("year").set(gotYear);
    database.child("division").set(gotDivision);
    database.child("roll_no").set(gotRollNo);
    database.child("email").set(gotEmail);
    database.child("event").set(gotEvent);

    database.on('child_added', function(data){
      window.location.replace("idCard.html");
    });

  }
  else {
    alert("Please fill all the details");
  }

}

function selectTech(){
  localStorage.setItem("event", "Technical");
}

function selectSports(){
  localStorage.setItem("event", "Sports");
}

function selectCultural(){
  localStorage.setItem("event", "Cultural");
}
