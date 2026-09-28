document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const lines = [
      (getLang() === "es" ? "Hola, mi nombre es" : "Hello, my name is") + " " + (name || "-") + ".",
      (getLang() === "es" ? "Teléfono:" : "Phone:") + " " + (phone || "-"),
    ];
    if (email) lines.push((getLang() === "es" ? "Correo:" : "Email:") + " " + email);
    if (message) lines.push(message);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });
});
