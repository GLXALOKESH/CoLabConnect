let delTeamBtn = document.getElementById("dlteam")
let delTeamBtnbool = false
let chTeamBtn = document.getElementById("chtname")
let chCompBtn = document.getElementById("chcname")
let passConf = document.getElementById("pass-conf")
let chTeamBox = document.getElementById("st-ch-name")
let chTeamBoxbool = false
let ChcompBox = document.getElementById("st-com-name")
let chcompBoxbool = false
let wrong = document.getElementById("lg-wrong")
let cut = document.getElementById("cancle-passconf")
let confSubmit = document.getElementById("p-conf-sub")
let confSubmitbool = false;
let changeNameCancle = document.getElementById("changeNameCancle");
let changeCompanyCancle = document.getElementById("changeCompanyCancle");
let layer = document.getElementById("layer");
//delete team btn function
delTeamBtn.addEventListener("click", () => {
    passConf.style.display = "inline-block"
    delTeamBtnbool = true
    layer.style.display = "block"

})
//hide passconf box
cut.addEventListener("click", () => {
    passConf.style.display = "none"
    if (delTeamBtnbool) {
        delTeamBtnbool = false
    }
    else if (chTeamBoxbool) {
        chTeamBoxbool = false
    }
    else {
        chcompBoxbool = false
    }
    layer.style.display = "none"
})
//pass conf submit btn
confSubmit.addEventListener("click", () => {
    let passinp = document.getElementById("su-pass");
    let temp = passinp.value
    if (temp == '') {
        wrong.style.visibility = "visible"

        alert("invalid password");
    }
    else {
        wrong.style.visibility = "hidden"
        passinp.value = ""
        passConf.style.display = "none"
        if (delTeamBtnbool) {
            delTeamBtnbool = false
            confSubmitbool = false
            layer.style.display = "none"
        }
        else if (chTeamBoxbool) {
            // chTeamBoxbool = false
            confSubmitbool = true
            layer.style.display = "none"

            logic()
        }
        else {
            // chcompBoxbool = false
            confSubmitbool = true
            layer.style.display = "none"

            logic()
        }

    }
})
//change team name btn function
chTeamBtn.addEventListener("click", () => {
    passConf.style.display = "inline-block"
    chTeamBoxbool = true
    layer.style.display = "block"


})

//change company name btn function
chCompBtn.addEventListener("click", () => {
    passConf.style.display = "inline-block"
    chcompBoxbool = true
    layer.style.display = "block"


})

//logic to open the boxes
function logic() {
    if (chTeamBoxbool && confSubmitbool) {
        chTeamBox.style.display = "block"
        layer.style.display = "block"


    }
    else if (chcompBoxbool && confSubmitbool) {
        ChcompBox.style.display = "block"
        layer.style.display = "block"

    }

}

//cancle in change team name box
changeNameCancle.addEventListener("click", () => {
    chTeamBox.style.display = "none"
    chTeamBoxbool = false
    confSubmitbool = false

    layer.style.display = "none"


})

//cancle in change company name box
changeCompanyCancle.addEventListener("click", () => {
    ChcompBox.style.display = "none"
    chcompBoxbool = false
    confSubmitbool = false
    layer.style.display = "none"


})

//submit in change team name box

let submitChTm = document.getElementById("c-tm-sub");

submitChTm.addEventListener("click", () => {
    let inp = document.getElementById("ch-name");
    let temp = inp.value
    if (temp == '') {
        inp.value = ""
        alert("invalid name");
    }
    else {
        inp.value = ""
        chTeamBox.style.display = "none"
        chTeamBoxbool = false
        confSubmitbool = false
        layer.style.display = "none"

    }
})


//submit in change company name box
let submitChCom = document.getElementById("c-com-sub");

submitChCom.addEventListener("click", () => {
    let inp = document.getElementById("ch-com");
    let temp = inp.value
    if (temp == '') {
        inp.value = ""

        alert("invalid name");
    }
    else {
        inp.value = ""
        ChcompBox.style.display = "none"
        chcompBoxbool = false
        confSubmitbool = false
        layer.style.display = "none"

    }
})


//Sliding menu 
let profilePicNav = document.getElementById("h-n-profilelogo")
profilePicNav.addEventListener("click", () => {
    let slidebar = document.getElementById("h-slidebar")
    slidebar.style.left = "0"
    const layer = document.getElementById("layer");
    layer.style.display = "block";
})

let slidebarCross = document.getElementById("h-sl-cross")

slidebarCross.addEventListener("click", () => {
    let slidebar = document.getElementById("h-slidebar")
    slidebar.style.left = "-1000px"
    const layer = document.getElementById("layer");
    layer.style.display = "none";
})


//pass eye on off
let PassEye = document.getElementById("pass-ey")


PassEye.addEventListener("click", () => {
    let temp = PassEye.src
    let type = document.getElementById("su-pass")
    if (temp.includes("images/eyeopen.svg")) {
        PassEye.src = "images/eyeclose.svg"
        type.type = "password"
    }
    else {
        PassEye.src = "images/eyeopen.svg"
        type.type = "text"

    }
})