const button = document.body.querySelector("#btn-prnt");
//button.addEventListener("click", () => colorFunction());
button.addEventListener("click", () => type());
button.addEventListener("click", () => colorFunction());

function type() {
    const textt = document.body.querySelector(".phrase");
    textt.textContent = "Kocham Ciebie Julciu";
}


function colorFunction() {
    document.getElementById("body").style.backgroundColor = "pink";
}

