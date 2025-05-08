document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
  const colorBtn = document.getElementById("change-color");
  const captionBackgrounds = document.getElementsByClassName("caption-background");

  if (colorBtn) {
    colorBtn.addEventListener("click", function() {
      for (let i = 0; i < captionBackgrounds.length; i++) {
        captionBackgrounds[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }
    } )
  }
  

  const openBtn = document.getElementById("openbtn");
  const closeBtn = document.getElementById("closebtn");
  const sideNav = document.getElementById("mySidenav");
  const main = document.getElementById("main");
  
  openBtn.addEventListener("click", openNav);

  closeBtn.addEventListener("click", closeNav);
  main.addEventListener("click", closeNav);

  function openNav() {
    sideNav.style.width = "240px";
    main.style.filter = "blur(8px)";
  }

  function closeNav() {
    sideNav.style.width = "0";
    main.style.filter = "none";
  }
  

});



