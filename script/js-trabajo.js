
/* añade una clase nueva (con su estilo asociado) correspondiente a la clase que ya tiene la lista o conmuta a la situación inicial (toggle)*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
