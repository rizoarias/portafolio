/* modo oscuro con boton */ 
let button = document.querySelector('.btn')
button.addEventListener('click', ()=>{
    document.documentElement.classList.toggle("dark-mode");
  })
/* modo oscuro al presionar enter */
  window.onload = function () {
    document.onkeypress = function (e) {
      console.log(e);
      e = e || window.event;
      if (e.keyCode === 13) {
        document.documentElement.classList.toggle("dark-mode");
              }
    };
  };