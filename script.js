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

  const numeroWhatsApp = "391234567890"; // Inserisci il tuo numero qui
  const messaggio = `Ciao! Vorrei prenotare a nome di ${name} per il giorno ${date} alle ${time}, per ${people} persone.`;

  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(messaggio)}`;

  // Apre WhatsApp in una nuova scheda
  window.open(whatsappUrl, '_blank');

  // Apre la pagina di conferma in una nuova scheda
  window.open('conferma.html', '_blank');

  // Reset del modulo
  document.getElementById('bookingForm').reset();
});
