// ---------------------------------------------------------------------------
// Homepage hero slider: crossfade + slow zoom, per-slide captions,
// progress dots, arrows, swipe, keyboard, pause on hover / hidden tab
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-banner");
  const track = document.getElementById("hero-track");
  if (!hero || !track) return;

  const slides = Array.from(track.querySelectorAll(".hero-slide"));
  const captions = Array.from(hero.querySelectorAll(".hero-caption"));
  const dots = Array.from(hero.querySelectorAll(".hero-dot"));
  const prevBtn = hero.querySelector(".hero-arrow--prev");
  const nextBtn = hero.querySelector(".hero-arrow--next");
  const DURATION = 6500;

  hero.style.setProperty("--hero-duration", DURATION + "ms");

  let index = 0;
  let elapsed = 0;
  let last = null;
  let paused = false;

  function render() {
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    captions.forEach((c, i) => {
      const on = i === index;
      c.classList.toggle("is-active", on);
      if (on) c.removeAttribute("aria-hidden"); else c.setAttribute("aria-hidden", "true");
      c.querySelectorAll("a").forEach((a) => { a.tabIndex = on ? 0 : -1; });
    });
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === index);
      d.setAttribute("aria-current", i === index ? "true" : "false");
    });
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    elapsed = 0;
    // restart the dot progress animation
    dots.forEach((d) => d.classList.remove("is-active"));
    void hero.offsetWidth;
    render();
  }

  function tick(now) {
    if (last === null) last = now;
    if (!paused) {
      elapsed += now - last;
      if (elapsed >= DURATION) goTo(index + 1);
    }
    last = now;
  }

  function setPaused(p) {
    paused = p;
    hero.classList.toggle("is-paused", p);
  }

  nextBtn && nextBtn.addEventListener("click", () => goTo(index + 1));
  prevBtn && prevBtn.addEventListener("click", () => goTo(index - 1));
  dots.forEach((d, i) => d.addEventListener("click", () => goTo(i)));

  hero.addEventListener("mouseenter", () => setPaused(true));
  hero.addEventListener("mouseleave", () => setPaused(false));
  hero.addEventListener("focusin", () => setPaused(true));
  hero.addEventListener("focusout", () => setPaused(false));
  document.addEventListener("visibilitychange", () => { last = null; setPaused(document.hidden); });

  hero.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goTo(index + 1);
    if (e.key === "ArrowLeft") goTo(index - 1);
  });

  // swipe on touch screens
  let startX = null;
  hero.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 45) goTo(index + (dx < 0 ? 1 : -1));
    startX = null;
  });

  render();
  hero.classList.add("is-ready");
  setInterval(() => tick(performance.now()), 100);
});
