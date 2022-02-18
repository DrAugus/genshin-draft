function showDot() {
    let str = "......,......";
    const typed = new Typed("#dotdot", {
        strings: str.split(","),
        startDelay: 300,
        typeSpeed: 150,
        loop: true,
        backSpeed: 50
    });
}

showDot();