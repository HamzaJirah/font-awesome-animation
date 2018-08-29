function animateIcon(){
  let fist = document.querySelector("#fist")
  fist.innerHTML = "&#xf17a;";
  //add another icon
  setTimeout(function(){
    fist.innerHTML = "&#xf257;";
  }, 1000);
}
//run function
animateIcon();