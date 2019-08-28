


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
}

function verify_existence() {
  var entered_uid = document.getElementById("uid_code").value;
//  window.alert("Error : " + entered_uid);

  //firebase.database().ref().child("Company References").set("");
  firebase.database().ref().child(entered_uid).once("value").then(function(snapshot){
    if (snapshot.exists()) {
      window.location.replace("registration_q43gr34b3248b3184bt0rb24.html");
    }
    else{
      window.alert("MayDay MayDay this is not a free ride!!");
    }
  });
}
