let API = 'http://www.omdbapi.com/?apikey=61e576a4&t=';
let loadingStatus = false;
let img = document.getElementById('img');
let title = document.getElementById('title');
let desc = document.getElementById('desc');
let ratings = document.getElementById('ratings');
let Year = document.getElementById('Year');
let Released = document.getElementById('Released');
let actors = document.getElementById('actors');
let Awards = document.getElementById('Awards');
let Genre = document.getElementById('Genre');
let imdbvotes = document.getElementById('imdbvotes');
let collection = document.getElementById('collection');
let movieContainer = document.getElementById('movieContainer');
let errorContainer = document.getElementById('errorContainer');
movieContainer.classList.add('d-none');
errorContainer.classList.add('d-none');
function checkLoaderStatus(){
    let intro = document.getElementById('intro');
    intro.style.display = 'none';
    let loader = document.getElementById('loader');
    if(loadingStatus == true){
        loader.classList.add('loader');
    }
    else{
        loader.classList.remove('loader');
    }
}
function renderMovie(data){
}
function fetchMovieDetails(){
    loadingStatus = true;
    checkLoaderStatus();
    let moviename = document.getElementById('moviename');
    let apiQuery =  API + moviename.value;
    console.log(apiQuery)
    fetch(apiQuery).then((response)=>{
        console.log(response);
        return response.json();
    }).then((data)=>{
        console.log(data);
        if(data.Error != 'Movie not found!'){   //when the movie is not found.
        loadingStatus = false;
        checkLoaderStatus();
        img.src = data.Poster;
        title.innerText = data.Title;
        desc.innerText = data.Plot;
        ratings.innerText = data.imdbRating;
        Year.innerText = data.Year;
        Released.innerText = data.Released;
        actors.innerText = data.Actors;
        Awards.innerText = data.Awards;
        Genre.innerText = data.Genre;
        imdbvotes.innerText = data.imdbVotes;
        collection.innerText = data.BoxOffice;
        errorContainer.classList.add('d-none');
        movieContainer.classList.remove('d-none');
        }
        else{
            movieContainer.classList.add('d-none');
            errorContainer.classList.remove('d-none');
            loadingStatus = false;
            checkLoaderStatus()
        }
    }) 
}
