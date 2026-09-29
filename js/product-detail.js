// ---------------------------------------------------------------------------
// Product detail page: gallery, WhatsApp links, enquiry form
// Relies on I18N / getLang / waLink from i18n.js
// ---------------------------------------------------------------------------
(function () {
  function productMessage() {
    const dict = I18N[getLang()] || I18N.en;
    return dict["pd.enquire.msg"] || "";
  }

  function updateWhatsAppLinks() {
    const href = waLink(productMessage());
    document.querySelectorAll("[data-pd-wa]").forEach((a) => a.setAttribute("href", href));
  }

  function updateDocumentTitle() {
    const dict = I18N[getLang()] || I18N.en;
    if (dict["pd.title"]) document.title = dict["pd.title"] + " — Onida Japan Panamá";
  }

  // applyLang() calls window.onLangChange; chain onto whatever products.js set
  const previous = window.onLangChange;
  window.onLangChange = function (lang) {
    if (typeof previous === "function") previous(lang);
    updateWhatsAppLinks();
    updateDocumentTitle();
  };

  document.addEventListener("DOMContentLoaded", () => {
    updateWhatsAppLinks();
    updateDocumentTitle();

    const mainImg = document.getElementById("pd-main-img");
    const thumbs = Array.from(document.querySelectorAll(".pd-thumb"));
    thumbs.forEach((t) => {
      t.addEventListener("click", () => {
        if (mainImg) mainImg.src = t.getAttribute("data-src");
        thumbs.forEach((x) => x.classList.toggle("is-active", x === t));
      });
    });

    const form = document.getElementById("pd-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const es = getLang() === "es";
        const lines = [
          productMessage(),
          "",
          (es ? "Nombre: " : "Name: ") + (form.name.value.trim() || "-"),
          (es ? "Teléfono: " : "Phone: ") + (form.phone.value.trim() || "-"),
        ];
        if (form.email.value.trim()) lines.push((es ? "Correo: " : "Email: ") + form.email.value.trim());
        if (form.message.value.trim()) lines.push("", form.message.value.trim());
        window.open(waLink(lines.join("\n")), "_blank", "noopener");
      });
    }
  });
})();
