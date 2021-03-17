module.exports = class Recorder {
    constructor({ ms = 30 }) {
        this.ms = ms

        this._data = []
        this._interval = 0
    }
    add({ x = 0, y = 0, z = 0, claw = 0 }) {
        this._data.push(d)
    }
    clear() {
        this._data = []
    }
    play(c) {
        let counter = 0
        if (this._data.length) {
            this._interval = setInterval(() => {
                c(this._data[counter])

                counter++
                if (counter >= this._data.length) {
                    counter = 0
                }
            }, this.ms)
        }
    }
    stop() {
        clearInterval(this._interval)
    }

    get length() {
        return this._data.length
    }

    get data() {
        return this._data
    }
}
