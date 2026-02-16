export function initGallery() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  let slideIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
  document.getElementById('prevBtn')?.addEventListener('click', prevSlide);

  showSlide(slideIndex);
}
