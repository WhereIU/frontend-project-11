import * as yup from 'yup';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.yup = yup;
    this.view.urlInput.addEventListener('focus', () => this.view.changeInputBorderColor(''))
    this.view.form.addEventListener('submit', (e) => this.handleSubmit(e))
  }

  handleSubmit(e) {
    e.preventDefault()
    this.validateUrl(e.target.elements.rssUrl.value)
      .then((v) => {
        this.view.urlInput.value = ''
        this.view.setFocus(this.view.urlInput)
        this.model.push('feeds', v)
      })
      .catch(() => this.view.changeInputBorderColor('red'))
  }

  validateUrl(url) {
    return this.yup.string().url().test(
      'not-exist',
      () => 'it already exist',
      (v) => !this.model.isExist('feeds', v),
    ).validate(url);
  }
}
