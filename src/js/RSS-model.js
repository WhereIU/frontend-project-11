import _ from 'lodash';

export default class Model {
  constructor() {
    this.state = {
      feeds: [],
    };
    this.observers = {};
  }

  set(type, newValue) {
    if (_.isEqual(this.state[type], newValue)) return;
    this.state[type] = newValue;
    this.notify(type);
  }

  push(type, value) {
    this.state[type].push(value)
  }

  isExist(type, name) {
    const parent = this.state?.[type]
    if (!parent) return false;
    if (Array.isArray(parent)) return parent.includes(name)
    if (typeof parent === 'object') return Object.keys(parent).includes(name);
    return parent === name;
  }

  subscribe(type, fn) {
    if (!this.observers[type]) {
      this.observers[type] = [];
    }
    if (!this.observers[type].includes(fn)) {
      this.observers[type].push(fn);
    }
  }

  notify(type) {
    if (!this.observers[type]) return;
    const v = this.state[type];
    this.observers[type].forEach((fn) => fn(v));
  }
}
