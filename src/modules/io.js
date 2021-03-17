import sockIo from 'socket.io-client'
export default sockIo(
    `ws://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`
)
