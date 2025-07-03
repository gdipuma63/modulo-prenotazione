document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const date = document.getElementById('date').value.trim();
  const time = document.getElementById('time').value.trim();
  const people = document.getElementById('people').value.trim();

  if (!name || !date || !time || !people) {
    alert("Per favore, compila tutti i campi.");
    return;
  }

  const numeroWhatsApp = "391234567890"; // Sostituisci con il tuo numero!
  const messaggio = `Ciao! Vorrei prenotare a nome di ${name} per il giorno ${date} alle ${time}, per ${people} persone.`;

  // Salva i dati nel localStorage per usarli nella pagina di conferma
  localStorage.setItem('wa_link', `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(messaggio)}`);

  // Apre la pagina di conferma in una nuova scheda
  window.open('conferma.html', '_blank');

  // Reset modulo
  document.getElementById('bookingForm').reset();
});
