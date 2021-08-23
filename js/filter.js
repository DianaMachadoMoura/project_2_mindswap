
let pageNum = 1;
let movies = [];
let movieTabToShow;

const getPopularMovies = (page) => {

    const moviesEndpoint = 'movie/popular?'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + moviesEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}`;

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
            document.getElementById('popular_movies_container').innerHTML += htmlStr;
        })
}

function showNowPlayingMovies(page) {
    const moviesEndpoint = 'movie/now_playing?'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + moviesEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}`;

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            //    document.getElementById('movies_container').innerHTML = "";
            for (let i = 0; i < data.results.length; i++) {
                console.log("for");
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('now_playing_movies_container').innerHTML += htmlStr;
        })
}

function showActionMovies(page) {
    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = '&with_genres=28'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    console.log(url);

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                console.log("for");
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('action_movies_container').innerHTML += htmlStr;
        })
}

function showDramaMovies(page) {
    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = '&with_genres=18'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    console.log(url);

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                console.log("for");
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('drama_movies_container').innerHTML += htmlStr;
        })
}

function showComedyMovies(page) {
    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = '&with_genres=35'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    console.log(url);

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                console.log("for");
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('comedy_movies_container').innerHTML += htmlStr;
        })
}

function showAnimationMovies(page) {
    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = '&with_genres=16'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    console.log(url);

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                console.log("for");
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('animation_movies_container').innerHTML += htmlStr;
        })
}

function showHorrorMovies(page) {
    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = '&with_genres=27'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    console.log(url);

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                console.log("for");
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('horror_movies_container').innerHTML += htmlStr;
        })
}

function showSci_fiMovies(page) {
    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = '&with_genres=878'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    console.log(url);

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                console.log("for");
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('sci-fi_movies_container').innerHTML += htmlStr;
        })
}

function showThrillerMovies(page) {
    const discoverEndpoint = 'discover/movie?';
    const genreEndpoint = '&with_genres=53'

    if (page === 1) {
        movies = [];
    }

    let url = APIRequestPrefix + discoverEndpoint + APIKey + `&language=en-US&sort_by=popularity.desc&page=${page}` + genreEndpoint;
    console.log(url);

    let htmlStr = '';
    let imgPath = `https://image.tmdb.org/t/p/w154/`;
    fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                console.log("for");
                if (data.results[i].poster_path) {
                    movies.push(data.results[i]);
                    let poster_path = data.results[i].poster_path;
                    let title = data.results[i].title;
                    let date = data.results[i].release_date.split('-')[0];
                    let rating = data.results[i].vote_average;
                    htmlStr += `<div style='float:left;margin:40px 20px;height:230px;width:154px;'><img src='${imgPath}${poster_path}'><div style='text-align:left;font-size:0.9em;'><p style='font-weight:bold;padding:2px 0'>${title}</p><p>${date}</p><div style='display:flex;padding-top:2px'><img src='resources/stars.png' style='width:15px;'><p style='font-weight:bold;padding-left:5px;'>${rating}</p></div></div></div>`;
                }
            }
            document.getElementById('thriller_movies_container').innerHTML += htmlStr;
        })
}

let isScrolled = false;
const infiniteScroll = () => {
    if (window.scrollY > (document.body.offsetHeight - 100) && !isScrolled) {
        isScrolled = true;
        pageNum++;
        movieTabToShow();
        console.log(movieTabToShow, 'variavel infinite scroll');
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
    console.log(e.currentTarget, 'current target');
    pageNum = 1;
    console.log('switchhh');
    console.log(e.currentTarget);
    switch (e.currentTarget.id) {
        case 'popular':
            getPopularMovies(pageNum);
            movieTabToShow = getPopularMovies;
            break;
        case 'now_playing':
            showNowPlayingMovies(pageNum);
            movieTabToShow = showNowPlayingMovies;
            break;
        case 'action':
            showActionMovies(pageNum);
            movieTabToShow = showActionMovies;
            break;
        case 'drama':
            showDramaMovies(pageNum);
            movieTabToShow = showDramaMovies;
            break;
        case 'comedy':
            showComedyMovies(pageNum);
            movieTabToShow = showComedyMovies;
            break;
        case 'animation':
            showAnimationMovies(pageNum);
            movieTabToShow = showAnimationMovies;
            break;
        case 'horror':
            showHorrorMovies(pageNum);
            movieTabToShow = showHorrorMovies;
            break;
        case 'sci-fi':
            showSci_fiMovies(pageNum);
            movieTabToShow = showSci_fiMovies;
            break;
        case 'thriller':
            showThrillerMovies(pageNum);
            movieTabToShow = showThrillerMovies;
            break;
        default:
            console.log("errooooooooooooo")
    }
}

window.onscroll = function () {
    infiniteScroll();
}

window.onload = () => {
    movieTabToShow = getPopularMovies;
    movieTabToShow();
    showNowPlayingMovies(pageNum);

    document.querySelectorAll('.filter-bar__list-item').forEach(item => {
        item.addEventListener('click', e => {
            setActiveTab(e);
            setActiveContainer(e);
        });
    })

}