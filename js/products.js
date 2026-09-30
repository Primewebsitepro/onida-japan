// ---------------------------------------------------------------------------
// Renders category tiles (home) and product grid + filters (products page)
// Relies on CATALOG from products-data.js and I18N helpers from i18n.js
// ---------------------------------------------------------------------------

const ICON_CALL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
const ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.65.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.37-.02-.56-.02s-.51.08-.78.37c-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.35z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.06L2 22l5.2-1.44a9.85 9.85 0 0 0 4.84 1.27h.01c5.46 0 9.91-4.45 9.91-9.92C21.96 6.45 17.51 2 12.04 2zm0 17.93h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.85.83-3.02-.19-.31a8.19 8.19 0 0 1-1.27-4.4c0-4.55 3.7-8.25 8.24-8.25 2.2 0 4.27.86 5.83 2.42a8.17 8.17 0 0 1 2.41 5.83c0 4.55-3.71 8.21-8.26 8.21z"/></svg>';

function buildProductCard(product, categoryLabel) {
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  const msg = (dict["product.enquire.msg"] || "") + product.name + (product.code ? (dict["pd.msg.code"] || " — ") + product.code : "");

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
      '<div class="cat-card__count">' + cat.products.length + (lang === "es" ? (cat.products.length === 1 ? " producto" : " productos") : (cat.products.length === 1 ? " product" : " products")) + '</div></div>';
    wrap.appendChild(a);
  });
}

function buildSpotlightCard(product, categoryLabel) {
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  const msg = (dict["product.enquire.msg"] || "") + product.name + (product.code ? (dict["pd.msg.code"] || " — ") + product.code : "");

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
  updateSpotlightArrows();
}

// ---------------- Home: featured row arrows ----------------
function updateSpotlightArrows() {
  const row = document.getElementById("spotlight-row");
  const prev = document.querySelector(".spotlight-arrow--prev");
  const next = document.querySelector(".spotlight-arrow--next");
  if (!row || !prev || !next) return;
  // the row rests at its left padding (where the first card snaps), so compare against that
  const pad = parseFloat(getComputedStyle(row).paddingLeft) || 0;
  prev.disabled = row.scrollLeft <= pad + 2;
  next.disabled = row.scrollLeft + row.clientWidth >= row.scrollWidth - 2;
}

function initSpotlightArrows() {
  const row = document.getElementById("spotlight-row");
  const prev = document.querySelector(".spotlight-arrow--prev");
  const next = document.querySelector(".spotlight-arrow--next");
  if (!row || !prev || !next) return;
  const page = () => Math.max(row.clientWidth * 0.85, 200);
  prev.addEventListener("click", () => row.scrollBy({ left: -page(), behavior: "smooth" }));
  next.addEventListener("click", () => row.scrollBy({ left: page(), behavior: "smooth" }));
  row.addEventListener("scroll", updateSpotlightArrows, { passive: true });
  row.addEventListener("scrollend", updateSpotlightArrows);
  window.addEventListener("resize", updateSpotlightArrows);
  updateSpotlightArrows();
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

// ---------------- Products page: sidebar filters ----------------
const PAGE_SIZE = 24;
const catalogState = { cats: new Set(), brands: new Set(), shown: PAGE_SIZE, ready: false };
let FLAT_CATALOG = null;

function flatCatalog() {
  if (!FLAT_CATALOG) {
    FLAT_CATALOG = [];
    CATALOG.forEach((cat) => cat.products.forEach((p) => FLAT_CATALOG.push({ p: p, cat: cat })));
  }
  return FLAT_CATALOG;
}

function fmt(str, vars) {
  return String(str).replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
}

function brandCounts() {
  const counts = {};
  flatCatalog().forEach((x) => { if (x.p.brand) counts[x.p.brand] = (counts[x.p.brand] || 0) + 1; });
  return Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a] || a.localeCompare(b))
    .map((name) => ({ name: name, count: counts[name] }));
}

function filteredProducts() {
  return flatCatalog().filter((x) =>
    (catalogState.cats.size === 0 || catalogState.cats.has(x.cat.slug)) &&
    (catalogState.brands.size === 0 || catalogState.brands.has(x.p.brand)));
}

function syncUrl() {
  const url = new URL(window.location.href);
  const c = Array.from(catalogState.cats);
  const b = Array.from(catalogState.brands);
  if (c.length) url.searchParams.set("cat", c.join(",")); else url.searchParams.delete("cat");
  if (b.length) url.searchParams.set("brand", b.join(",")); else url.searchParams.delete("brand");
  window.history.replaceState({}, "", url);
}

function toggleInSet(set, value, on) {
  if (on) set.add(value); else set.delete(value);
}

