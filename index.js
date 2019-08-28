


function firebase_api() {
  const firebaseConfig = {
    apiKey: "AIzaSyARAx-SCwt5RhK7NlcXTcoMewKOHAXeiw8",
    authDomain: "tesa-a9fed.firebaseapp.com",
    databaseURL: "https://tesa-a9fed.firebaseio.com",
    projectId: "tesa-a9fed",
    storageBucket: "tesa-a9fed.appspot.com",
    messagingSenderId: "83131530119",
    appId: "1:83131530119:web:32f14c08f12f0dfc"
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

function uploadFile() {
  var fileUpload = document.getElementById("file");

  fileUpload.addEventListener('change', function(e) {
    var file = e.target.files[0];

    var storageRef = firebase.storage().ref('folder_name/' + file.name);

    storageRef.put(file);
  });
}
