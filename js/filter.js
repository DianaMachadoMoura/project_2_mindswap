
let pageNum = 1;
let movies = [];
let movieTabToShow;

function requestAPI(url, id) {
    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
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
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            id.innerHTML += htmlStr;
        })
}

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
            let input =  document.getElementById('filter-search__value');
            id.innerHTML = '';
            filter(pageNum);
            movieTabToShow = filter;
            break;
        default:
            console.log("errooooooooooooo")
    }
}


function myFunction(sticky, navbar) {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

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

window.onload = () => {

    movieTabToShow = getPopularMovies;
    movieTabToShow(1);

    document.querySelectorAll('.filter-bar__list-item').forEach(item => {
        item.addEventListener('click', e => {
            setActiveContainer(e);
            setActiveTab(e);
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
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    })


    var max = new Date().getFullYear();
    min = max - 50;
    select = document.getElementById('filter-nav__movie-year');

    for (var i = min; i <= max; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }

    select.value = new Date().getFullYear();

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
    }

    function searchByName(page) {
        let id = document.getElementById('searchBtn_movies_container');
        let input =  document.getElementById('filter-search__value');
        let valueInput = input.value;

        let url = `https://api.themoviedb.org/3/search/movie?${APIKey}&query=${valueInput}`;

        requestAPI(url, id);
    }

}
