const { Servo } = require('johnny-five')

module.exports = class ServoHandler {
    constructor({ pin, startDeg = 0, min = 0, max = 180, k = 5 }) {
        this.servo = new Servo({ pin })
        this._deg = startDeg
        this._min = min
        this._max = max
        this._k = k
    }
    moveTo(d) {
        if (d) {
            this._deg = d
        }
        this.servo.to(d)
    }
    moveDelta(delta) {
        this._deg += (delta / this._k)
        if (this._deg <= this._min) this._deg = 0
        if (this._deg >= this._max) this._deg = 180
    }
    getDeg() {
        return this._deg
    }
}
