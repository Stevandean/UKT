const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: "*",
    }
});

app.use(cors());
app.use(express.static(__dirname))

//web socket
io.on('connection', (socket) => {
    // console.log('a user connected');
    socket.on('pushRekap', () =>{
        io.emit('refreshRekap')
    })
});

//import end-point diletakkan disini

// endpoint role
const role = require('./routes/role');
app.use("/ukt/role", role)

// endpoint cabang
const cabang = require('./routes/cabang');
app.use("/ukt/cabang", cabang)

// endpoint cabang
const ranting = require('./routes/ranting');
app.use("/ukt/ranting", ranting)

// endpoint siswa
const siswa = require('./routes/siswa');
app.use("/ukt/siswa", siswa)

// endpoint user
const user = require('./routes/user');
app.use("/ukt/user", user)

// endpoint pengurus
const pengurus = require('./routes/pengurus');
app.use("/ukt/pengurus", pengurus)

// endpoint penguji
const penguji = require('./routes/penguji');
app.use("/ukt/penguji", penguji)

const senam = require('./routes/ukt/senam/senam');
app.use("/ukt/senam", senam)

const senam_siswa = require('./routes/ukt/senam/senam_siswa');
app.use("/ukt/senam_siswa", senam_siswa)

const senam_detail = require('./routes/ukt/senam/senam_detail');
app.use("/ukt/senam_detail", senam_detail)

const jurus = require('./routes/ukt/jurus/jurus');
app.use("/ukt/jurus", jurus)

const jurus_siswa = require('./routes/ukt/jurus/jurus_siswa');
app.use("/ukt/jurus_siswa", jurus_siswa)

const jurus_detail = require('./routes/ukt/jurus/jurus_detail');
app.use("/ukt/jurus_detail", jurus_detail)

//endpoint teknik
const teknik = require('./routes/ukt/teknik/teknik');
app.use("/ukt/teknik", teknik)
//endpoint teknik_siswa
const teknik_siswa = require('./routes/ukt/teknik/teknik_siswa');
app.use("/ukt/teknik_siswa", teknik_siswa)
//endpoint teknik_detail
const teknik_detail = require('./routes/ukt/teknik/teknik_detail');
app.use("/ukt/teknik_detail", teknik_detail)

//endpoint fisik
const fisik = require('./routes/ukt/fisik/fisik');
app.use("/ukt/fisik", fisik)

//endpoint Standar Fisik
const standar_fisik = require('./routes/ukt/fisik/standar_fisik');
app.use("/ukt/standar_fisik", standar_fisik)

//endpoint ukt_siswa
const ukt_siswa = require('./routes/ukt_siswa');
app.use("/ukt/ukt_siswa", ukt_siswa)


//endpoint Soal
const soal = require('./routes/soal');
app.use("/ukt/soal", soal)

//endpoint Lembar Soal
const lembar_soal = require('./routes/lembar_soal');
app.use("/ukt/lembar_soal", lembar_soal)

//endpoint Lembar jawaban
const lembar_jawaban = require('./routes/lembar_jawaban');
app.use("/ukt/lembar_jawaban", lembar_jawaban)

//endpoint Kunci Soal
const kunci_soal = require('./routes/kunci_soal');
app.use("/ukt/kunci_soal", kunci_soal)

//endpoint Session
const session = require('./routes/session');
app.use("/ukt/session", session)

//endpoint Event
const event = require('./routes/event');
app.use("/ukt/event", event)
//endpoint Ukt
const ukt = require('./routes/ukt');
app.use("/ukt/ukt", ukt)

//endpoint Sambung
const sambung = require('./routes/ukt/sambung/sambung');
app.use("/ukt/sambung", sambung)

//run server
server.listen(8080, () => {
    console.log('server run on port 8080')
})