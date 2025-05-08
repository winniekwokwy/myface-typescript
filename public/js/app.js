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

  function openNav() {
    sideNav.style.width = "240px";
    main.style.filter = "blur(8px)";
    main.addEventListener("click", closeNav);
  }

  function closeNav() {
    sideNav.style.width = "0";
    main.style.filter = "none";
    main.removeEventListener("click", closeNav);
  }

  /*
  const form = document.getElementById('like');

  form.addEventListener('submit', async event => {
    event.preventDefault();
  
    const formData = new FormData(form);
  
    // 👇️ pass form data to URLSearchParams() constructor
   // const searchParams = new URLSearchParams(formData);
  
    // 👇️ username=ab&password=cd
    console.log(formData);
  
    try {
      const res = await fetch(
        'http://localhost:3001/posts/130/like/',
        {
          method: 'POST',
          body: 'test',
        },
      );
  
      const resData = await res.json();
  
      console.log(resData);
    } catch (err) {
      console.log(err.message);
    }
  });
  */
});



