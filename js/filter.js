const imgPath = `https://image.tmdb.org/t/p/w154`;
let pageNum = 1;
let movies = [];
let movieTabToShow;

//generic function to make api requests
function requestAPI(url, id) {
    let htmlStr = '';

    fetch(url)
        .then(results => results.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                console.log(data.results.length, 'lenght request');
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div class='responsive-flex' style='float:left;margin:40px 20px;height:230px;width:154px;'><img id='${data.results[i].id}' onclick='showDetails(this.id)' class="myBtn" src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            id.innerHTML += htmlStr;
        })
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
    console.log(page);
    requestAPI(url2, id);
    console.log(page + 1);
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
    const discoverEndpoint = 'discover/movie?';
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
    const discoverEndpoint = 'discover/movie?';
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
    const discoverEndpoint = 'discover/movie?';
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
    const discoverEndpoint = 'discover/movie?';
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
    const discoverEndpoint = 'discover/movie?';
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
    const discoverEndpoint = 'discover/movie?';
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
    const discoverEndpoint = 'discover/movie?';
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

    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = document.getElementById('filter-nav__genre').value;
    const sortByEndpoint = document.getElementById('filter-nav__sort').value;
    const releaseDate = document.getElementById('filter-nav__movie-year').value;
    const releaseDateEndPoint = `&primary_release_date.gte=${releaseDate}-01-01&primary_release_date.lte=${releaseDate}-12-31`;
    const voteAvrEndpoint = document.getElementById('filter-nav__rating').value;

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US${sortByEndpoint}&page='${page}` + releaseDateEndPoint + voteAvrEndpoint + genreEndpoint;

    requestAPI(url, id);

    resetFilter();
}

//function to reset filter parameters
function resetFilter() {
    var dropDownYear = document.getElementById("filter-nav__movie-year");
    dropDownYear.selectedIndex = 0;

    var dropDownGenre = document.getElementById("filter-nav__genre");
    dropDownGenre.selectedIndex = 0;

    var dropDownRating = document.getElementById("filter-nav__rating");
    dropDownRating.selectedIndex = 0;

    var dropDownSort = document.getElementById("filter-nav__sort");
    dropDownSort.selectedIndex = 0;
}

//function to do infinite scroll on window
let isScrolled = false;
const infiniteScroll = () => {
    if (window.scrollY > (document.body.offsetHeight - 100) && !isScrolled) {
        isScrolled = true;
        pageNum += 2;
        movieTabToShow(pageNum);
        setTimeout(() => {
            isScrolled = false;
        }, 1000);
    }
}

//function to set active container on tabs bar
function setActiveContainer(e) {
    let wrapper = document.getElementById("container_wrapper");
    let elements = wrapper.children;

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
        elements[i].classList.add('inactive');
    }

    let currTargetId = e.currentTarget.id;
    let container = document.getElementById(currTargetId + "_movies_container");
    container.classList.remove("inactive");
    container.classList.add("active");
}

