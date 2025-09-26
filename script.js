// Smooth scroll
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form handler
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you for contacting ILEX! We will reply soon.");
  this.reset();
});
