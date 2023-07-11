import { globalState } from '@/context/context'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Modal_teknik = () => {

    // state modal
    const { showModalTeknik, setShowModalTeknik } = useContext(globalState)

    // state
    const { setDataTeknik, action, idTeknik } = useContext(globalState)
    const { name, setName } = useContext(globalState)
    const { tipe, setTipe } = useContext(globalState)

    // function get data teknik
    const getDataTeknik = () => {
        const token = localStorage.getItem('token')
        axios.get(BASE_URL + `teknik/ukt/${tipe}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setDataTeknik(res.data.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    // function handle add and edit
    const handleSave = (e) => {
        e.preventDefault();

        console.log('hai')

        const token = localStorage.getItem('token')

        let form = {
            tipe_ukt: tipe,
            name: name,
        }

        if (action === 'insert') {
            axios.post(BASE_URL + `teknik`, form, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => {
                    setShowModalTeknik(false)
                    getDataTeknik()
                    console.log(res.data.message);
                })
                .catch(err => {
                    console.log(err.message);
                })
        } else if (action === 'update') {
            console.log('update')
            console.log(`id teknik : ${idTeknik}`)
            axios.put(BASE_URL + `teknik/${idTeknik}`, form, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => {
                    setShowModalTeknik(false)
                    getDataTeknik()
                    console.log(res.data.message);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }

    return (
        <>
            {showModalTeknik ? (
                <>
                    {/* Main modal */}
                    <div className="fixed flex justify-center top-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0">
                        <div className="relative w-full h-full max-w-2xl md:h-auto">

                            {/* Modal content */}
                            <div className="relative bg-navy text-white rounded-lg shadow">

                                <form action="POST" onSubmit={handleSave}>

                                    {/* Modal header */}
                                    <div className="flex justify-center p-4">
                                        {(() => {
                                            if (action === 'insert') {
                                                return (
                                                    <h1 className="text-2xl font-semibold text-gray-900 text-center">
                                                        Tambah Data teknik
                                                    </h1>
                                                )
                                            } else if (action === 'update') {
                                                return (
                                                    <h1 className="text-2xl font-semibold text-gray-900 text-center">
                                                        Edit Data teknik
                                                    </h1>
                                                )
                                            }
                                        })()}
                                        <button onClick={() => setShowModalTeknik(false)} type="button" className="p-1.5 inline-flex items-center absolute right-5">
                                            <svg className="w-7 h-7 fill-white hover:fill-purple duration-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Modal body */}
                                    <div className="px-6 py-2 space-y-3">

                                        {/* Input nama */}
                                        <div className="flex flex-row space-x-3 w-full">
                                            <div className="w-2/6 flex justify-between">
                                                <span>Nama</span>
                                                <span>:</span>
                                            </div>
                                            <div className="w-4/6">
                                                <input className='w-full bg-darkBlue rounded-md focus:outline-none px-2'
                                                    type="text"
                                                    value={name}
                                                    onChange={handleNameChange}
                                                    required
                                                >
                                                </input>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal footer */}
                                    <div className="flex items-center justify-end p-6 space-x-2">
                                        <button onClick={() => setShowModalTeknik(false)} className="text-red hover:text-white bg-white hover:bg-red duration-300 font-medium rounded-lg px-5 py-2.5 text-center">Cancel</button>
                                        {action === 'insert'
                                            ? <button type='submit' className="text-green hover:text-white bg-white hover:bg-green duration-300 rounded-lg font-medium px-5 py-2.5 focus:z-10">Tambah</button>
                                            : <button type='submit' className="text-green hover:text-white bg-white hover:bg-green duration-300 rounded-lg font-medium px-5 py-2.5 focus:z-10">Edit</button>
                                        }
                                        {/* {(() => {
                                            if (action === 'insert') {
                                                return (
                                                    <button type='submit' className="text-green hover:text-white bg-white hover:bg-green duration-300 rounded-lg font-medium px-5 py-2.5 focus:z-10">Tambah</button>
                                                )
                                            } else if (action === 'update') {
                                                return (
                                                    <button type='submit' className="text-green hover:text-white bg-white hover:bg-green duration-300 rounded-lg font-medium px-5 py-2.5 focus:z-10">Edit</button>
                                                )
                                            }
                                        })()} */}
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="bg-black opacity-70 fixed inset-0 z-40"></div>
                </>

            ) : null}
        </>
    )
}

export default Modal_teknik