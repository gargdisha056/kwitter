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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
      //Start code
      console.log("room name- " + Room_names);
      row=
     "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div><hr>";

document.getElementById("output").innerHTML+=row;
      //End code
      });});
      }

getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}