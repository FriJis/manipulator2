require('dotenv').config()

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

const { Board } = require("johnny-five");


const board = new Board({
    port: process.env.COM
});


// app.get(/\.(js|ttf|woff|woff|svg|eot|woff2|css|jpg)/, (req, res) => {
//     res.sendFile(`${__dirname}/dist/${req.url}`)
// })

// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/index.html`)
// })


board.on("ready", () => {

    const events = require('./server/events')
    const { initServos } = require('./server/providers/servoFunctions')

    io.on('connection', (socket) => {
        console.log(`connected ${socket.id}`);
        initServos()
        socket.emit('connected')

        Object.keys(events).forEach(emitter => {
            socket.on(emitter, e => e ? events[emitter]({ io, socket }, e) : '')
        })
    });
    http.listen(process.env.VUE_APP_PORT, process.env.VUE_APP_HOST, () => {
        console.log(`Сервер слушает порт ${process.env.VUE_APP_PORT}`);
    })
});

