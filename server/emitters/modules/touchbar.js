const servo = require('../../providers/servoFunctions')

module.exports = ({ io, socket }, { deltaX, deltaY }) => {
    servo.touchbarMoveTo({ io, socket }, { deltaX, deltaY })
}
