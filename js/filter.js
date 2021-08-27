const imgPath = `https://image.tmdb.org/t/p/w154`;
const discoverEndpoint = 'discover/movie?';
let pageNum = 1;
let movies = [];
let movieTabToShow;

//function that recives scroll logic
window.onscroll = function () {

    window.onscroll = function () {
        getStickyNavbar();
        infiniteScroll();
    };

    const navbar = document.getElementById("nav-wrapper");
    const sticky = navbar.offsetTop;
    function getStickyNavbar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
}

window.onload = () => {

    // populate the default selected movies' container (popular)
    movieTabToShow = getPopularMovies;
    movieTabToShow(1);

    // populating movies container according to the genre tab selected
    document.querySelectorAll('.filter-bar__list-item').forEach(item => {
        item.addEventListener('click', e => {

            setActiveContainer(e);
            setActiveTab(e);

            const wrapper = document.querySelector(".filter-bar__list");
            let elements = wrapper.children;
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('list-item__selected');
            }
            e.currentTarget.classList.add('list-item__selected');
        });
    })

    // populating movies container according to the search criteria
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', e => {
        setActiveContainer(e);
        setActiveTab(e);
    })

    // search filters container toggle
    const filterBtn = document.getElementById('filter-bar__btn');
    filterBtn.addEventListener('click', e => {
        const x = document.getElementById("filter-search-nav");
        const y = document.getElementById('filter-bar__btn');
        if (x.style.display === "none") {
            x.style.display = "flex";
            y.innerText = '❌';
        } else {
            x.style.display = "none";
            y.innerText = 'Filter';
        }
    })

    // create years dropdown menu for the movie filter search by year
    const max = new Date().getFullYear();
    min = max - 50;
    select = document.getElementById('filter-nav__movie-year');
    for (let i = max; i >= min; i--) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
    
    let searchInput = document.querySelector(".filter-bar__value");
    searchInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            setActiveContainer(event);
            searchByName(searchInput.value, 1);
        }
    });

    // function to user make a search by name that he write on a input box
    function searchByName(input) {

        let id = document.getElementById('searchInput_movies_container');
        id.innerHTML = '';
        let valueInput = input;
        let url = `https://api.themoviedb.org/3/search/movie?${APIKey}&query=${valueInput}`;

        requestAPI(url, id);
    }

    // function to make input box appear and desappear
    let searchIcon = document.querySelector('#filter-bar__icon');
    searchIcon.addEventListener('click', e => {

        if (searchInput.classList.contains('show-search-input')) {
            searchInput.classList.remove('show-search-input');
        } else {
            searchInput.classList.add('show-search-input');
        }

    });

}

// generic function to make api requests
function requestAPI(url, id) {

    let htmlStr = '';

    fetch(url)
        .then(results => results.json())
        .then(data => {

            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date;
                    if (data.results[i].release_date) {
                        date = data.results[i].release_date.split('-')[0];
                    }
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div class='responsive-flex' style='float:left;margin:40px 20px;height:230px;width:154px;'><img id='${data.results[i].id}' onclick='showDetails(this.id)' class="myBtn" src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            id.innerHTML += htmlStr;
        });
}

//function to make api request to get popular movies 
function getPopularMovies(page) {
    
    const moviesEndpoint = 'movie/popular?'
    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + moviesEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}`;
    let url2 = APIRequestPrefix + moviesEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}`;

    let id = document.getElementById('popular_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);

    console.log(url);
}

//function to make api request to get now playing movies 
function showNowPlayingMovies(page) {
    const moviesEndpoint = 'movie/now_playing?'
    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + moviesEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}`;
    let url2 = APIRequestPrefix + moviesEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}`;

    let id = document.getElementById('now_playing_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);

}

//function to make api request to get action movies 
function showActionMovies(page) {

    const genreEndpoint = '&with_genres=28'
    if (page === 1) {
        movies = [];
    }
    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    let url2 = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}` + genreEndpoint;

    let id = document.getElementById('action_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);
}

//function to make api request to get drama movies 
function showDramaMovies(page) {

    const genreEndpoint = '&with_genres=18'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    let url2 = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}` + genreEndpoint;

    let id = document.getElementById('drama_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);
}

