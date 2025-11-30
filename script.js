// Mobile Menu Toggle
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
  navLinks.classList.toggle("open");
  const isExpanded = navLinks.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isExpanded);
  menuButton.innerHTML = isExpanded ? "✕" : "☰";
}

menuButton.addEventListener("click", toggleMenu);

// Close menu when link is clicked (mobile UX)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      toggleMenu();
    }
  });
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
});

// Form Submission Handling with Validation
const contactForm = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();

  if (nameInput === "" || emailInput === "") {
    messageDiv.textContent = "⚠ Please fill out all required fields.";
    messageDiv.style.color = "#d32f2f";
    messageDiv.style.background = "#ffebee";
  } else {
    messageDiv.textContent =
      "✓ Thank you for your message! I will be in touch shortly.";
    messageDiv.style.color = "#2e7d32";
    messageDiv.style.background = "#e8f5e9";
    contactForm.reset();
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add scroll animation to sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});
