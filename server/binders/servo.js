const ServoHandler = require('../core/servoHandler')
const Recorder = require('../core/recorder')

const recorder = new Recorder({ms: 5})

const servoX = new ServoHandler({pin: 2, startDeg: 90})
const servoY = new ServoHandler({pin: 3, startDeg: 90, min: 25})
const servoZ = new ServoHandler({pin: 4, startDeg: 90})
const servoClaw = new ServoHandler({pin: 5, startDeg: 45, max: 90})

let _rec = true

const record = () => {
    if(_rec) {
        recorder.add({
            x: servoX.getDeg(),
            y: servoY.getDeg(), 
            z: servoZ.getDeg(),
            claw: servoClaw.getDeg()
        })
    }
}

const recorderPlay = () => {
    recorder.play(({x, y, z, claw}) => {
        servoX.moveTo(x)
        servoY.moveTo(y)
        servoZ.moveTo(z)
        servoClaw.moveTo(claw)
    })
}

const emitDeg = ({io}) => {
    record()
    io.emit('degrees/update', {
        x: servoX.getDeg(),
        y: servoY.getDeg(),
        z: servoZ.getDeg(),
        claw: servoClaw.getDeg()
    })
}

const initServos = () => {
    servoX.moveTo()
    servoY.moveTo()
    servoZ.moveTo()
}

const touchbarMoveTo = ({io}, {deltaX, deltaY}) => {
    servoX.moveDelta(-deltaX)
    servoZ.moveDelta(deltaY)
    emitDeg({io})
}

const wheelMoveTo = ({io}, {deltaY}) => {
    servoY.moveDelta(deltaY)
    emitDeg({io})
}

const clawMoveTo = ({io}, {deltaX}) => {
    servoClaw.moveDelta(deltaX)
    emitDeg({io})
}



module.exports = {
    touchbarMoveTo,
    emitDeg,
    initServos,
    wheelMoveTo,
    clawMoveTo,
    recorderPlay
}