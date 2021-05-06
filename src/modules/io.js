import sockIo from 'socket.io-client'
export const io = sockIo(
    `ws://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`
)

export const emitters = {
    touchbar(e) {
        io.emit('touchbar', e)
    },
    wheel(e) {
        io.emit('wheel', e)
    },
    claw(e) {
        io.emit('claw', e)
    },
    degCoord() {
        io.emit('getCoords')
    },
    setCoordinates(e) {
        io.emit('setCoordinates', e)
    }
} 

export const on = {
    degUpd(c) {
        io.on('degrees/update',({ x, y, z, claw }) => {
            c({ x, y, z, claw })
        })
    },
    connected(c) {
        io.on('connected',() => {
            c()
        })
    },
}