//function to set active tab bar
function setActiveTab(e) {
    switch (e.currentTarget.id) {
        case 'popular':
            pageNum = 1;
            getPopularMovies(pageNum);
            movieTabToShow = getPopularMovies;

            break;
        case 'now_playing':
            pageNum = 1;
            showNowPlayingMovies(pageNum);
            movieTabToShow = showNowPlayingMovies;

            break;
        case 'action':
            pageNum = 1;
            showActionMovies(pageNum);
            movieTabToShow = showActionMovies;
            break;
        case 'drama':
            pageNum = 1;
            showDramaMovies(pageNum);
            movieTabToShow = showDramaMovies;
            break;
        case 'comedy':
            pageNum = 1;
            showComedyMovies(pageNum);
            movieTabToShow = showComedyMovies;
            break;
        case 'animation':
            pageNum = 1;
            showAnimationMovies(pageNum);
            movieTabToShow = showAnimationMovies;
            break;
        case 'horror':
            pageNum = 1;
            showHorrorMovies(pageNum);
            movieTabToShow = showHorrorMovies;
            break;
        case 'sci-fi':
            pageNum = 1;
            showSci_fiMovies(pageNum);
            movieTabToShow = showSci_fiMovies;
            break;
        case 'thriller':
            pageNum = 1;
            showThrillerMovies(pageNum);
            movieTabToShow = showThrillerMovies;
            break;
        case 'searchBtn':
            console.log('heyyyy', 'search_case')
            pageNum = 1;
            let id = document.getElementById('searchBtn_movies_container');
            id.innerHTML = '';
            filter(pageNum);
            movieTabToShow = filter;
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

//function that recives scroll logic
window.onscroll = function () {

    window.onscroll = function () {
        myFunction();
        infiniteScroll();
    };

    var navbar = document.getElementById("nav-wrapper");
    var sticky = navbar.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
}

//function to show a randomize movie in a modal
async function randomize(page) {
    let id = document.getElementById('searchBtn_movies_container');

    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = document.getElementById('filter-nav__genre').value;
    const sortByEndpoint = document.getElementById('filter-nav__sort').value;
    const releaseDate = document.getElementById('filter-nav__movie-year').value;
    const releaseDateEndPoint = `&primary_release_date.gte=${releaseDate}-01-01&primary_release_date.lte=${releaseDate}-12-31`;
    const voteAvrEndpoint = document.getElementById('filter-nav__rating').value;

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US${sortByEndpoint}&page='${page}` + releaseDateEndPoint + voteAvrEndpoint + genreEndpoint;

    const response = await fetch(url)
    let data = await response.json();
    let randomId = Math.floor(Math.random() * (data.results.length - 0 + 1)) + 0;
    let videoKey = await getYoutubeKey(data.results[randomId].id);

    let showRandomMovie = await (() => {

        let randomMovieToShow = data.results[randomId];

        var modal = document.getElementById("modal-wrapper");

        modal.style.display = "block";

        let posterElement = document.querySelector('.modal-content__poster');
        posterElement.src = imgPath + randomMovieToShow.poster_path;

        let backgroundElement = document.querySelector('.modal-content__background');
        backgroundElement.setAttribute('style', `background-image: url('${imgPath + randomMovieToShow.backdrop_path}')`);


        let title = document.querySelector('.modal-content__title');
        title.innerHTML = randomMovieToShow.title;

        let releaseYear = document.querySelector('.modal-content__year');
        releaseYear.innerHTML = randomMovieToShow.release_date.split('-')[0];

        let genres = document.querySelector('.modal-content__genres');
        genres.innerHTML = displayGenres(randomMovieToShow.genre_ids);

        let movieRating = document.querySelector('.modal-content__rating');
        movieRating.innerHTML = randomMovieToShow.vote_average;

        let movieOverview = document.querySelector('.modal-content__overview');
        movieOverview.innerHTML = randomMovieToShow.overview;

        let movieTrailerBtn = document.querySelector('.modal-content__trailer-button');

        movieTrailerBtn.setAttribute('onclick', `window.open('https://www.youtube.com/watch?v=${videoKey}?start=5&autoplay=1', '_blank')`);
    })();

    resetFilter();

}







window.onload = () => {

    movieTabToShow = getPopularMovies;
    movieTabToShow(1);

    document.querySelectorAll('.filter-bar__list-item').forEach(item => {
        item.addEventListener('click', e => {
            setActiveContainer(e);
            setActiveTab(e);

            let wrapper = document.querySelector(".filter-bar__list");
            let elements = wrapper.children;

            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('list-item__selected');
            }

            e.currentTarget.classList.add('list-item__selected');
        });
    })

    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', e => {
        setActiveContainer(e);
        setActiveTab(e);
    })

    const filterBtn = document.getElementById('filter-bar__btn');
    filterBtn.addEventListener('click', e => {
        var x = document.getElementById("filter-search-nav");
        let y = document.getElementById('filter-bar__btn');
        if (x.style.display === "none") {
            x.style.display = "flex";
            y.innerText = '❌';
            y.style.fontSize = '16px';
        } else {
            x.style.display = "none";
            y.innerText = 'Filter';
            y.style.fontSize = '16px';
        }
    })


    var max = new Date().getFullYear();
    min = max - 50;
    select = document.getElementById('filter-nav__movie-year');

    for (var i = max; i >= min; i--) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }

    // select.value = new Date().getFullYear();

    let searchInput = document.querySelector(".filter-bar__value");

    searchInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            setActiveContainer(event);
            searchByName(searchInput.value, 1);
        }
    });

    //function to user make a search by name that he write on a input box
    function searchByName(input, page) {

        let id = document.getElementById('searchInput_movies_container');

        id.innerHTML = '';

        let valueInput = input;

        let url = `https://api.themoviedb.org/3/search/movie?${APIKey}&query=${valueInput}`;

        requestAPI(url, id);
    }

    //function to make input box appear and desappear
    let searchIcon = document.querySelector('#filter-bar__icon');
    searchIcon.addEventListener('click', e => {

        if (searchInput.classList.contains('show-search-input')) {
            searchInput.classList.remove('show-search-input');
        } else {
            searchInput.classList.add('show-search-input');
        }

    });



}
