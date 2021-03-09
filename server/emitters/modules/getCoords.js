const servo = require('../../binders/servo')

module.exports = ({io}) => {
    servo.emitDeg({io})
}