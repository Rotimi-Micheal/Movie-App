import View from "./view.js";

class ResultView extends View {
  _parentEl = document.querySelector(".results");
  _errorMsg = `no movie found for your query! please try again`;

  generateMarkUp() {
    console.log(this._data);
    return this._data.map(this._generateMarkUpPreview).join("");
  }

  _generateMarkUpPreview(result) {
    return `
    <li> 
                     <a class="preview-link" href="#${result.id}">
                     <figure class="preview-fig">
                        <img class="li-img" src="${result.poster}">
                    </figure>
                     <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.year}</p>
                
              </div> 
                     </a>
                    </li>
    `;
  }
}
export default new ResultView