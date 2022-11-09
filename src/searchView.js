class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const query = this._parentEl.querySelector(".text-input").value;
    this._clearInput()
    return query
  }

  _clearInput(){
    this._parentEl.querySelector(".text-input").value = ``

  }

  addHandlerRender(handler){
    this._parentEl.addEventListener("submit",function(e){
        e.preventDefault()
        handler()
    })
  }
}
export default new SearchView
