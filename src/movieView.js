import View from "./view.js";

class movieView extends View {
  _parentEl = document.querySelector(".renderMovies");
  _errorMsg = `we could not find the movie , please try another one`;

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach(ev => window.addEventListener(ev, handler));
  }

  generateMarkUp() {
    return `
        <div class="posterDiv">
                    <img src="${this._data.image}">
                </div>
                    <p class="textresult">Title: ${this._data.title}</p>
                    <p class="texttitle">ImdbRatings: ${this._data.imdbratings}</p>
                    <p class="texttitle">Plot: ${this._data.plot}</p>
                    <p class="texttitle">Cast: ${this._data.actors}</p>
                <p class="texttitle">RunTime: ${this._data.runTime}</p>
                <p class="texttitle">Genre: ${this._data.genre}</p>
                <p class="texttitle">Language: ${this._data.language}</p>
                <p class="texttitle">Directors: ${this._data.directors}</p>
      `;
  }
}

export default new movieView