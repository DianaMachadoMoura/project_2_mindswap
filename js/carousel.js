$(document).ready(function () {

    $('.carousel').carousel()

    const APIKey = 'api_key=948abbb99b89ebe76dbe27b039bf28a8';

    
    fetch("https://api.themoviedb.org/3/discover/movie?"+APIKey +"&sort_by=popularity.desc")
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data.results[0].backdrop_path;
        })
        .then(result => {
            console.log('https://image.tmdb.org/t/p/w500/' + result);
            $('<img/>').appendTo('#header');
            // $('.carousel-item').css('background-image', 'url(' + 'https://image.tmdb.org/t/p/w500/' + result + ')');

            // $('myObject').css('background-image', 'url(' + imageUrl + ')');

            
        })
        .catch(err => {
            console.error(err);
        });

    // SEARCHING 'NOW PLAYING' MOVIES
    fetch('https://api.themoviedb.org/3/movie/now_playing?'+ APIKey +'&language=en-US&page=1')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let count = 0;
        data.results.forEach(movie => {
            if(movie.vote_average > '7' && count < 3) {
                count++;
                $('#carousel__img' + count).css('background-image', 'url(' + 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + ')');   
                $('.carousel-item__poster' + count).attr('src', 'https://image.tmdb.org/t/p/w500/' + movie.poster_path);
            }
            if(count ==3) {
                return
            }  
        })
    })
})