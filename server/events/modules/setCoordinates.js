const servo = require('../../providers/servoFunctions')

module.exports = ({ io }, { x = 0, y = 0, z = 0, claw = 0} = {}) => {
    servo.setCoordinates({ io }, { x, y, z, claw })
}
