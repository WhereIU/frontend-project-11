import '../scss/main.scss';

export default class View {
  constructor(root) {
    this.root = root;
    this.form = this.root.querySelector("#rss-form")
    this.urlInput = this.form.querySelector("#rss-url")
  }

  setFocus(elem) {
    elem.focus()
  }

  changeInputBorderColor(color) {
    this.urlInput.style.borderColor = color
  }

}
