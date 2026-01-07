let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

// const typed = new Typed('multiple-text', {
//     strings: ['<i>First</i> sentence.', '.'],
//     typeSpeed: 50,
//     });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer'],
    typeSpeed: 50,
    backSpeed: 50, // Optional: text delete hone ki speed
    backDelay: 1000, // Optional: rukne ka waqt
    loop: true // Optional: baar baar chalne ke liye
});




window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}