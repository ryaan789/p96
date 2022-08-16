var firebaseConfig = {
      apiKey: "AIzaSyCR52nVrbQUz_boX7laXXNC2oHQcSMjxpg",
      authDomain: "kwitter-672b2.firebaseapp.com",
      databaseURL: "https://kwitter-672b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-672b2",
      storageBucket: "kwitter-672b2.appspot.com",
      messagingSenderId: "87593479132",
      appId: "1:87593479132:web:d152e8ed907e3eb7f93d19"
    };
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){

      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}


function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}