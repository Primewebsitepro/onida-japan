// ---------------------------------------------------------------------------
// Homepage hero banner slider: autoplay + arrows + dots
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("hero-track");
  if (!track) return;

  const slides = Array.from(track.children);
  const dots = Array.from(document.querySelectorAll(".hero-dot"));
  const prevBtn = document.querySelector(".hero-arrow--prev");
  const nextBtn = document.querySelector(".hero-arrow--next");
  const AUTOPLAY_MS = 5500;

  let index = 0;
  let timer = null;

  function render() {
    track.style.transform = "translateX(-" + index * 100 + "%)";
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(next, AUTOPLAY_MS);
  }
  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  if (nextBtn) nextBtn.addEventListener("click", () => { next(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); startAutoplay(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { goTo(i); startAutoplay(); }));

  const section = track.closest(".hero-banner");
  if (section) {
    section.addEventListener("mouseenter", stopAutoplay);
    section.addEventListener("mouseleave", startAutoplay);
  }

  render();
  startAutoplay();
});
