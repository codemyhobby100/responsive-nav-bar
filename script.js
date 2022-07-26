const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('navbar-close')

      // To display the menu
if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

// To hide the menu
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}

// When we click on each navbar_link, the menu disappears
const navLink = document.querySelectorAll('.navbar_link')

function linkAction(){
    const main = document.getElementById('main')
    main.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))