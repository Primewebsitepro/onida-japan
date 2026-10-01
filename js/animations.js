// ---------------------------------------------------------------------------
// Scroll reveal: content and images fade/slide in as they enter the viewport
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const TEXT = [
    ".section-head", ".page-head", ".info-strip", ".cat-card", ".spotlight-wrap", ".section-foot",
    ".about-snippet > div:not(.about-snippet__media)", ".step", ".feature", ".value-card", ".cta-band",
    ".faq-item", ".contact-card", ".form", ".pd-info", ".pd-panel", ".pd-enquiry > *",
    ".about-hero > div:first-child", ".filter-bar", ".about-cats", ".catalog__side", ".catalog__bar",
    ".feature-list li", ".pd-related .section-head", ".footer-grid > *",
  ];
  const IMAGES = [".about-snippet__media", ".hero__visual", ".pd-gallery", ".story__media"];

  const tagged = [];
  function tag(selector, extra) {
    document.querySelectorAll((selector.indexOf("footer") > -1 ? "" : "main ") + selector).forEach((el) => {
      if (el.classList.contains("reveal") || el.closest(".hero-banner")) return;
      el.classList.add("reveal");
      if (extra) el.classList.add(extra);
      tagged.push(el);
    });
  }
  TEXT.forEach((s) => tag(s));
  IMAGES.forEach((s) => tag(s, "reveal--img"));

  // stagger siblings so rows of cards cascade in
  const groups = new Map();
  tagged.forEach((el) => {
    const p = el.parentElement;
    const n = groups.get(p) || 0;
    groups.set(p, n + 1);
    if (n) el.style.setProperty("--reveal-delay", (Math.min(n, 5) * 0.09).toFixed(2) + "s");
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  tagged.forEach((el) => io.observe(el));
});
