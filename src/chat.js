let join = document.getElementById("join");
let create = document.getElementById("create");
let online = document.getElementById("online");
let offline = document.getElementById("offline");
let chatwindow = document.getElementById("chatwindow");
let chatroomwindow = document.getElementById("chat-inncont");
let leave = document.getElementById("leave");
let stop = document.getElementById("stop");


function addchatuser(massage) {
    let cont = document.createElement("div")
    cont.classList = "chatbubble-user"
    cont.innerText = massage;
    let mainCont = document.getElementById("inc-cont");
    mainCont.appendChild(cont);
    stop.addEventListener("click", () => {
        cont.remove()
    })
}
function addchatother(massage) {
    let cont = document.createElement("div")
    cont.classList = "chatbubble-other"
    cont.innerText = massage;
    let mainCont = document.getElementById("inc-cont");
    mainCont.appendChild(cont);
    stop.addEventListener("click", () => {
        cont.remove()
    })
}

let sendbtn = document.getElementById("send");
sendbtn.addEventListener("click", () => {
    let messege = chatWrite.value.trim();
    if (messege == '' || messege.length < 1) {
        chatWrite.value = ""
    }
    else {
        addchatuser(messege)
        chatWrite.value = ""
    }
})


create.addEventListener("click", () => {
    temp = online.style.display
    if (temp.includes("none")) {
    chatroomwindow.style.display = "none"
    chatwindow.style.display = "block"
    online.style.display = "block"
    offline.style.display = "none"
    }
})

leave.addEventListener("click", () => {
    chatroomwindow.style.display = "block"
    chatwindow.style.display = "none"
})

join.addEventListener("click", () => {
    temp = offline.style.display
    if (temp.includes("none")) {
        chatroomwindow.style.display = "none"
        chatwindow.style.display = "block"
    }
})
stop.addEventListener("click", () => {
    chatroomwindow.style.display = "block"
    chatwindow.style.display = "none"
    online.style.display = "none"
    offline.style.display = "block"
})