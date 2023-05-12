const navbar = document.querySelector('.navbar');
const homeIcon = document.querySelector('.fa-house');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('navbar-scrolled');
    } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

const orderInputs = document.querySelectorAll('.order');

orderInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.outline = 'none';
  });
});

const loginInputs = document.querySelectorAll('.login-input');

loginInputs.forEach(inputs => {
  inputs.addEventListener('focus', () => {
    inputs.style.outline = 'none';
  });
});

const signUpInputs = document.querySelectorAll('.sign-up');

signUpInputs.forEach(input2 => {
  input2.addEventListener('focus', () => {
    input2.style.outline = 'none';
  });
});

document.querySelector('#signup-btn').onclick = () => {
    document.querySelector('.overlay').classList.toggle('active');
}

document.addEventListener('keydown',function(event){

    if(event.key == 'Escape'){
        document.querySelector('.overlay').classList.remove('active');
    }
})


const stars = document.querySelectorAll('.stars i');

stars.forEach((star,index1) => {
  star.addEventListener('click', ()=>{
    stars.forEach((star,index2) => {
      index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
    })
  })
})

const menuBar = document.querySelector('.menu-bar');
const menuIcon = document.querySelector('.menu-bar i')
const navTab = document.querySelector('.nav-tab');

let isMenuOpen = false;

menuBar.addEventListener('click', function() {
  if (!isMenuOpen) {
    navTab.style.display = 'flex';
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    navTab.style.display = 'none';
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }

  isMenuOpen = !isMenuOpen;
});


  