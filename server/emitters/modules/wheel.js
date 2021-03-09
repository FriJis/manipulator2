const { wheelMoveTo } = require('../../binders/servo')

module.exports = ({ io }, { deltaY }) => {
    wheelMoveTo({ io }, { deltaY })
}