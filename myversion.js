let currentBackgroundIndex = 0;
let currentOutfitIndex = 0;
const backgrounds = ["B1.jpg", "B2.jpg", "b3.png"];
const outfits = ["outfit1.png", "outfit2.png", "outfit3.png"];
let draggedAcc = null;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('avatar').addEventListener('change', updateAvatar); 
});
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('Background-Music');
    audio.play();
});

function updateBackgroundPreview() { //loop through the backgrounds array when the button is clicked. 
    const backgroundPreview = document.getElementById('background-preview');
    if (backgroundPreview) {
        backgroundPreview.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    }
}

function changeBackground() { //loop through the backgrounds array when the button is clicked. 
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    const backgroundContainer = document.getElementById('background-container');
    if (backgroundContainer) {
        backgroundContainer.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    }
    updateBackgroundPreview();
}

function downloadAvatar() { //downloads the avatar
    const avatar = document.getElementById('avatar-img');
    const link = document.createElement('a');
    if (avatar && avatar.src) {
        link.href = avatar.src;
        link.download = 'avatar.png';
        link.click();
    }
}

function downloadComposition() { //downloads the composition onto the clients computer.
    const avatarCompositionContainer = document.getElementById('avatar-composition-container');

    html2canvas(avatarCompositionContainer).then(function (canvas) {
        const compositionDataURL = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = compositionDataURL;
        link.download = 'composition.png';

        link.click();
    });
}


function toggleDarkMode() { //toggles dark mode style in stylesheet.
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function updateAvatar() {
    const selectedAvatar = document.getElementById("avatar").value;
    const avatarImg = document.getElementById("avatar-img");
    if (avatarImg) {
        avatarImg.src = selectedAvatar;
    }
}

function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    draggedAcc = event.target;
    // Add a class to the dragged accessory for styling during dragging
    draggedAcc.classList.add('dragged-accessory');
}

function dragEnd() {
    // Remove the class after the drag operation ends
    draggedAcc.classList.remove('dragged-accessory');
}

function drop(event) {
    event.preventDefault();
    const avatarPreview = document.getElementById('avatar-preview');

    const rect = avatarPreview.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if there's already a accessory with the same ID in the container
    const existingAcc = avatarPreview.querySelector(`.${draggedAcc.id}`);

    if (existingAcc) {
        // If a accessory with the same ID is present, update its position
        existingAcc.style.left = x + "px";
        existingAcc.style.top = y + "px";
    } else {
        // If no accessory with the same ID is present, clone the dragged accessory and add it to the container
        const clonedAcc = draggedAcc.cloneNode(true);

        clonedAcc.style.position = "absolute";
        clonedAcc.style.left = x + "px";
        clonedAcc.style.top = y + "px";
        clonedAcc.style.zIndex = "1"; // Set a higher z-index to ensure the accessory is on top
        clonedAcc.classList.add("draggable");
        clonedAcc.classList.remove('dragged-accessory'); // Remove the class added for dragging

        avatarPreview.appendChild(clonedAcc);
    }
}
function drag(event) {
    draggedAcc = event.target;
}
function drop(event) {
    event.preventDefault();
    const avatarPreview = document.getElementById('avatar-preview');

    const rect = avatarPreview.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if there's already a accessory with the same ID in the container
    const existingAcc = avatarPreview.querySelector(`#${draggedAcc.id}`);

    if (existingAcc) {
        // If a accessory with the same ID is present, update its position
        existingAcc.style.left = x + "px";
        existingAcc.style.top = y + "px";
    } else {
        // If no accessory with the same ID is present, clone the dragged accessory and add it to the container
        const clonedAcc = draggedAcc.cloneNode(true);

        clonedAcc.style.position = "absolute";
        clonedAcc.style.left = x + "px";
        clonedAcc.style.top = y + "px";
        clonedAcc.style.zIndex = "1"; // Set a higher z-index to ensure the accessory is on top
        clonedAcc.classList.add("draggable");

        avatarPreview.appendChild(clonedAcc);
    }
}
function removeAcc() {
    const avatarPreview = document.getElementById('avatar-preview');
    const existingAcc = avatarPreview.querySelector('.draggable');
    
    if (existingAcc) {
        avatarPreview.removeChild(existingAcc);
    }
}
