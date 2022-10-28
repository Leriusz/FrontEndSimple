const button = document.body.querySelector("#btn-prnt");
//button.addEventListener("click", () => colorFunction());
button.addEventListener("click", () => type());
button.addEventListener("click", () => colorFunction());
// button.addEventListener("click", () => onButtonClick());
button.addEventListener("click", () => onClick());

function type() {
    const textt = document.querySelector(".phrase");
    textt.textContent = "Kocham Ciebie Julciu";
}

function colorFunction() {
    document.getElementById("body").style.backgroundColor = "pink";
}

function onClick() {
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    const text3 = document.querySelector(".text3");
    text1.textContent = "chcesh powiedziec mi to samo?";
    text2.textContent = "Dzwoń: +48791390112";
    text3.textContent = "Pisz: vlrgavris@gmail.com";
}
//
// function onButtonClick() {
//     document.getElementById("#foot").className="show"
// }
