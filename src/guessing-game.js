class GuessingGame {
  constructor() {
  }

  setRange(min, max) {
    this.left = min;
    this.right = max
  }

  guess() {
    return Math.round((this.right - this.left) / 2) + this.left;
  }

  lower() {
    this.right = this.guess();
  }

  greater() {
    this.left = this.guess();

  }
}

module.exports = GuessingGame;
