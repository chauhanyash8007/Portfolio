// Smooth scrolling for nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dynamic greeting based on time
function updateGreeting() {
  const greetingEl = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();
  let greetingText = "Hi, I'm Yash Chauhan";

  if (hour < 12) {
    greetingText = "Good Morning, I'm Yash Chauhan";
  } else if (hour < 18) {
    greetingText = "Good Afternoon, I'm Yash Chauhan";
  } else {
    greetingText = "Good Evening, I'm Yash Chauhan";
  }

  greetingEl.textContent = greetingText;
}
updateGreeting();

// Contact form validation and feedback
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "";
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in both fields.";
    return;
  }

  // Basic email regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  // Simulate form submission (no backend)
  formMessage.style.color = "green";
  formMessage.textContent =
    "Thank you for your message! I will get back to you soon.";

  form.reset();
});
