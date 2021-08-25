// scroll to top on refresh
document.onload =
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

// nav-spacer
window.onresize = () => {
    let spacerHeight = document.getElementById("navbar").clientHeight;
    document.getElementById("nav-spacer").style.height = `${spacerHeight}px`;
};
window.onload = window.onresize();


// scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// page transition
let contact = document.getElementById("cta-link");

contact.addEventListener('click', () => {
    document.body.style.opacity = "0";
    document.location = "./contact-us.html";
})

window.onload = () => {
    document.body.style.opacity = "1";
}

// insert current year in copyright
let year = document.getElementById('year');
let currYear = new Date().getFullYear();
year.innerHTML = currYear;