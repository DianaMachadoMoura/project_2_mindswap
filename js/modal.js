var modal = document.getElementById("mmodal-wrapper");

// Get the modal
windows.onload = () => {


    var modal = document.getElementById("modal-wrapper");

    console.log(modal);

    // // Get the button that opens the modal
    // var btn = document.querySelectorAll(".myBtn");

    // Get the <span> element that closes the modal

    // When the user clicks the button, open the modal 

    // When the user clicks on <span> (x), close the modal

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function showDetails(id) {

    var modal = document.getElementById("modal-wrapper");

    modal.style.display = "block";

    for (movie of movies) {
        if (movie.id == id) {
            movieToShow = movie;
        }
    }
    console.log(movieToShow.title);
}

function closeModal() {

    var modal = document.getElementById("modal-wrapper");

    console.log("close");
    modal.style.display = "none";
}
