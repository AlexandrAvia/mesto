export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  render(res) {
    res.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}
