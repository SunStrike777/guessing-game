class GuessingGame {
    constructor() {
    }


    setRange(minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }	    }


    guess() {	    guess() {

        this.result = Math.round((this.minValue + this.maxValue) / 2)
        return this.result
    }	    }


    lower() {	    lower() {

        this.maxValue = this.result
        this.guess()
    }	    }


    greater() {	    greater() {

        this.minValue = this.result
        this.guess()
    }	    }
}	}
