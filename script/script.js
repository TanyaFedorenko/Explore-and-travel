let menuBurger= document.getElementById('menuBurger');
let navMenu =document.getElementById('nav-menu');


    menuBurger.addEventListener('click', function(){
    console.log(navMenu)
    navMenu.classList.toggle('unblock');
});

