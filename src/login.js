let submit = document.getElementById("su-submit")
let username = document.getElementById("su-name")
let password = document.getElementById("su-pass")
let wrong = document.getElementById("lg-wrong")
let form = document.getElementById("lg-form");
let eyeborder = document.querySelector(".su-eye")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (username.value === '' || username.value.length < 3 || password.value === '' || password.value.length < 3) {
        wrong.style.visibility = "visible";
        username.style.borderColor = "red"
        password.style.borderColor = "red"
        eyeborder.style.borderColor = "red"
        
    } else {
        
    }
});

let PassEye = document.getElementById("pass-ey")


PassEye.addEventListener("click", () => {
    let temp = PassEye.src
    console.log(temp);
    let type = document.getElementById("su-pass")
    if (temp.includes( "images/eyeopen.svg") ) {
        PassEye.src = "images/eyeclose.svg"
        type.type = "password"
    }
    else {
        PassEye.src = "images/eyeopen.svg"
        type.type = "text"

    }
})
