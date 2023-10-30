export default class ArraySchema {
  validators = [(value) => Array.isArray(value) === true];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}
