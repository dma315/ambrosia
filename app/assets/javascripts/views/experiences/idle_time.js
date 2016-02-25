var idleInterval = setInterval(timerIncrement, 600); // 1 second

function timerIncrement() {
    IDLETIME += 1;
    if (IDLETIME > 3) {
        $(document).trigger("keydown")
    }
}
