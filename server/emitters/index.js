const claw = require('./modules/claw')
const getCoords = require('./modules/getCoords')
const touchbar = require('./modules/touchbar')
const wheel = require('./modules/wheel')

const recorderPlay = require('./modules/recorder/play')

module.exports = {
    claw,
    getCoords,
    touchbar,
    wheel,
    "recorder/play": recorderPlay
}