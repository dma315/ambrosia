function timerIncrement() {
    IDLETIME += 1;
    if (IDLETIME > 26) {
        console.log(IDLETIME)
        IDLETIME = 0;
        $.fn.fullpage.moveSectionDown()
    }
}

