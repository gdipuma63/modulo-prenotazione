document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const dateInput = document.getElementById('date').value.trim(); // yyyy-mm-dd
  const time = document.getElementById('time').value.trim();
  const people = document.getElementById('people').value.trim();

  if (!name || !dateInput || !time || !people) {
    alert("Per favore, compila tutti i campi.");
    return;
  }

  // ⏰ Ora corrente
  const now = new Date();
  const hour = now.getHours();
  const saluto = hour < 14 ? "Buongiorno" : "Buonasera";

  // 📅 Riformattazione della data
  const [yyyy, mm, dd] = dateInput.split("-");
  const dataFormattata = `${dd}/${mm}/${yyyy}`;

  // 📱 Numero WhatsApp
  const numeroWhatsApp = "393667189531"; // Sostituisci con il tuo numero!

  // 📝 Messaggio WhatsApp
  const messaggio = `${saluto}! Vorrei prenotare a nome di ${name} per il giorno ${dataFormattata} alle ${time}, per ${people} persone.`;

  // 🌐 URL WhatsApp
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(messaggio)}`;

  // Salva il link per conferma.html
  localStorage.setItem('wa_link', url);

  // Apri la pagina di conferma
  window.open('conferma.html', '_blank');

  // Reset del modulo
  document.getElementById('bookingForm').reset();
});
