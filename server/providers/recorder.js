const Recorder = require('../core/recorder')
const { servoY, servoX, servoZ, servoClaw } = require('./servo')

const recorder = new Recorder({ ms: 20 })

let _rec = true

const record = () => {
    if (_rec) {
        recorder.add({
            x: servoX.getDeg(),
            y: servoY.getDeg(),
            z: servoZ.getDeg(),
            claw: servoClaw.getDeg()
        })
    }
}

const recorderPlay = () => {
    recorder.play(({ x, y, z, claw }) => {
        servoX.moveTo(x)
        servoY.moveTo(y)
        servoZ.moveTo(z)
        servoClaw.moveTo(claw)
    })
}

module.exports = {
    record,
    recorderPlay
}