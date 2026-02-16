export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitButton = form.querySelector('button');
  const messageEl = document.getElementById('formMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = 'Saadan...';
    messageEl.style.display = 'block';
    messageEl.textContent = 'Palun oota...';

    const formData = new FormData(form);
    const params = new URLSearchParams(formData);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyCpv0C3PLX-YtSaOyXt3M_xcH6OTw1f_hMYN74QFYbLNCIMFkttn6Bc4VSzuuuJ5mg/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      });

      const result = await response.json();

      if (result.result === 'success') {
        messageEl.textContent = 'Sõnum edukalt saadetud!';
        form.reset();
      } else {
        throw new Error(result.error || 'Tekkis viga');
      }
    } catch (error) {
      messageEl.textContent = 'Viga: ' + error.message;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Saada';
    }
  });
}