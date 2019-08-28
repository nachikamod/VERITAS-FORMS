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
  firebase.database().ref().once("value").then(function(snapshot){
    if (snapshot.exists()) {
      window.alert("yes");
    }
    else{
      window.alert("no");
    }
  });
}
