export default class View {
  
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError
    this._data = data;
    const markup = this.generateMarkUp();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentEl.innerHTML = ``;
  }

  renderError(message = this._errorMsg) {
    const markup = `
        <h1>${message}</h1>
        `;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}