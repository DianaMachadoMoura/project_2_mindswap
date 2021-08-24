var modal = document.getElementById("mmodal-wrapper");

// Get the modal



    var modal = document.getElementById("modal-wrapper");

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


async function showDetails(id) {

    var modal = document.getElementById("modal-wrapper");

    modal.style.display = "block";

    for (movie of movies) {
        if (movie.id == id) {
            movieToShow = movie;
        }
    }

    
    let posterElement = document.querySelector('.modal-content__poster');
    posterElement.src = imgPath + movieToShow.poster_path;
    
    let title = document.querySelector('.modal-content__title');
    title.innerHTML = movieToShow.title;

    let releaseYear = document.querySelector('.modal-content__year');
    releaseYear.innerHTML = movieToShow.release_date.split('-')[0]
    ;

    let genres = document.querySelector('.modal-content__genres');
    genres.innerHTML = displayGenres(movieToShow.genre_ids);

    let movieRating = document.querySelector('.modal-content__rating');
    movieRating.innerHTML = movieToShow.vote_average;
    
    let movieOverview = document.querySelector('.modal-content__overview');
    movieOverview.innerHTML = movieToShow.overview;

    let movieTrailerBtn = document.querySelector('#video-frame');
    let videoKey = await getYoutubeKey(movieToShow.id);

    movieTrailerBtn.setAttribute('src', `https://www.youtube.com/embed/${videoKey}`);

}

function closeModal() {

    var modal = document.getElementById("modal-wrapper");

    console.log("close");
    modal.style.display = "none";
}
