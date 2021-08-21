let APIkey = 'api_key=948abbb99b89ebe76dbe27b039bf28a8';

// we always start at the first page of data results
let pageNum = 1;
// So we can store our movie details when they’re loaded
// and not have to call the API every time
let movies = [];
// for our example we’ll just use movies from 2020
// but you can make this a variable that the user
// can change
let year = 2020;

const getMoviesByYear = (year, page) => {
    // when the user changes genres or year, we need to clear
    // the movies array out instead of just filtering
    // so it doesn’t add the same movie twice
    if (page === 1) { 
        movies = [];
     }
    // url to the API
    let url = `https://api.themoviedb.org/3/discover/movie?${APIkey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=${year}&page=${page}`;
    
    // we’re going to build some HTML for the output
    let htmlStr = '';
    // the root path to the image files
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
                    htmlStr += `<div style='float:left;margin:30px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;'>${title}</p><p>${date}</p></div></div>`;
                }
            }
            document.getElementById('output').innerHTML += htmlStr;
        })
}

// this event-handler checks if the scrollbar is at the
// bottom of the page and if it is it fetches another
// set of records
let isScrolled = false;
const infiniteScroll = () => {
    // End of the document reached?
    if (window.scrollY > (document.body.offsetHeight - 100) && !isScrolled) {
        // Set “isScrolled” to “true” to prevent further execution
        isScrolled = true;
        // Your code goes here
        pageNum++;
        getMoviesByYear(year, pageNum);
        // After 1 second the “isScrolled” will be set to “false” to allow the code inside the “if” statement to be executed again
        setTimeout(() => {
            isScrolled = false;
        }, 1000);
    }
}

// bind the infinite scroll to all needed events
window.onscroll = function () { infiniteScroll(); }
// everything starts here!
window.onload = () => {
    getMoviesByYear(year, pageNum);
}