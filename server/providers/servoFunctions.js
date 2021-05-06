const { servoY, servoX, servoZ, servoClaw } = require('./servo')

const emitDeg = ({ io }) => {
    io.emit('degrees/update', {
        x: servoX.getDeg(),
        y: servoY.getDeg(),
        z: servoZ.getDeg(),
        claw: servoClaw.getDeg(),
    })
}

const initServos = () => {
    servoX.moveTo()
    servoY.moveTo()
    servoZ.moveTo()
}

const touchbarMoveTo = ({ io }, { deltaX, deltaY }) => {
    servoX.moveDelta(-deltaX)
    servoZ.moveDelta(deltaY)
    emitDeg({ io })
}

const wheelMoveTo = ({ io }, { deltaY }) => {
    servoY.moveDelta(deltaY)
    emitDeg({ io })
}

const clawMoveTo = ({ io }, { deltaX }) => {
    servoClaw.moveDelta(deltaX)
    emitDeg({ io })
}

const setCoordinates = ({io}, {x, y, z, claw}) => {
    servoX.moveTo(x)
    servoY.moveTo(y)
    servoZ.moveTo(z)
    servoClaw.moveTo(claw)
    emitDeg({io})
}

module.exports = {
    touchbarMoveTo,
    emitDeg,
    initServos,
    wheelMoveTo,
    clawMoveTo,
    setCoordinates
}
