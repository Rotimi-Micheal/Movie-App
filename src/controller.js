import * as model from "./model.js"
import movieView from "./movieView.js";
import searchView from "./searchView.js";
import resultView from "./resultView.js";


const controlSearchMovie = async function () {
 try{
   resultView.renderError()
   console.log(resultView);
   const query = searchView.getQuery()
   if(!query) return

      await model.getMovieSearch(query);

      resultView.render(model.state.search.results);
  }
 catch (err) {
    console.log(err);
 }
}

const controlMovie = async function () {
  try {
         const id = window.location.hash.slice(1);
         console.log(id);

         // load movie
         if (!id) return;

         // load movie
         await model.getAboutMovie(id)
         // const {movieData} = model.state

         // render movie
         movieView.render(model.state.movieData)
  } catch (err) {
      movieView.renderError();
      console.error(`${err} 💥💥💥💥`);
      throw err
  }
};

const init = function () {
   movieView.addHandlerRender(controlMovie)
   searchView.addHandlerRender(controlSearchMovie);
}
init()