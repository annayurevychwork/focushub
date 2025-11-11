document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-timer');
    const pauseBtn = document.getElementById('pause-timer');
    const resetBtn = document.getElementById('reset-timer');
    let time = 25 * 60;
    let timer = null;

    function updateDisplay() {
        const m = String(Math.floor(time / 60)).padStart(2,'0');
        const s = String(time % 60).padStart(2,'0');
        timerDisplay.textContent = `${m}:${s}`;
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(() => {
                time--;
                updateDisplay();
                if (time <= 0) {
                    clearInterval(timer);
                    timer = null;
                    alert("Pomodoro завершено!");
                    time = 25 * 60;
                    updateDisplay();
                }
            }, 1000);
        }
    }

    function pauseTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function resetTimer() {
        clearInterval(timer);
        timer = null;
        time = 25 * 60;
        updateDisplay();
    }

    startBtn.onclick = startTimer;
    pauseBtn.onclick = pauseTimer;
    resetBtn.onclick = resetTimer;

    updateDisplay();
});
