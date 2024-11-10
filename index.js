const itemP = document.getElementById("toggle");
const itemR = document.getElementById("toggle2");
const itemS = document.getElementById("toggle3");

itemP.addEventListener("click", function show() {
    document.getElementById("kiss_2").style.display = "none";
    document.getElementById("kiss_3").style.display = "none";
    document.getElementById("kiss_1").style.display = "block";
});

itemR.addEventListener("click", function show() {
    document.getElementById("kiss_1").style.display = "none";
    document.getElementById("kiss_3").style.display = "none";
    document.getElementById("kiss_2").style.display = "block";
});

itemS.addEventListener("click", function show() {
    document.getElementById("kiss_1").style.display = "none";
    document.getElementById("kiss_2").style.display = "none";
    document.getElementById("kiss_3").style.display = "block";
});

itemR.addEventListener("click", function changeColour() {
    document.body.classList.remove("dark-theme");
    document.body.classList.remove("idk-theme");
    document.body.classList.add("light-theme");
});

itemP.addEventListener("click", function changeColour() {
    document.body.classList.remove("light-theme");
    document.body.classList.remove("idk-theme");
    document.body.classList.add("dark-theme");
});

itemS.addEventListener("click", function changeColour() {
    document.body.classList.remove("light-theme");
    document.body.classList.remove("dark-theme");
    document.body.classList.add("idk-theme");
});