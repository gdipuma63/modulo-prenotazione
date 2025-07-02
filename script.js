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

  const numeroWhatsApp = "393667189531"; // Sostituisci con il tuo numero
  const messaggio = `Ciao! Vorrei prenotare a nome di ${name} per il giorno ${date} alle ${time}, per ${people} persone.`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(messaggio)}`;
  window.open(url, '_blank');

  // Mostra il messaggio di conferma
  const successMsg = document.getElementById('successMessage');
  successMsg.style.display = 'block';

  // Reimposta il modulo (opzionale)
  document.getElementById('bookingForm').reset();
});

