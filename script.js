 // Fade-in animation for project cards
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    status.innerHTML = "Message sent successfully!";
    form.reset();
  } else {
    status.innerHTML = "Something went wrong.";
  }
});

