const openModalButton = document.querySelector("#open-modal");
const closemodalButton = document.querySelector("close-modal")

const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggeleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};   


 
[openModalButton, closemodalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggeleModal());


})


function closeModal(){
    document.getElementById("close-modal").style.display = "none"
}


    








 