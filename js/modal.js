// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

    const modal = document.getElementById("modal-wrapper");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//funvtion to show movies details in modal
async function showDetails(id) {

    const modal = document.getElementById("modal-wrapper");

    modal.style.display = "block";

    for (movie of movies) {
        if (movie.id == id) {
            movieToShow = movie;
        }
    }

    const backgroundElement = document.querySelector('.modal-content__background');
    backgroundElement.setAttribute('style', `background-image: url('${imgPath + movieToShow.backdrop_path}')`);

    const posterElement = document.querySelector('.modal-content__poster');
    posterElement.src = imgPath + movieToShow.poster_path;

    const title = document.querySelector('.modal-content__title');
    title.innerHTML = movieToShow.title;

    const releaseYear = document.querySelector('.modal-content__year');
    releaseYear.innerHTML = movieToShow.release_date.split('-')[0];

    const genres = document.querySelector('.modal-content__genres');
    genres.innerHTML = displayGenres(movieToShow.genre_ids);

    const movieRating = document.querySelector('.modal-content__rating');
    movieRating.innerHTML = movieToShow.vote_average;

    const movieOverview = document.querySelector('.modal-content__overview');
    movieOverview.innerHTML = movieToShow.overview;

    const movieTrailerBtn = document.querySelector('.modal-content__trailer-button');
    let videoKey = await getYoutubeKey(movieToShow.id);

    movieTrailerBtn.setAttribute('onclick', `window.open('https://www.youtube.com/watch?v=${videoKey}?start=5&autoplay=1', '_blank')`);

}

//function to close modal on "X" button
function closeModal() {

    const modal = document.getElementById("modal-wrapper");
    modal.style.display = "none";
}
