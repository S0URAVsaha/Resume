/*
Includes all the rotation things
*/
var pointerArray= ["register_r","home_r","login_r","about_r"];
   var content_array=["register_div", "home_div", "login_div", "about_div"];
  document.getElementById("register_div").style.display="block";
   

  function rotateFunction(Object){

    var calculate_count=pointerArray.indexOf(Object)*90;

   document.getElementById("circle").style.transform="rotate("+calculate_count+"deg)";
   for (var i = 0; i<pointerArray.length; i++) {
     document.getElementById(pointerArray[i]).style.transform="rotate(-"+calculate_count+"deg)";
     document.getElementById(content_array[i]).style.display="none";
   }
   document.getElementById(content_array[calculate_count/90]).style.display="block";
    
  }