const servo = require('../../providers/servoFunctions')

module.exports = ({ io, socket }, { deltaX = 0, deltaY = 0 } = {}) => {
    servo.touchbarMoveTo({ io, socket }, { deltaX, deltaY })
}
