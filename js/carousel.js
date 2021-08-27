let genresArr;
const APIKey = 'api_key=948abbb99b89ebe76dbe27b039bf28a8';
const APIRequestPrefix = 'https://api.themoviedb.org/3/';

$(document).ready(function () {

    $('.carousel').carousel();
    setCarousel();

});

//function to set all the information needed on carousel
async function setCarousel() {

    await getGenres();
    await getNowPlayingMovies();
}

//function to make the request to api to get movies genres
function getGenres() {

    const genresEndpoint = '/genre/movie/list?';
    return fetch(APIRequestPrefix + genresEndpoint + APIKey + '&language=en-US')
        .then(response => {
            checkRequestError(response);
            return response.json();
        })
        .then(data => {
            genresArr = data.genres;
        })
        .catch(error => {
            alert("Something went wrong. Please try again!")
            console.log(error)});
}

//function to make the request to api to get now playing movies
async function getNowPlayingMovies() {

    const response = await fetch(APIRequestPrefix + 'movie/now_playing?' + APIKey + '&language=en-US&page=1');
    checkRequestError(response);
    const data = await response.json();

    await populateCarousel(data);

}

//function to display genres
function displayGenres(arr) {

    let strinToReturn = '- ';
    for (genre of arr) {
        for (let i = 0; i < genresArr.length; i++) {
            if (genre == genresArr[i].id && i < genresArr.length) {
                strinToReturn += genresArr[i].name + ' - ';
            }
        }
    }
    return strinToReturn;
}

//function to put the all the information needed on carousel
async function populateCarousel(data) {

    let count = 0;
    for (movie of data.results) {
        if (movie.vote_average > '7' && count < 3) {
            count++;
            $('#carousel__img' + count).css('background-image', 'url(' + 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + ')');
            $('.carousel-item__poster' + count).attr('src', 'https://image.tmdb.org/t/p/w500/' + movie.poster_path);
            $('.carousel-item__title' + count).html(movie.title);
            const dateYear = movie.release_date.split('-')[0];
            $('.carousel-item__date' + count).html(dateYear);
            $('.carousel-item__genres' + count).html(displayGenres(movie.genre_ids));
            $('.carousel-item__rating' + count).html(movie.vote_average);
            $('.carousel-item__overview' + count).html(movie.overview);
            let youtubeKey = await getYoutubeKey(movie.id);
            $('.carousel-item__trailer-button' + count).attr('onclick',`window.open('https://www.youtube.com/watch?v=${youtubeKey}?start=5&autoplay=1', '_blank')`);
        }
        if (count == 3) {
            return;
        }
    }
}

//function to get movie youtube key from api
async function getYoutubeKey(id) {

    const response = await fetch(APIRequestPrefix + `/movie/${id}/videos?` + APIKey);
    checkRequestError(response);
    let videoData = await response.json();
    let videoKey = await getVideo(videoData.results);

    return videoKey;
}

//function to get movie key to trailer
function getVideo(videoData) {
    for (video of videoData) {
        if (video.name.toLowerCase().includes('trailer')) {
            return video.key;
        }
    }
}