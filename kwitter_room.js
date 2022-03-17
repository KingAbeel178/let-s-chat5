

var firebaseConfig = {
      apiKey: "AIzaSyCkkObR_xvP5Oi_i4fo_PFPr8uDezuEzqA",
      authDomain: "kwitter-c78b6.firebaseapp.com",
      databaseURL: "https://kwitter-c78b6-default-rtdb.firebaseio.com",
      projectId: "kwitter-c78b6",
      storageBucket: "kwitter-c78b6.appspot.com",
      messagingSenderId: "326790838185",
      appId: "1:326790838185:web:79fd7ed133ea48783b36b8"
    };
    
    
     firebase.initializeApp(firebaseConfig);

 
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}


