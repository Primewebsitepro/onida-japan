// ---------------------------------------------------------------------------
// Renders category tiles (home) and product grid + filters (products page)
// Relies on CATALOG from products-data.js and I18N helpers from i18n.js
// ---------------------------------------------------------------------------

const ICON_CALL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
const ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.65.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.37-.02-.56-.02s-.51.08-.78.37c-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.35z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.06L2 22l5.2-1.44a9.85 9.85 0 0 0 4.84 1.27h.01c5.46 0 9.91-4.45 9.91-9.92C21.96 6.45 17.51 2 12.04 2zm0 17.93h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.85.83-3.02-.19-.31a8.19 8.19 0 0 1-1.27-4.4c0-4.55 3.7-8.25 8.24-8.25 2.2 0 4.27.86 5.83 2.42a8.17 8.17 0 0 1 2.41 5.83c0 4.55-3.71 8.21-8.26 8.21z"/></svg>';

function buildProductCard(product, categoryLabel) {
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  const msg = (dict["product.enquire.msg"] || "") + product.name;

  const img = '<img src="' + product.image + '" alt="' + escapeHtml(product.name) + '" loading="lazy">';
  const name = escapeHtml(product.name);
  // Only products that have a detail page become links
  const media = product.url
    ? '<a class="product-card__media product-card__media--link" href="' + product.url + '">' + img + '</a>'
    : '<div class="product-card__media">' + img + '</div>';
  const title = product.url
    ? '<a class="product-card__name product-card__name--link" href="' + product.url + '">' + name + '</a>'
    : '<span class="product-card__name">' + name + '</span>';

  const el = document.createElement("div");
  el.className = "product-card";
  el.innerHTML =
    media +
    '<div class="product-card__body">' +
      '<span class="product-card__cat">' + escapeHtml(categoryLabel) + '</span>' +
      title +
      brandLine(product, dict) +
      '<div class="product-card__actions">' +
        '<a class="btn btn--ghost" href="tel:+' + WHATSAPP_NUMBER + '">' + ICON_CALL + '<span data-i18n="product.call">' + (dict["product.call"] || "Call") + '</span></a>' +
        '<a class="btn btn--whatsapp" target="_blank" rel="noopener" href="' + waLink(msg) + '">' + ICON_WA + '<span data-i18n="product.whatsapp">' + (dict["product.whatsapp"] || "WhatsApp") + '</span></a>' +
      '</div>' +
    '</div>';
  return el;
}

