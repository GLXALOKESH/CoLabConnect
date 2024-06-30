//add player card
function createContactCard(profilePicSrc, personName, personRole) {
    // Create the main container div
    const card = document.createElement('div');
    card.classList.add('inc-cont-card');

    // Create the first inner div
    const inContIn0 = document.createElement('div');
    inContIn0.classList.add('in-cont-in-0');

    // Create the profile logo div and img
    const profileLogo = document.createElement('div');
    profileLogo.classList.add('in-cont-profilelogo');
    const profileImg = document.createElement('img');
    profileImg.src = profilePicSrc;
    profileImg.alt = '';

    // Append the image to the profile logo div
    profileLogo.appendChild(profileImg);
    // Append the profile logo div to the first inner div
    inContIn0.appendChild(profileLogo);

    // Create the second inner div
    const inContIn1 = document.createElement('div');
    inContIn1.classList.add('in-cont-in-1');

    // Create the name and role divs
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('ds-in-c-name');
    nameDiv.textContent = personName;
    const roleDiv = document.createElement('div');
    roleDiv.classList.add('ds-in-c-role');
    roleDiv.textContent = personRole;

    // Append name and role divs to the second inner div
    inContIn1.appendChild(nameDiv);
    inContIn1.appendChild(roleDiv);

    // Create the third inner div
    const inContIn2 = document.createElement('div');
    inContIn2.classList.add('in-cont-in-2');

    // Create the remove button img
    const removeImg = document.createElement('img');
    removeImg.src = 'images/removeperson.svg';
    removeImg.alt = '';

    // Append the remove button img to the third inner div
    inContIn2.appendChild(removeImg);

    // Append all inner divs to the main container div
    card.appendChild(inContIn0);
    card.appendChild(inContIn1);
    card.appendChild(inContIn2);

    const container = document.querySelector('.inc-cont');
    container.appendChild(card);
}

// Example usage
createContactCard('images/profilepic.jpg', 'Person Name', 'Software Developer', );



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