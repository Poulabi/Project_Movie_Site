
const API_KEY = 'api_key=f01894d2a38347d37b108f2129603b59';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL =BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const Container = document.getElementById('b3');
    const movies = data.results;

    console.log(movies);
    movies.forEach(movie => {
      const divElement = document.createElement('div');
      divElement.innerHTML = `
      <div class="subbox" id="sb1">
                <figure class="picture">
                  <a href="https://www.themoviedb.org/movie/${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} Poster">
                  </a>
                  <h2>${movie.title}</h2>
                
                </figure>
            </div>
      
      `;
      Container.appendChild(divElement);
    });
  })



  