function filterOption(label, count, checked, onChange) {
  const l = document.createElement("label");
  l.className = "filter-option" + (checked ? " is-checked" : "");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.addEventListener("change", onChange);
  const text = document.createElement("span");
  text.textContent = label;
  const num = document.createElement("span");
  num.className = "filter-option__count";
  num.textContent = count;
  l.appendChild(input);
  l.appendChild(text);
  l.appendChild(num);
  return l;
}

function renderFilters() {
  const catsWrap = document.getElementById("filter-cats");
  const brandsWrap = document.getElementById("filter-brands");
  if (!catsWrap || !brandsWrap) return;
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  catsWrap.innerHTML = "";
  brandsWrap.innerHTML = "";

  catsWrap.appendChild(filterOption(dict["catalog.all"] || "All", flatCatalog().length, catalogState.cats.size === 0, () => {
    catalogState.cats.clear();
    applyFilters();
  }));
  CATALOG.forEach((cat) => {
    catsWrap.appendChild(filterOption(catLabel(cat, lang), cat.products.length, catalogState.cats.has(cat.slug), (e) => {
      toggleInSet(catalogState.cats, cat.slug, e.target.checked);
      applyFilters();
    }));
  });
  brandCounts().forEach((b) => {
    brandsWrap.appendChild(filterOption(b.name, b.count, catalogState.brands.has(b.name), (e) => {
      toggleInSet(catalogState.brands, b.name, e.target.checked);
      applyFilters();
    }));
  });

  const clear = document.getElementById("filter-clear");
  if (clear) clear.disabled = catalogState.cats.size === 0 && catalogState.brands.size === 0;
}

function updateCatalogFooter(list, visibleCount) {
  const dict = I18N[getLang()] || I18N.en;
  const count = document.getElementById("catalog-count");
  const key = list.length === 1 && dict["catalog.showing.one"] ? "catalog.showing.one" : "catalog.showing";
  if (count) count.textContent = fmt(dict[key] || "{shown} / {total}", { shown: visibleCount, total: list.length });
  const more = document.getElementById("load-more");
  if (more) more.style.display = visibleCount < list.length ? "" : "none";
}

function renderProductGrid() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  const list = filteredProducts();
  const visible = list.slice(0, catalogState.shown);
  grid.innerHTML = "";
  visible.forEach((x) => grid.appendChild(buildProductCard(x.p, catLabel(x.cat, lang))));

  if (list.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML =
      '<h3>' + (dict["catalog.none.title"] || "") + '</h3>' +
      '<p>' + (dict["catalog.none.lead"] || "") + '</p>';
    grid.appendChild(empty);
  }
  updateCatalogFooter(list, visible.length);
}

function loadMoreProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const lang = getLang();
  const list = filteredProducts();
  const start = catalogState.shown;
  catalogState.shown += PAGE_SIZE;
  list.slice(start, catalogState.shown).forEach((x) => grid.appendChild(buildProductCard(x.p, catLabel(x.cat, lang))));
  updateCatalogFooter(list, Math.min(catalogState.shown, list.length));
}

function applyFilters() {
  catalogState.shown = PAGE_SIZE;
  syncUrl();
  renderFilters();
  renderProductGrid();
}

function initProductsPage() {
  const params = new URLSearchParams(window.location.search);
  const validCats = new Set(CATALOG.map((c) => c.slug));
  (params.get("cat") || "").split(",").forEach((c) => { if (validCats.has(c)) catalogState.cats.add(c); });
  const validBrands = new Set(brandCounts().map((b) => b.name));
  (params.get("brand") || "").split(",").forEach((b) => { if (validBrands.has(b)) catalogState.brands.add(b); });

  const more = document.getElementById("load-more");
  if (more) more.addEventListener("click", loadMoreProducts);
  const clear = document.getElementById("filter-clear");
  if (clear) clear.addEventListener("click", () => {
    catalogState.cats.clear();
    catalogState.brands.clear();
    applyFilters();
  });
  const toggle = document.getElementById("filter-toggle");
  const side = document.getElementById("catalog-side");
  if (toggle && side) toggle.addEventListener("click", () => side.classList.toggle("is-open"));

  catalogState.ready = true;
  renderFilters();
  renderProductGrid();
}

// Re-render dynamic content when language changes
window.onLangChange = function () {
  if (document.getElementById("cat-grid")) renderCategoryTiles();
  if (document.getElementById("spotlight-row")) renderSpotlight();
  if (document.getElementById("about-cat-chips")) renderCategoryChips();
  if (document.getElementById("product-grid") && catalogState.ready) {
    renderFilters();
    renderProductGrid();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryTiles();
  renderSpotlight();
  initSpotlightArrows();
  renderCategoryChips();
  if (document.getElementById("product-grid")) initProductsPage();
});
