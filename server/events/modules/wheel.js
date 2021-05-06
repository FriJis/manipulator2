const servo = require('../../providers/servoFunctions')

module.exports = ({ io }, { deltaY = 0 } = {}) => {
    servo.wheelMoveTo({ io }, { deltaY })
}
