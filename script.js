document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const date = document.getElementById('date').value.trim();

  if (!name || !date) {
    alert("Per favore, compila tutti i campi.");
    return;
  }

  const numeroWhatsApp = "393457616130"; // Sostituisci con il tuo numero!
  const messaggio = `Salve! Vorrei prenotare a nome di ${name} per il giorno ${date}.`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(messaggio)}`;
  window.open(url, '_blank');
});
