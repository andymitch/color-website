function func(n){
  var x = document.getElementById("title");
  x.style.transition = 'all .3s'
  switch(n){
    case 1:
    x.style.color = "blue";
    console.log("blue");
    break;
    case 2:
    x.style.color = "green";
    console.log("green");
    break;
    case 3:
    x.style.color = "red";
    console.log("red");
    break;
  }
}
