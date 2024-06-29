let PassEye = document.getElementById("pass-ey")
let ConfEye = document.getElementById("conf-ey")

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


ConfEye.addEventListener("click", () => {
    let temp = ConfEye.src
    console.log(temp);
    let type = document.getElementById("su-confpass")
    if (temp.includes( "images/eyeopen.svg") ) {
        ConfEye.src = "images/eyeclose.svg"
        type.type = "password"
    }
    else {
        ConfEye.src = "images/eyeopen.svg"
        type.type = "text"

    }
})
