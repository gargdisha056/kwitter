firebaseConfig = {
    apiKey: "AIzaSyCEmokqvyhP-iam9KMQI6GgTcN0gTlt4x0",
    authDomain: "kwitter-2ba16.firebaseapp.com",
    databaseURL: "https://kwitter-2ba16-default-rtdb.firebaseio.com",
    projectId: "kwitter-2ba16",
    storageBucket: "kwitter-2ba16.appspot.com",
    messagingSenderId: "990230076230",
    appId: "1:990230076230:web:ac4bfc06065cfd73422347"
  };

  firebase.initializeApp(firebaseConfig);

function adduser()
{
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({purpose:"adding_user"});
}

