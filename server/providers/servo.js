const ServoHandler = require('../core/servoHandler')


const servoX = new ServoHandler({pin: 2, startDeg: 90})
const servoY = new ServoHandler({pin: 3, startDeg: 90, min: 25})
const servoZ = new ServoHandler({pin: 4, startDeg: 90})
const servoClaw = new ServoHandler({pin: 5, startDeg: 45, max: 90})

module.exports = {
    servoClaw,
    servoX,
    servoY,
    servoZ
}


