function menuval(target){
      window.location = target;
  
  
}

function regval(target){
  let temp = confirm('Your changes will not be saved, Are you sure you want to leave?');
  if (temp){
      window.location = target;
  }else {
      return false;
  }
}

window.onscroll = function() {
  
  scrollFunction()
};

function scrollFunction(){
  var nav = document.querySelector(".nav");
  var univ = document.querySelector(".university");
  var buttons = document.querySelector(".buttonmenu");
  
  if (window.pageYOffset > 50) {
    nav.classList.add("nav-active");
    univ.classList.add("university-active");
    buttons.classList.add("buttonmenu-active")
  } else {
    nav.classList.remove("nav-active");
    univ.classList.remove("university-active");
    buttons.classList.remove("buttonmenu-active");
  }

  // if (window.pageYOffset > 50){
  //   nav.classList.add("university-active");
  // } else {
  //   nav.classList.remove("university-active");
  // }
}
