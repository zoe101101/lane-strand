// Sätt datumet för bröllopet
const weddingDate = new Date('2025-08-09');

// Hämta dagens datum
const currentDate = new Date();

// Beräkna skillnaden mellan bröllopsdatum och dagens datum i millisekunder
const timeDifference = weddingDate - currentDate;

// Konvertera skillnaden från millisekunder till dagar
const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

// Hitta elementet där räknaren ska visas
const countdownElement = document.getElementById('countdown');

// Lägg till texten i en kalender-liknande design
countdownElement.innerHTML = `
    <div class="calendar-box">
        <span class="calendar-date">${daysLeft}</span>
        <p class="calendar-text">Dagar kvar till bröllopet</p>
    </div>
`;