//function to make api request to get comedy movies 
function showComedyMovies(page) {

    const genreEndpoint = '&with_genres=35'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    let url2 = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}` + genreEndpoint;

    let id = document.getElementById('comedy_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);
}

//function to make api request to get animation movies 
function showAnimationMovies(page) {

    const genreEndpoint = '&with_genres=16'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    let url2 = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}` + genreEndpoint;

    let id = document.getElementById('animation_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);
}

//function to make api request to get horror movies 
function showHorrorMovies(page) {
    
    const genreEndpoint = '&with_genres=27'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    let url2 = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}` + genreEndpoint;

    let id = document.getElementById('horror_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);
}

//function to make api request to get sci-fi movies 
function showSci_fiMovies(page) {

    const genreEndpoint = '&with_genres=878'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    let url2 = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}` + genreEndpoint;

    let id = document.getElementById('sci-fi_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);
}

//function to make api request to get thriller movies 
function showThrillerMovies(page) {

    const genreEndpoint = '&with_genres=53'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    let url2 = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page + 1}` + genreEndpoint;

    let id = document.getElementById('thriller_movies_container');

    requestAPI(url, id);
    requestAPI(url2, id);
}

//function to user can do a search with the parameters that he chose
function filter(page) {

    let id = document.getElementById('searchBtn_movies_container');
    const genreEndpoint = document.getElementById('filter-nav__genre').value;
    const sortByEndpoint = document.getElementById('filter-nav__sort').value;
    const releaseDate = document.getElementById('filter-nav__movie-year').value;
    const releaseDateEndPoint = `&primary_release_date.gte=${releaseDate}-01-01&primary_release_date.lte=${releaseDate}-12-31`;
    const voteAvrEndpoint = document.getElementById('filter-nav__rating').value;
    let url;

    if (pageNum === 1) {
        movies = [];
    }

    console.log("pageNum filter: " + pageNum);

    if (releaseDate) {
        url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US${sortByEndpoint}` + releaseDateEndPoint + voteAvrEndpoint + genreEndpoint + `&page=${pageNum}`;
    } else {
        url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US${sortByEndpoint}` + voteAvrEndpoint + genreEndpoint +`&page=${pageNum}`;
    }

    console.log(url);

    requestAPI(url, id);
    
}

// //function to reset filter parameters
// function resetFilter() {

//     const dropDownYear = document.getElementById("filter-nav__movie-year");
//     dropDownYear.selectedIndex = 0;

//     const dropDownGenre = document.getElementById("filter-nav__genre");
//     dropDownGenre.selectedIndex = 0;

//     const dropDownRating = document.getElementById("filter-nav__rating");
//     dropDownRating.selectedIndex = 0;

//     const dropDownSort = document.getElementById("filter-nav__sort");
//     dropDownSort.selectedIndex = 0;
// }

//function to do infinite scroll on window
let isScrolled = false;
const infiniteScroll = () => {
    if (window.scrollY > (document.body.offsetHeight - 100) && !isScrolled) {
        isScrolled = true;
        pageNum += 2;
        movieTabToShow(pageNum);
        console.log(movieTabToShow);
        setTimeout(() => {
            isScrolled = false;
        }, 1000);
    }
}

//function to set active container on tabs bar
function setActiveContainer(e) {

    let wrapper = document.getElementById("container_wrapper");
    let elements = wrapper.children;

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
        elements[i].classList.add('inactive');
    }

    let currTargetId = e.currentTarget.id;
    let container = document.getElementById(currTargetId + "_movies_container");
    container.classList.remove("inactive");
    container.classList.add("active");
    container.innerHTML = '';
}

//function to set active tab bar
function setActiveTab(e) {

    switch (e.currentTarget.id) {
        case 'popular':
            pageNum = 1;
            movieTabToShow = getPopularMovies;
            getPopularMovies(pageNum);
            break;
        case 'now_playing':
            pageNum = 1;
            movieTabToShow = showNowPlayingMovies;
            showNowPlayingMovies(pageNum);
            break;
        case 'action':
            pageNum = 1;
            movieTabToShow = showActionMovies;
            showActionMovies(pageNum);
            break;
        case 'drama':
            pageNum = 1;
            movieTabToShow = showDramaMovies;
            showDramaMovies(pageNum);
            break;
        case 'comedy':
            pageNum = 1;
            movieTabToShow = showComedyMovies;
            showComedyMovies(pageNum);
            break;
        case 'animation':
            pageNum = 1;
            movieTabToShow = showAnimationMovies;
            showAnimationMovies(pageNum);            
            break;
        case 'horror':
            pageNum = 1;
            movieTabToShow = showHorrorMovies;
            showHorrorMovies(pageNum);
            break;
        case 'sci-fi':
            pageNum = 1;
            movieTabToShow = showSci_fiMovies;
            showSci_fiMovies(pageNum);
            break;
        case 'thriller':
            pageNum = 1;
            movieTabToShow = showThrillerMovies;
            showThrillerMovies(pageNum);            break;
        case 'searchBtn':
            pageNum = 1;
            movieTabToShow = filter;
            const searchResultsContainer = document.getElementById('searchBtn_movies_container');
            searchResultsContainer.innerHTML = '';
            filter(pageNum);
            break;
        default:
            console.log("errooooooooooooo")
    }
}

//functiion to make the navbar sticky
function myFunction(sticky, navbar) {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//function to show a randomize movie in a modal
async function randomize(page) {

    const id = document.getElementById('searchBtn_movies_container');
    const genreEndpoint = document.getElementById('filter-nav__genre').value;
    const sortByEndpoint = document.getElementById('filter-nav__sort').value;
    const releaseDate = document.getElementById('filter-nav__movie-year').value;
    const releaseDateEndPoint = `&primary_release_date.gte=${releaseDate}-01-01&primary_release_date.lte=${releaseDate}-12-31`;
    const voteAvrEndpoint = document.getElementById('filter-nav__rating').value;

    if (page === 1) {
        movies = [];
    }

    let url;

    if (releaseDate) {
        url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US${sortByEndpoint}&page='${page}` + releaseDateEndPoint + voteAvrEndpoint + genreEndpoint;
    } else {
        url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US${sortByEndpoint}&page='${page}` + voteAvrEndpoint + genreEndpoint;
    }
    
    const response = await fetch(url)
    let data = await response.json();
    let randomId = Math.floor(Math.random() * (data.results.length - 0 + 1)) + 0;
    let videoKey = await getYoutubeKey(data.results[randomId].id);

    (() => {

        let randomMovieToShow = data.results[randomId];

        const modal = document.getElementById("modal-wrapper");

        modal.style.display = "block";

        const posterElement = document.querySelector('.modal-content__poster');
        posterElement.src = imgPath + randomMovieToShow.poster_path;

        const backgroundElement = document.querySelector('.modal-content__background');
        backgroundElement.setAttribute('style', `background-image: url('${imgPath + randomMovieToShow.backdrop_path}')`);

        const title = document.querySelector('.modal-content__title');
        title.innerHTML = randomMovieToShow.title;

        const releaseYear = document.querySelector('.modal-content__year');
        releaseYear.innerHTML = randomMovieToShow.release_date.split('-')[0];

        const genres = document.querySelector('.modal-content__genres');
        genres.innerHTML = displayGenres(randomMovieToShow.genre_ids);

        const movieRating = document.querySelector('.modal-content__rating');
        movieRating.innerHTML = randomMovieToShow.vote_average;

        const movieOverview = document.querySelector('.modal-content__overview');
        movieOverview.innerHTML = randomMovieToShow.overview;

        const movieTrailerBtn = document.querySelector('.modal-content__trailer-button');

        movieTrailerBtn.setAttribute('onclick', `window.open('https://www.youtube.com/watch?v=${videoKey}?start=5&autoplay=1', '_blank')`);
    }) ();

}

function openMenu() {

    let navWrapper = document.querySelector('#nav-wrapper');
    navWrapper.classList.add('nav-active');
    let closeButton = document.querySelector('.hamburger-button-close');
    closeButton.style.display = 'flex';
}

function closeMenu() {
    
    let navWrapper = document.querySelector('#nav-wrapper');
    navWrapper.classList.remove('nav-active');
    let closeButton = document.querySelector('.hamburger-button-close');
    closeButton.style.display = 'none';
}