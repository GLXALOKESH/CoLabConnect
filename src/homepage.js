function createTeamCard(teamName, companyName, membersCount) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'h-t-card';

    const teamNameDiv = document.createElement('div');
    teamNameDiv.className = 'h-t-txt h-t-teamName';
    teamNameDiv.textContent = teamName;

    const companyNameDiv = document.createElement('div');
    companyNameDiv.className = 'h-t-txt h-t-companyName';
    companyNameDiv.textContent = companyName;

    const membersCountDiv = document.createElement('div');
    membersCountDiv.className = 'h-t-txt h-t-membersCount';

    const img = document.createElement('img');
    img.src = 'images/teams2.svg';
    img.alt = '';
    img.height = 18;

    membersCountDiv.appendChild(img);
    membersCountDiv.appendChild(document.createTextNode(membersCount));

    cardDiv.appendChild(teamNameDiv);
    cardDiv.appendChild(companyNameDiv);
    cardDiv.appendChild(membersCountDiv);

    const container = document.getElementById("homepage-teams")
    container.appendChild(cardDiv)

    cardDiv.addEventListener("click", ()=>{
        window.location.href = "dashboard.html"
    })
}

// createTeamCard('Team Awesome', 'Awesome Inc.', 512, 'team-cards-container');

// create team button function
document.addEventListener("DOMContentLoaded", () => {
    const createBtn = document.getElementById("createbtn");
    createBtn.addEventListener("click", () => {
        const layer = document.getElementById("layer");
        layer.style.display = "block";
        let createbox = document.getElementById("createbtnbox")
        createbox.style.display = "flex";
    });
});

let createBoxCancle = document.getElementById("createBoxCancle")
let createBoxbtn = document.getElementById("createbtnboxBtn")

createBoxCancle.addEventListener("click", () => {
    const layer = document.getElementById("layer");
    layer.style.display = "none";
    let createbox = document.getElementById("createbtnbox")
    createbox.style.display = "none";
})

createBoxbtn.addEventListener("click", () => {
    let namefield = document.getElementById("name");
    let companyfield = document.getElementById("cname");
    if (namefield.value == "" || companyfield.value == ""){
        alert("invalid input")
    }
    else if(namefield.value.length < 3 || companyfield.value.length < 3){
        alert("values should be 3 char long")
    }
    else{
    createTeamCard(namefield.value, companyfield.value, 0);
    const layer = document.getElementById("layer");
    layer.style.display = "none";
    let createbox = document.getElementById("createbtnbox")
    createbox.style.display = "none";
    namefield.value ="";
    companyfield.value="";
}
})

//join team button function

let joinBoxCancle = document.getElementById("joinBoxCancle")
let joinBoxbtn = document.getElementById("joinbtnboxBtn")

document.addEventListener("DOMContentLoaded", () => {
    const joinBtn = document.getElementById("joinbtn");
    joinBtn.addEventListener("click", () => {
        const layer = document.getElementById("layer");
        layer.style.display = "block";
        let joinbox = document.getElementById("joinbtnbox")
        joinbox.style.display = "flex";
    });
});
joinBoxCancle.addEventListener("click", () => {
    const layer = document.getElementById("layer");
    layer.style.display = "none";
    let joinbox = document.getElementById("joinbtnbox")
    joinbox.style.display = "none";
})


//Sliding menu 
let profilePicNav = document.getElementById("h-n-profilelogo")
profilePicNav.addEventListener("click", ()=>{
    let slidebar = document.getElementById("h-slidebar")
    slidebar.style.left = "0"
    const layer = document.getElementById("layer");
        layer.style.display = "block";
})

let slidebarCross = document.getElementById("h-sl-cross")

slidebarCross.addEventListener("click",()=>{
    let slidebar = document.getElementById("h-slidebar")
    slidebar.style.left = "-1000px"
    const layer = document.getElementById("layer");
        layer.style.display = "none";
})

let sliderYourTeam = document.getElementById("h-sl-yourteam")

sliderYourTeam.addEventListener("click",()=>{
    let slidebar = document.getElementById("h-slidebar")
    slidebar.style.left = "-1000px"
    const layer = document.getElementById("layer");
        layer.style.display = "none";
})