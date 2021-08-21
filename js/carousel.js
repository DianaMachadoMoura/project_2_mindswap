$(document).ready(function () {

    $('.carousel').carousel();

    setCarousel();

});

let genresArr;
const APIKey = 'api_key=948abbb99b89ebe76dbe27b039bf28a8';
const APIRequestPrefix = 'https://api.themoviedb.org/3/';

async function setCarousel() {

    await getGenres();

    // SEARCHING 'NOW PLAYING' MOVIES
    let dataNowPlayingMovies = await getNowPlayingMovies();
}

function getGenres() {
    const getGenres = '/genre/movie/list?';
    return fetch(APIRequestPrefix + getGenres + APIKey + '&language=en-US')
        .then(response => {
            return response.json();
        })
        .then(data => {
            genresArr = data.genres;
        })
        .catch(error => console.log(error));
}

async function getNowPlayingMovies() {

    const response = await fetch(APIRequestPrefix + 'movie/now_playing?' + APIKey + '&language=en-US&page=1');
    const data = await response.json();

    await populateCarousel(data);

}

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

async function populateCarousel(data) {

    let count = 0;
    for (movie of data.results) {
        if (movie.vote_average > '7' && count < 3) {
            count++;
            $('#carousel__img' + count).css('background-image', 'url(' + 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + ')');
            $('.carousel-item__poster' + count).attr('src', 'https://image.tmdb.org/t/p/w500/' + movie.poster_path);
            $('.carousel-item__title' + count).html(movie.original_title);
            const dateYear = movie.release_date.split('-')[0];
            $('.carousel-item__date' + count).html(dateYear);
            $('.carousel-item__genres' + count).html(displayGenres(movie.genre_ids));
            $('.carousel-item__rating' + count).html(movie.vote_average);
            $('.carousel-item__overview' + count).html(movie.overview);
            let youtubeKey = await getYoutubeKey(movie.id);
            console.log(youtubeKey);
            $('.carousel-item__trailer-button' + count).attr('onclick',`window.open('https://www.youtube.com/watch?v=${youtubeKey}?start=5&autoplay=1', '_blank')`);
        }
        if (count == 3) {
            return;
        }
    }
}

async function getYoutubeKey(id) {

    const response = await fetch(APIRequestPrefix + `/movie/${id}/videos?` + APIKey)
    let videoData = await response.json();
    let videoKey = await getVideo(videoData.results);

    return videoKey;
}

function getVideo(videoData) {
    for (video of videoData) {
        if (video.name.toLowerCase().includes('trailer')) {
            // console.log(video.key)
            return video.key;
        }
    }
}