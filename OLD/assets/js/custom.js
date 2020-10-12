var modal = "";
var currentModal ="";
document.addEventListener("DOMContentLoaded", function (){
    // wait until the DOM is loaded before selecting the elements
    modal = document.getElementById("baseModal");
});


function displayModal(name){
    // Get the modal
    modal.style.display = "flex";
    currentModal = document.getElementById(name + 'Modal')
    currentModal.style.display = "flex"
}
function closeModal(){
    modal.style.display = "none";
    currentModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        currentModal.style.display = "none";
    }
}

