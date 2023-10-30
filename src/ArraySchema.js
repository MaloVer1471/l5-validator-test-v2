export default class ArraySchema {
  validators = [(value) => Array.isArray(value) === true];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  maxDepth(max) {
    const validator = (values) => {
      const iter = (element, depth = -1) => {
        if (!Array.isArray(element)) {
          return depth;
        }
        const result = element.map((value) => iter(value, depth + 1));
        return Math.max(...result);
      };
      return iter(values) <= max;
    };
    this.validators.push(validator);
    return this;
  }
}
