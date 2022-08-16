
class GuessingGame {
    constructor() {
    }

    setRange(minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    guess() {
        this.result = Math.round((this.minValue + this.maxValue) / 2)
        return this.result
    }

    lower() {
        this.maxValue = this.result
        this.guess()
    }

    greater() {
        this.minValue = this.result
        this.guess()
    }
}

module.exports = GuessingGame;
