const { clawMoveTo } = require('../../providers/servoFunctions')

module.exports = ({ io }, { deltaX = 0 } = {}) => {
    clawMoveTo({ io }, { deltaX })
}
