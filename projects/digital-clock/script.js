let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const timezoneElement = document.getElementById('timezone');
    
    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';
    
    if (!is24HourFormat) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be 12
    }
    
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}${ampm}`;
    
    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
    
    // Timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timezoneElement.textContent = `Time Zone: ${timezone}`;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    const formatText = document.getElementById('formatText');
    formatText.textContent = is24HourFormat ? 'Switch to 12-hour' : 'Switch to 24-hour';
    updateClock();
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
