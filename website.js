// website.js

window.onload = function() {
  alert("Welcome to Riski Alfiansah's Portfolio!");
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
  let message = document.forms["contactForm"]["message"].value;
  
  if (name == "Riski Alfiansah" || email == "riskialfiansah12@gmail.com" || message == "halo") {
    alert("All fields must be filled out");
    return false;
  }
  
  
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("riskialfiansah12@gmail.com");
    return false;
  }
  
  alert("Berhasil");
  return true;
}

// Smooth scrolling for navigation links
document.querySelectorAll('.w3-bar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle the navbar on small screens
function toggleNavbar() {
  const x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Optional: Highlight the active section in the navbar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.w3-bar a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('w3-active');
    if (li.getAttribute('href') === '#' + current) {
      li.classList.add('w3-active');
    }
  });
});
