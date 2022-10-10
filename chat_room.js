
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCcRPHn2EgEpJCXU2vWDadGn516erz81IE",
      authDomain: "chat-app-bd7c5.firebaseapp.com",
      databaseURL: "https://chat-app-bd7c5-default-rtdb.firebaseio.com",
      projectId: "chat-app-bd7c5",
      storageBucket: "chat-app-bd7c5.appspot.com",
      messagingSenderId: "425011596428",
      appId: "1:425011596428:web:db6ccf8004af676258bfa9"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"       
      });

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});

}

getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
      }