function brandLine(product, dict) {
  if (!product.brand) return "";
  return '<span class="product-card__brand"><span data-i18n="product.brand">' + (dict["product.brand"] || "Brand") + '</span>: <strong>' + escapeHtml(product.brand) + '</strong></span>';
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function catLabel(cat, lang) {
  return lang === "es" ? cat.nameEs : cat.nameEn;
}

// ---------------- Home: category tiles ----------------
function renderCategoryTiles() {
  const wrap = document.getElementById("cat-grid");
  if (!wrap) return;
  const lang = getLang();
  wrap.innerHTML = "";
  CATALOG.forEach((cat) => {
    const thumb = cat.products[0] ? cat.products[0].image : "";
    const a = document.createElement("a");
    a.className = "cat-card";
    a.href = "products.html?cat=" + cat.slug;
    a.innerHTML =
      (thumb ? '<img class="cat-card__thumb" src="' + thumb + '" alt="">' : '<div class="cat-card__thumb"></div>') +
      '<div><div class="cat-card__name">' + escapeHtml(catLabel(cat, lang)) + '</div>' +
      '<div class="cat-card__count">' + cat.products.length + (lang === "es" ? " productos" : " products") + '</div></div>';
    wrap.appendChild(a);
  });
}

function buildSpotlightCard(product, categoryLabel) {
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  const msg = (dict["product.enquire.msg"] || "") + product.name;

  const spotImg = '<img src="' + product.image + '" alt="' + escapeHtml(product.name) + '" loading="lazy">';
  const badge = '<span class="spotlight-card__badge">' + escapeHtml(categoryLabel) + '</span>';
  const spotName = escapeHtml(product.name);
  const spotMedia = product.url
    ? '<a class="spotlight-card__media" href="' + product.url + '">' + badge + spotImg + '</a>'
    : '<div class="spotlight-card__media">' + badge + spotImg + '</div>';
  const spotTitle = product.url
    ? '<a class="spotlight-card__name product-card__name--link" href="' + product.url + '">' + spotName + '</a>'
    : '<span class="spotlight-card__name">' + spotName + '</span>';

  const el = document.createElement("div");
  el.className = "spotlight-card";
  el.innerHTML =
    spotMedia +
    '<div class="spotlight-card__body">' +
      '<span class="spotlight-card__cat">' + escapeHtml(categoryLabel) + '</span>' +
      spotTitle +
      brandLine(product, dict) +
      '<div class="spotlight-card__actions">' +
        '<a class="btn btn--ghost" href="tel:+' + WHATSAPP_NUMBER + '">' + ICON_CALL + '</a>' +
        '<a class="btn btn--whatsapp" target="_blank" rel="noopener" href="' + waLink(msg) + '">' + ICON_WA + '</a>' +
      '</div>' +
    '</div>';
  return el;
}

// ---------------- Home: featured products spotlight ----------------
function renderSpotlight() {
  const row = document.getElementById("spotlight-row");
  if (!row) return;
  const lang = getLang();
  row.innerHTML = "";
  CATALOG.forEach((cat) => {
    if (cat.products[0]) row.appendChild(buildSpotlightCard(cat.products[0], catLabel(cat, lang)));
  });
}

// ---------------- About page: category chip list ----------------
function renderCategoryChips() {
  const wrap = document.getElementById("about-cat-chips");
  if (!wrap) return;
  const lang = getLang();
  wrap.innerHTML = "";
  CATALOG.forEach((cat) => {
    const a = document.createElement("a");
    a.className = "filter-chip";
    a.href = "products.html?cat=" + cat.slug;
    a.textContent = catLabel(cat, lang);
    wrap.appendChild(a);
  });
}

// ---------------- Products page ----------------
let currentFilter = "all";

function renderFilterBar() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  bar.innerHTML = "";

  const allChip = document.createElement("button");
  allChip.className = "filter-chip" + (currentFilter === "all" ? " is-active" : "");
  allChip.textContent = dict["filter.all"] || "All";
  allChip.addEventListener("click", () => setFilter("all"));
  bar.appendChild(allChip);

  CATALOG.forEach((cat) => {
    const chip = document.createElement("button");
    chip.className = "filter-chip" + (currentFilter === cat.slug ? " is-active" : "");
    chip.textContent = catLabel(cat, lang);
    chip.addEventListener("click", () => setFilter(cat.slug));
    bar.appendChild(chip);
  });
}

function setFilter(slug) {
  currentFilter = slug;
  const url = new URL(window.location.href);
  if (slug === "all") url.searchParams.delete("cat");
  else url.searchParams.set("cat", slug);
  window.history.replaceState({}, "", url);
  renderFilterBar();
  renderProductGrid();
}

function renderProductGrid() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  grid.innerHTML = "";

  const cats = currentFilter === "all" ? CATALOG : CATALOG.filter((c) => c.slug === currentFilter);
  let total = 0;

  cats.forEach((cat) => {
    cat.products.forEach((p) => {
      grid.appendChild(buildProductCard(p, catLabel(cat, lang)));
      total++;
    });
  });

  if (total === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML =
      '<h3>' + (dict["empty.title"] || "No products yet") + '</h3>' +
      '<p>' + (dict["empty.lead"] || "") + '</p>';
    grid.appendChild(empty);
  }
}

function initProductsPage() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  if (cat && CATALOG.some((c) => c.slug === cat)) currentFilter = cat;
  renderFilterBar();
  renderProductGrid();
}

// Re-render dynamic content when language changes
window.onLangChange = function () {
  if (document.getElementById("cat-grid")) renderCategoryTiles();
  if (document.getElementById("spotlight-row")) renderSpotlight();
  if (document.getElementById("about-cat-chips")) renderCategoryChips();
  if (document.getElementById("product-grid")) {
    renderFilterBar();
    renderProductGrid();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryTiles();
  renderSpotlight();
  renderCategoryChips();
  if (document.getElementById("product-grid")) initProductsPage();
});
