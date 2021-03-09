import sockIo from 'socket.io-client'
export default sockIo(`ws://${process.env.HOST}:${process.env.PORT}`)
