// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openModal() {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
        document.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

function closeModal() {
    modal.style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector('.modal-content').style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}
