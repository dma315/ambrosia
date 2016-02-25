function timerIncrement() {
    IDLETIME += 1;
    if (IDLETIME > 26) {
        IDLETIME = 0;
        $.fn.fullpage.moveSectionDown()
    }
}

// 40 is the down key button
