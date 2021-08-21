let APIkey = 'api_key=948abbb99b89ebe76dbe27b039bf28a8';
let pageNum = 1;
let movies = [];

//let filter; // TODO add filters' logic

const getPopularMovies = (page) => {

    const popularMoviesEndpoint = 'movie/popular?'

    if (page === 1) { 
        movies = [];
     }
    
    let url = APIRequestPrefix + popularMoviesEndpoint + APIkey + `&language=en-US&sort_by=popularity.desc&page=${page}`;

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('movies_container').innerHTML += htmlStr;
        })
}

let isScrolled = false;
const infiniteScroll = () => {
    if (window.scrollY > (document.body.offsetHeight - 100) && !isScrolled) {
        isScrolled = true;
        pageNum++;
        getPopularMovies(pageNum);
        setTimeout(() => {
            isScrolled = false;
        }, 1000);
    }
}

window.onscroll = function () { 
    infiniteScroll();
}

window.onload = () => {
    getPopularMovies(pageNum);
}