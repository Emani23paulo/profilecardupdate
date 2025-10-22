const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
  e.preventDefault();
  const fields = ["name", "email", "subject", "message"];
  let valid = true;

  fields.forEach(id => {
    const input = document.getElementById(id);
    const error = document.getElementById(`error-${id}`);
    error.textContent = "";
    input.removeAttribute("aria-describedby");

    if (!input.value.trim()) {
      error.textContent = "This field is required.";
      input.setAttribute("aria-describedby", `error-${id}`);
      valid = false;
    }
  });

  const email = document.getElementById("email");
  if (email.value && !/\S+@\S+\.\S+/.test(email.value)) {
    const error = document.getElementById("error-email");
    error.textContent = "Enter a valid email address.";
    email.setAttribute("aria-describedby", "error-email");
    valid = false;
  }

  const message = document.getElementById("message");
  if (message.value.trim().length && message.value.trim().length < 10) {
    const error = document.getElementById("error-message");
    error.textContent = "Message must be at least 10 characters.";
    message.setAttribute("aria-describedby", "error-message");
    valid = false;
  }

  const success = document.getElementById("success");
  success.hidden = !valid;
  if (valid) form.reset();
});
