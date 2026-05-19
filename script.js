// Hero Button

const heroBtn = document.getElementById("heroBtn");

heroBtn.addEventListener("click", () => {

  alert("Welcome to MyWebsite!");

});

// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Form Submitted Successfully!");

});
