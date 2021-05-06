const servo = require('../../providers/servoFunctions')

module.exports = ({ io }, { deltaY }) => {
    servo.wheelMoveTo({ io }, { deltaY })
}
