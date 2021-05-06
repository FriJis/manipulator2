const servo = require('../../providers/servoFunctions')

module.exports = ({ io }) => {
    servo.emitDeg({ io })
}
