// ---------------------------------------------------------------------------
// Product detail pages: gallery, WhatsApp links, enquiry form, related items
// Relies on I18N / getLang / waLink (i18n.js) and CATALOG / buildProductCard (products.js)
// ---------------------------------------------------------------------------
(function () {
  function dict() {
    return I18N[getLang()] || I18N.en;
  }

  // Generic pages carry their product on <body data-*>; the hand-written page uses dictionary keys.
  function productMessage() {
    const d = dict();
    const body = document.body;
    const name = body.getAttribute("data-product-name");
    if (name) {
      const code = body.getAttribute("data-product-code");
      return (d["pd.msg.prefix"] || "") + name + (code ? (d["pd.msg.code"] || " — ") + code : "");
    }
    return d["pd.enquire.msg"] || "";
  }

  function updateWhatsAppLinks() {
    const href = waLink(productMessage());
    document.querySelectorAll("[data-pd-wa]").forEach((a) => a.setAttribute("href", href));
  }

  // Only the hand-written page translates its title; generated pages keep their baked-in one.
  function updateDocumentTitle() {
    if (!document.querySelector('[data-i18n="pd.title"]')) return;
    const d = dict();
    if (d["pd.title"]) document.title = d["pd.title"] + " — Onida Japan Panamá";
  }

  function updateCategoryLabels() {
    const lang = getLang();
    document.querySelectorAll("[data-cat-label]").forEach((el) => {
      const cat = CATALOG.find((c) => c.slug === el.getAttribute("data-cat-label"));
      if (cat) el.textContent = catLabel(cat, lang);
    });
  }

  function updateImageLabels() {
    const label = dict()["aria.image"] || "Image";
    document.querySelectorAll(".pd-thumb[data-n]").forEach((t) => {
      t.setAttribute("aria-label", label + " " + t.getAttribute("data-n"));
    });
  }

  // Up to four other products from the same category, starting after this one
  function renderRelated() {
    const wrap = document.getElementById("pd-related");
    if (!wrap) return;
    const slug = document.body.getAttribute("data-cat");
    const code = document.body.getAttribute("data-product-code");
    const cat = CATALOG.find((c) => c.slug === slug);
    if (!cat) return;
    const lang = getLang();
    const idx = cat.products.findIndex((p) => p.code === code);
    const others = cat.products.filter((p) => p.code !== code);
    const start = others.length ? (idx >= 0 ? idx : 0) % others.length : 0;
    // rotate so the picks follow this product, without ever repeating one
    const picks = others.slice(start).concat(others.slice(0, start)).slice(0, 4).map((p) => ({ p: p, cat: cat }));
    // small categories: top up with the lead product of other categories
    for (let i = 0; i < CATALOG.length && picks.length < 4; i++) {
      const other = CATALOG[i];
      if (other !== cat && other.products[0]) picks.push({ p: other.products[0], cat: other });
    }
    wrap.innerHTML = "";
    picks.forEach((x) => wrap.appendChild(buildProductCard(x.p, catLabel(x.cat, lang))));
  }

  function refresh() {
    updateWhatsAppLinks();
    updateDocumentTitle();
    updateCategoryLabels();
    updateImageLabels();
    renderRelated();
  }

  // applyLang() calls window.onLangChange; chain onto whatever products.js set
  const previous = window.onLangChange;
  window.onLangChange = function (lang) {
    if (typeof previous === "function") previous(lang);
    refresh();
  };

  document.addEventListener("DOMContentLoaded", () => {
    refresh();

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
