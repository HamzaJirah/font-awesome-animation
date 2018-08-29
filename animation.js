function animateIcon(){
  let fist = document.querySelector("#fist")
  fist.innerHTML = "&#xf17a;";
  //set time out
  setTimeout(function(){
    fist.innerHTML = "&#xf411;";
  }, 1000);

  setTimeout(function(){
    fist.innerHTML = "&#xf13b;";
  }, 3000);
}
//run function
animateIcon();
setInterval(animateIcon, 5000);