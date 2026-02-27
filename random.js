function randomInt(min = 0, max = 100) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError('min and max must be integers');
  }

  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min = 0, max = 1) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('min and max must be numbers');
  }

  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }

  return Math.random() * (max - min) + min;
}

module.exports = { randomInt, randomFloat };
