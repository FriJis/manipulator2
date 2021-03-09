const { clawMoveTo } = require('../../binders/servo')

module.exports = ({ io }, { deltaX }) => {
    clawMoveTo({ io }, { deltaX })
}