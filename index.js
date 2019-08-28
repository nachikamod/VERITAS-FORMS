firebase_api() {
  var firebaseConfig = {
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

  window.alert("script is working");
}

verify_existence() {
  window.alert("Yes it works!!");
}
