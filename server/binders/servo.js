const ServoHandler = require('../core/servoHandler')

const servoX = new ServoHandler({pin: 1})
const servoY = new ServoHandler({pin: 2})
const servoZ = new ServoHandler({pin: 3})

const touchbarMoveTo = ({deltaX, deltaY}) => {
    servoX.moveDelta(deltaX)
    servoY.moveDelta(deltaY)
}

module.exports = {
    touchbarMoveTo
}