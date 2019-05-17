function toggleSound(){
  if(document.getElementById("switch").checked){
    console.log("sound on");
  }else{
    document.getElementById("blue").pause();
    document.getElementById("green").pause();
    document.getElementById("red").pause();
    console.log("sound off");
  }
}

function func(n){
  var x = document.getElementById("title");
  x.style.transition = 'all .3s';
  switch(n){
    case 1:
    x.style.color = "blue";
    console.log("blue");
    if(document.getElementById("switch").checked){
      document.getElementById("green").pause();
      document.getElementById("red").pause();
      document.getElementById("blue").currentTime = 0;
      document.getElementById("blue").play();
    }
    break;
    case 2:
    x.style.color = "green";
    console.log("green");
    if(document.getElementById("switch").checked){
      document.getElementById("blue").pause();
      document.getElementById("red").pause();
      document.getElementById("green").currentTime = 0;
      document.getElementById("green").play();
    }
    break;
    case 3:
    x.style.color = "red";
    console.log("red");
    if(document.getElementById("switch").checked){
      document.getElementById("blue").pause();
      document.getElementById("green").pause();
      document.getElementById("red").currentTime = 0;
      document.getElementById("red").play();
    }
    break;
  }
}
