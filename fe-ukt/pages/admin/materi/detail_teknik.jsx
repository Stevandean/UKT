import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { globalState } from '@/context/context'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import Footer from '../components/footer'
import Modal_delete from '../components/modal_delete'
import { useRouter } from 'next/router'
import axios from 'axios'
import Modal_teknik from '../components/modal_teknik'
const detail_teknik = () => {
    const router = useRouter();
    const { query } = router.query;
    const queryValue = query
    // state modal
    const [dataTeknik, setDataTeknik] = useState([]);
    const [showModalTeknik, setShowModalTeknik] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [tipe, setTipe] = useState(queryValue)
    const [name, setName] = useState();
    const [action, setAction] = useState();
    const [idTeknik, setIdTeknik] = useState();
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const getData = async () => {
        console.log(queryValue)
        const token = localStorage.getItem("token")
        if (queryValue) {
            await axios.get(BASE_URL + `teknik/ukt/${queryValue}`, { headers: { Authorization: `Bearer ${token}` } })
                .then(result => {
                    console.log(result)
                    setDataTeknik(result.data.data);
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }

    const addModal = () => {
        setShowModalTeknik(true);
        setAction('insert')
        setTipe(queryValue)
    }

    const updateModal = (idTeknik, name) => {
        setShowModalTeknik(true);
        setAction('update')
        setIdTeknik(idTeknik)
        setName(name)
        setTipe(queryValue)
    }

    useEffect(() => {
        getData();
    }, [queryValue])

    // funtion modal delete
    const deleteModal = () => {
        setShowModalDelete(true)
    }

    return (
        <>
            <div className="flex font-lato">

                {/* sidebar */}
                <Sidebar />
                {/* akhir sidebar */}

                {/* awal wrapper konten utama */}
                {/* supaya konten header dapat di scroll dan tidak mempengaruhi sidebar */}
                <div className="w-full overflow-y-auto h-screen">

                    {/* overlap untuk device sm */}
                    {/* <div className="absolute hidden lg:hidden inset-0 bg-slate-400 opacity-50 z-10">
                    </div> */}

                    {/* header */}
                    <Header />
                    {/* akhir header */}

                    {/* konten utama */}
                    <div className="min-h-full bg-darkBlue p-6">

                        {/* wrapper page name and search */}
                        <div className="flex justify-between items-center text-white mb-7">

                            {/* page name and button back */}
                            <div className="flex justify-center items-center gap-x-3">
                                <Link href={'./teknik'} className="bg-purple hover:bg-white rounded-md w-9 h-9 flex justify-center items-center group duration-300">
                                    <svg className='-translate-x-0.5 fill-white group-hover:fill-purple' width="13" height="22" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2258 26.4657L0.354838 14.4974C0.225806 14.3549 0.134623 14.2005 0.08129 14.0343C0.0270964 13.8681 0 13.69 0 13.5C0 13.31 0.0270964 13.1319 0.08129 12.9657C0.134623 12.7995 0.225806 12.6451 0.354838 12.5026L11.2258 0.498681C11.5269 0.166227 11.9032 0 12.3548 0C12.8065 0 13.1935 0.1781 13.5161 0.534301C13.8387 0.890501 14 1.30607 14 1.781C14 2.25594 13.8387 2.6715 13.5161 3.0277L4.03226 13.5L13.5161 23.9723C13.8172 24.3048 13.9677 24.7141 13.9677 25.2005C13.9677 25.6878 13.8065 26.1095 13.4839 26.4657C13.1613 26.8219 12.7849 27 12.3548 27C11.9247 27 11.5484 26.8219 11.2258 26.4657Z" />
                                    </svg>
                                </Link>
                                <h1 className='text-2xl tracking-wider uppercase font-bold'>Teknik - {queryValue}</h1>
                            </div>

                            {/* search and button add data */}
                            <div className="flex gap-x-3">
                                <div className="bg-purple rounded-md px-5 py-2 flex items-center gap-x-2 w-72">
                                    <svg className='z-50' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.75901 13.491 2.625 9.625 2.625C5.75901 2.625 2.625 5.75901 2.625 9.625C2.625 13.491 5.75901 16.625 9.625 16.625Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.3746 18.3751L14.5684 14.5688" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <input className='bg-transparent placeholder:text-white placeholder:tracking-wider placeholder:text-sm w-full focus:outline-none' placeholder='Search' type="text" />
                                </div>

                                <button onClick={() => addModal()} className="bg-purple hover:bg-white hover:text-purple duration-300 rounded-md px-5 py-2 flex items-center gap-x-2">
                                    <h1>Tambah Data</h1>
                                </button>
                            </div>
                        </div>

                        {/* wrapper kategori */}
                        {dataTeknik?.map((item, index) => (
                            <div className="grid grid-cols-12 gap-x-3 mb-2 text-white font-semibold text-lg" key={index}>
                                <div className="bg-navy p-2 rounded-md flex justify-center items-center">
                                    <h1>{index + 1}</h1>
                                </div>
                                <div className="col-span-9 bg-navy rounded-md flex items-center px-4">
                                    <h1>{item.name}</h1>
                                </div>

                                {/* wrapper action button */}
                                <div className="col-span-2 bg-navy rounded-md flex items-center justify-center gap-x-2">
                                    <div onClick={() => updateModal(item.id_teknik, item.name)} className="bg-green hover:bg-white duration-300 p-1.5 rounded-md flex items-center group">
                                        <svg className='stroke-white group-hover:stroke-green duration-300' width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 31.6667H33.25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M26.125 5.54166C26.7549 4.91177 27.6092 4.55791 28.5 4.55791C28.9411 4.55791 29.3778 4.64478 29.7853 4.81358C30.1928 4.98237 30.5631 5.22977 30.875 5.54166C31.1869 5.85355 31.4343 6.22382 31.6031 6.63132C31.7719 7.03883 31.8588 7.47559 31.8588 7.91666C31.8588 8.35774 31.7719 8.7945 31.6031 9.202C31.4343 9.60951 31.1869 9.97977 30.875 10.2917L11.0833 30.0833L4.75 31.6667L6.33333 25.3333L26.125 5.54166Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <button onClick={() => deleteModal()} className="bg-red hover:bg-white duration-300 p-1.5 rounded-md flex items-center group">
                                        <svg className='stroke-white group-hover:stroke-red duration-300' width="28" height="28" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.1543 5.76929L5.64468 29.6154C5.71547 30.9933 6.71776 32.0001 8.0293 32.0001H21.7408C23.0576 32.0001 24.0412 30.9933 24.1255 29.6154L25.6158 5.76929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.76953 5.76929H28.0003H1.76953Z" fill="black" />
                                            <path d="M1.76953 5.76929H28.0003" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M10.1157 5.76924V2.78847C10.115 2.55341 10.1608 2.32054 10.2504 2.10324C10.3401 1.88594 10.4718 1.68851 10.638 1.5223C10.8042 1.35609 11.0016 1.22438 11.2189 1.13474C11.4362 1.04511 11.6691 0.999319 11.9041 1.00001H17.8657C18.1007 0.999319 18.3336 1.04511 18.5509 1.13474C18.7682 1.22438 18.9656 1.35609 19.1319 1.5223C19.2981 1.68851 19.4298 1.88594 19.5194 2.10324C19.609 2.32054 19.6548 2.55341 19.6541 2.78847V5.76924M14.8849 10.5385V27.2308M9.51953 10.5385L10.1157 27.2308M20.2503 10.5385L19.6541 27.2308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* akhir konten utama */}

                    {/* footer */}
                    <Footer />
                    {/* akhir footer */}

                </div>
                {/* akhir wrapper konten utama */}
            </div>

            {/* memanggil modal */}
            <globalState.Provider value={{ showModalTeknik, setShowModalTeknik, name, setName, tipe, setTipe, action, setDataTeknik, idTeknik, name }}>
                <Modal_teknik />
            </globalState.Provider>
            <globalState.Provider value={{ showModalDelete, setShowModalDelete }}>
                <Modal_delete />
            </globalState.Provider>
        </>
    )
}

export default detail_teknik