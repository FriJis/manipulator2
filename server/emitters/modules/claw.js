const { clawMoveTo } = require('../../providers/servoFunctions')

module.exports = ({ io }, { deltaX }) => {
    clawMoveTo({ io }, { deltaX })
}
