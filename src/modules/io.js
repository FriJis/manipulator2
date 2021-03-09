import sockIo from 'socket.io-client'
console.log(process.env);
export default sockIo(`ws://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`)
