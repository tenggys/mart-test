const box = document.querySelector(".box");
const openButton = document.querySelector(".open-button");
const boxContent = document.querySelector(".box-contet");
const closeButton = document.querySelector(".close-button");

openButton.addEventListener('click', () => {
    openButton.classList.add("disble");
    boxContent.classList.remove("disble");
})

closeButton.addEventListener('click', () => {
    openButton.classList.remove("disble");
    boxContent.classList.add("disble");
})