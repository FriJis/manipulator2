const servo = require('../../providers/servoFunctions')

module.exports = ({ io }, { deltaY }) => {
    wheelMoveTo({ io }, { deltaY })
}
