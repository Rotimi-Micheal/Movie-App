import {API_KEY, API_URL} from "./cofig.js";
import { getJSOn } from "./helper.js";
// import { API_URL } from "./cofig.js";


export const state = {
  movieData: {},
  search: {
    query: ``,
    results: []
  }
}


export const getMovieSearch = async function (query) {
  try {
    state.search.query = query

    const data = await getJSOn(`${API_URL}s=${query}&apikey=${API_KEY}`);
    console.log(data);

    state.search.results = data.Search.map(result => {
      return {
        id: result.imdbID,
        poster: result.Poster,
        year: result.Year,
        title: result.Title,
      };
    })
    console.log(state.search.results);
    // if(!res.ok) throw (`Invalid id (${res.status})`)
    // console.log(data);
    // const {Search: search} = data
    // state.search.results = search.map(result => {
    //   return {
    //     id: result.imdbID,
    //     poster: result.Poster,
    //     year: result.Year,
    //     title: result.Title,
    //   };
    // });
    // console.log(state.search.results);
    
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err
  }
};




// const createRecipeObject = function (data) {
//   data;
//   console.log(data);
//   return {
//     genre: data.Genre,
//     language: data.Language,
//     id: data.imdbID,
//     directors: data.Director,
//     title: data.Title,
//     imdbratings: data.imdbRating,
//     image: data.Poster,
//     runTime: data.Runtime,
//     actors: data.Actors,
//     boxBoxing: data.BoxOffice
//   };
// };


export const getAboutMovie = async function (id) {
  try {
    const data = await getJSOn(`${API_URL}i=${id}&apikey=${API_KEY}`);
    
    // state.movie = createRecipeObject(data)
    const movieData = data
     state.movieData = {
       genre: data.Genre,
       language: data.Language,
       id: data.imdbID,
       directors: data.Director,
       title: data.Title,
       imdbratings: data.imdbRating,
       image: data.Poster,
       runTime: data.Runtime,
       actors: data.Actors,
       plot: data.Plot,
     };
     console.log(movieData);
     console.log(state.movieData);
  } catch (err) {
    throw err;
  }
};


// window.addEventListener("hashchange", getAboutMovie);
// window.addEventListener("load", getAboutMovie);