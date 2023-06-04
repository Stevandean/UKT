import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { globalState } from '@/context/context'
import Header from './components/header'
import Modal_Sambung from './components/modal_sambung';
import Modal_Alert from './components/modal_alert';
import { useRouter } from 'next/router';
import SocketIo from 'socket.io-client'
const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL
const socket = SocketIo(SOCKET_URL)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const sambung = () => {

    const [showModalSambung, setShowModalSambung] = useState(false)
    const [showModalAlert, setShowModalAlert ] = useState(false);
    const router = useRouter()

    // state
    const [alert, setAlert] = useState(false)
    const [dataSiswa1, setDataSiswa1] = useState([])
    const [dataSiswa2, setDataSiswa2] = useState([])
    const [action, setAction] = useState(false)
    const [nilai1, setNilai1] = useState(60)
    const [nilai2, setNilai2] = useState(60)

    const {active, setActive} = useContext(globalState)

    // function set jneis
    const onActive = (e) => {
        setActive(e)
    }

    // function get data siswa from local storage
    // function get data siswa
    const handleChildData = (data) => {
        if (data) {
            data.posisi < 2 
            ? setDataSiswa1(data)
            : setDataSiswa2(data)      
        }
    }

    const handleAlertData = (data) => {
        console.log(data.data)
        if (data.data === true) {
            setAlert(true)
        } else if (data.data === false){
            setShowModalAlert(false)
        }
    }

    useEffect(() => {
        if (alert == true) {
            postDataSambung()
            setShowModalAlert(false);
        }
    }, [alert])

    const postDataSambung = () => {
        const token = localStorage.getItem('tokenPenguji')
        const penguji = JSON.parse(localStorage.getItem('penguji'));
        const event = JSON.parse(localStorage.getItem('event'));
        const posisi1 = localStorage.getItem('posisi1')
        const posisi2 = localStorage.getItem('posisi2')
        setShowModalAlert(true);
        if (alert){
            const id_penguji = penguji.id_penguji
            const data = {
                id_event: event.id_event,
                id_penguji: id_penguji,
                id_siswa1: dataSiswa1.id_siswa,
                id_siswa2: dataSiswa2.id_siswa,
                nilai1: nilai1,
                nilai2: nilai2
            }
            
            axios.post(BASE_URL + `sambung`, data, { headers: { Authorization: `Bearer ${token}` } },)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error.message);
                });
            
            for (let i = 0; i < 2; i++) {
                axios.put(BASE_URL + `ukt_siswa/${i == 0 ? posisi1 : posisi2}`, {
                    sambung: i == 0  ? nilai1 : nilai2
                }, { headers: { Authorization: `Bearer ${token}` } })
                    .then(res => {
                        console.log(res)
                    })
            }

            socket.emit('pushRekap')
            router.back()

        }
        
    }

    useEffect(() => {
        console.log(dataSiswa1)
        console.log(dataSiswa2)
    }, [dataSiswa1, dataSiswa2])

    return (
        <>
            <div className="font-lato">

                {/* awal wrapper konten utama */}
                <div className="w-full h-screen">

                    {/* header */}
                    <Header />
                    {/* akhir header */}

                    {/* konten utama */}
                    <div className="min-h-full bg-darkBlue px-5 py-8 space-y-10">

                        {/* wrapper siswa 1 */}
                        <div>

                            <div className="bg-purple rounded-md py-1.5 mb-7 text-center shadow-sm shadow-slate-400">
                                <h1 className='text-white text-2xl tracking-wide uppercase font-bold font-lato'>SISWA 1</h1>
                            </div>
                            {/* card siswa information */}
                            <div className="bg-navy rounded-md p-3 text-white mb-4 shadow shadow-slate-700 hover:shadow-purple transition ease-in-out duration-300"
                            onClick={() => {
                                setShowModalSambung(true)
                                setAction('posisi1')
                            }}>
                                {dataSiswa1.posisi > 0
                                    ? <>
                                        <h1 className='text-green tracking-wide text-lg'>{dataSiswa1.nomor_urut}</h1>
                                        <h1 className='text-xl font-semibold'>{dataSiswa1.name}</h1>
                                        <h1 className='tracking-wide'>{dataSiswa1.rayon}</h1>
                                    </>
                                    : <h1 className='text-lg uppercase font-bold font-lato' >Pilih Siswa</h1>

                                }
                            </div>


                            {/* wrapper nilai siswa 1 */}
                            <div className="bg-navy rounded-md p-2 text-center text-white space-y-3 mb-3">
                                {/* <h1 className='text-xl font-semibold tracking-wider uppercase font-bold font-lato'>Nilai</h1> */}

                                {/* nilai */}
                                <div className="grid grid-cols-3 gap-x-3 items-center">

                                    {/* button minus */}
                                    <button className='bg-red rounded-md text-center text-2xl font-bold'
                                        onClick={() => nilai1 > 60 ? setNilai1(nilai1 - 1) : []}>
                                        -
                                    </button>

                                    {/* score indicator */}
                                    <div className="outline outline-purple rounded-md h-full flex items-center justify-center">
                                        <h1 className='text-xl font-semibold'>{nilai1}</h1>
                                    </div>

                                    {/* button plus */}
                                    <button className='bg-purple rounded-md text-center text-2xl font-bold'
                                        onClick={() => nilai1 > 99 ? '' : setNilai1(nilai1 + 1)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* wrapper siswa 2 */}
                        <div>

                            <div className="bg-purple rounded-md py-1.5 mb-7 text-center shadow-sm shadow-slate-400">
                                <h1 className='text-white text-2xl tracking-wide uppercase font-bold font-lato'>Siswa 2</h1>
                            </div>

                            {/* card siswa information */}
                            <div className="bg-navy rounded-md p-3 text-white mb-4 shadow shadow-slate-700 hover:shadow-purple transition ease-in-out duration-300"
                            onClick={() => {
                                setShowModalSambung(true)
                                setAction('posisi2')
                            }}>
                                {dataSiswa2.posisi > 1
                                    ? <>
                                        <h1 className='text-green tracking-wide text-lg'>{dataSiswa2.nomor_urut}</h1>
                                        <h1 className='text-xl font-semibold'>{dataSiswa2.name}</h1>
                                        <h1 className='tracking-wide'>{dataSiswa2.rayon}</h1>
                                    </>
                                    : <h1 className='text-lg uppercase font-bold font-lato' >Pilih Siswa</h1>

                                }
                            </div>

                            {/* wrapper nilai siswa 1 */}
                            <div className="bg-navy rounded-md p-2 text-center text-white space-y-3 mb-3">
                                {/* <h1 className='text-xl font-semibold tracking-wider uppercase font-bold font-lato'>Nilai</h1> */}

                                {/* nilai */}
                                <div className="grid grid-cols-3 gap-x-3 items-center">

                                    {/* button minus */}
                                    <button className='bg-red rounded-md text-center text-2xl font-bold'
                                        onClick={() => nilai2 > 60 ? setNilai2(nilai2 - 1) : []}>
                                        -
                                    </button>

                                    {/* score indicator */}
                                    <div className="outline outline-purple rounded-md h-full flex items-center justify-center">
                                        <h1 className='text-xl font-semibold'>{nilai2}</h1>
                                    </div>

                                    {/* button plus */}
                                    <button className='bg-purple rounded-md text-center text-2xl font-bold'
                                        onClick={() => nilai2 > 99 ? '' : setNilai2(nilai2 + 1)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-yellow rounded-md p-3 text-white mb-8 shadow shadow-slate-700 text-center'
                            onClick={postDataSambung}>Selesai</div>
                    </div>
                </div>
            </div>

            <globalState.Provider value={{ showModalSambung, setShowModalSambung, action, setAction }}>
                <Modal_Sambung onData={handleChildData} />
            </globalState.Provider>
            <globalState.Provider value={{ showModalAlert, setShowModalAlert}}>
                <Modal_Alert onData={handleAlertData} />
            </globalState.Provider>
        </>
    )
}

export default sambung