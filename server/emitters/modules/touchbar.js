const servo = require('../../binders/servo')

module.exports = ({io, socket}, {deltaX, deltaY}) => {
    servo.touchbarMoveTo({io, socket},{deltaX, deltaY})
}