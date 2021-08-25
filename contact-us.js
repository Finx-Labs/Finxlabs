// nav-spacer
window.onresize = () => {
    let spacerHeight = document.getElementById("navbar").clientHeight;
    document.getElementById("nav-spacer").style.height = `${spacerHeight}px`;
};
window.onload = window.onresize();


let inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', () => {
        inputs[i].labels[0].style.color = "#05383F";
        inputs[i].labels[0].style.fontWeight = "600";

        if (inputs[i].value === "") {
            inputs[i].labels[0].style.color = "#d4d4d4";
            inputs[i].labels[0].style.fontWeight = "400";
        }
    })
}

window.onload = () => {
    document.body.style.opacity = "1";
}

let brandTop = document.getElementById("brand-top");
brandTop.addEventListener('click', () => {
    document.body.style.opacity = "0";
    document.location = "./index.html";
});

let brandBottom = document.getElementById("brand-bottom");
brandBottom.addEventListener('click', () => {
    document.body.style.opacity = "0";
    window.location = "./index.html";
    console.log("done");
});


// insert current year in copyright
let year = document.getElementById('year');
let currYear = new Date().getFullYear();
year.innerHTML = currYear;