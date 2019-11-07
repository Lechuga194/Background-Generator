var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var actual = document.getElementsByTagName("h3")[0];
var body = document.getElementsByTagName("body")[0];
var boton = document.querySelector("button");

function cambiaFondo(){
  body.style.background = "linear-gradient(to right, "
   + color1.value + ", " + color2.value + ")";
   actual.textContent = body.style.background;
}

function cambiaFondo2(color1, color2){
  body.style.background = "linear-gradient(to right, "
   + color1 + ", " + color2 + ")";
   actual.textContent = body.style.background;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


boton.addEventListener("click",function(){
  var c1 = getRandomColor();
  var c2 = getRandomColor();
  cambiaFondo2(c1,c2);
})

color1.addEventListener("input",cambiaFondo);
color2.addEventListener("input",cambiaFondo);
