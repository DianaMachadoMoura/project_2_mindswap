$(document).ready(function () {

    $('.carousel').carousel()
    const APIKey = 'api_key=948abbb99b89ebe76dbe27b039bf28a8';
    const APIRequestPrefix = 'https://api.themoviedb.org/3/';
    let genresArr;

    getGenres(APIRequestPrefix, APIKey);

    console.log(genresArr);
    // SEARCHING 'NOW PLAYING' MOVIES
    getNowPlayingMovies(APIRequestPrefix, APIKey, genresArr); // undefined

});

// GET MOVIE GENRES
function getGenres(APIRequestPrefix, APIKey) {
    const getGenres = '/genre/movie/list?';
    fetch(APIRequestPrefix + getGenres + APIKey + '&language=en-US')
        .then(response => {
            return response.json();
        })
        .then(data => {
            genresArr = data.genres;
        })
        .catch(error => console.log(error));
}

function getNowPlayingMovies(APIRequestPrefix, APIKey, genresArr) {

    fetch(APIRequestPrefix + 'movie/now_playing?' + APIKey + '&language=en-US&page=1')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let count = 0;
            data.results.forEach(movie => {
                if (movie.vote_average > '7' && count < 3) {
                    count++;
                    $('#carousel__img' + count).css('background-image', 'url(' + 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + ')');
                    $('.carousel-item__poster' + count).attr('src', 'https://image.tmdb.org/t/p/w500/' + movie.poster_path);
                    $('.carousel-item__title' + count).html(movie.original_title);
                    const dateYear = movie.release_date.split('-')[0];
                    $('.carousel-item__date' + count).html(dateYear);
                    $('.carousel-item__genres' + count).html(displayGenres(genresArr, movie.genre_ids));
                    $('.carousel-item__rating' + count).html(movie.vote_average);
                    $('.carousel-item__overview' + count).html(movie.overview);
                    const youtubeKey = getYoutubeKey(movie.id, APIRequestPrefix, APIKey);
                    console.log(youtubeKey);
                    $('.carousel-item__trailer-button' + count).attr('onclick',);
                }
                if (count == 3) {
                    return;
                }
            });
        })
        .catch(error => console.log(error));
}

function displayGenres(genresArr, arr) {
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

function getYoutubeKey(id, APIRequestPrefix, APIKey) {
    fetch(APIRequestPrefix + `/movie/${id}/videos?` + APIKey)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (video of data.results) {
                if (video.name.toLowerCase().includes('trailer')) {
                    console.log(video.key)
                    return video.key;
                }
            }
        })
        .catch(error => console.log(error));
}