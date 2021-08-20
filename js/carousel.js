$(document).ready(function () {

    const APIKey = 'api_key=948abbb99b89ebe76dbe27b039bf28a8';
    const APIRequestPrefix = 'https://api.themoviedb.org/3/';
    const genresArr = {
        "genres": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 99,
                "name": "Documentary"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10751,
                "name": "Family"
            },
            {
                "id": 14,
                "name": "Fantasy"
            },
            {
                "id": 36,
                "name": "History"
            },
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 10402,
                "name": "Music"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 10749,
                "name": "Romance"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            },
            {
                "id": 10770,
                "name": "TV Movie"
            },
            {
                "id": 53,
                "name": "Thriller"
            },
            {
                "id": 10752,
                "name": "War"
            },
            {
                "id": 37,
                "name": "Western"
            }]
    };

    $('.carousel').carousel()

    // SEARCHING 'NOW PLAYING' MOVIES
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
                }
                if (count == 3) {
                    return
                }
            })
        })

})

function getGenres(APIRequestPrefix, APIKey) {
    const getGenres = '/genre/movie/list?';
    fetch(APIRequestPrefix + getGenres + APIKey + '&language=en-US')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
}

function displayGenres(genresArr, arr) {
    let strinToReturn = '- ';
    for(genre of arr) {
        for(let i=0; i < genresArr.genres.length; i++) {
            if(genre == genresArr.genres[i].id && i < genresArr.genres.length) {
                console.log(genresArr.genres[i].id, 'genre id');
                strinToReturn += genresArr.genres[i].name + ' - ';
            } 
        }  
    }
    return strinToReturn;
}




