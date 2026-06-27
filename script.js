// Gibt jedem Wort ein zufälliges Tempo und einen zufälligen Versatz,
// damit sich die Wörter auf der liegenden Acht immer neu kreuzen.
document.addEventListener('DOMContentLoaded', function () {
    const words = document.querySelectorAll('.cloud');

    words.forEach(function (word) {
        const duration = 10 + Math.random() * 12;   // 10–22 Sekunden pro Runde
        const delay = -Math.random() * duration;     // zufälliger Startpunkt auf der Bahn

        word.style.animationDuration = duration.toFixed(2) + 's';
        word.style.animationDelay = delay.toFixed(2) + 's';
    });
});
