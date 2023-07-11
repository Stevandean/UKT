import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { globalState } from '@/context/context'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import Footer from '../components/footer'
import Modal_ukt_fisik from '../components/modal_ukt_fisik'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detail_fisik_putih = () => {

    // deklarasi router
    const router = useRouter ()

    // state modal
    const [showModalUktFisik, setShowModalUktFisik] = useState (false)

    // state
    const [dataStandartFisik, setDataStandartFisik] = useState ([])
    const [ukt, setUkt] = useState ('UKT Putih')
    const [action, setAction] = useState ('')

    // state mft
    const [mft_remaja_laki_laki, set_mft_remaja_laki_laki] = useState ('')
    const [mft_remaja_perempuan, set_mft_remaja_perempuan] = useState ('')
    const [mft_privat_laki_laki, set_mft_privat_laki_laki] = useState ('')
    const [mft_privat_perempuan, set_mft_privat_perempuan] = useState ('')

    // state push_up
    const [push_up_remaja_laki_laki, set_push_up_remaja_laki_laki] = useState ('')
    const [push_up_remaja_perempuan, set_push_up_remaja_perempuan] = useState ('')
    const [push_up_privat_laki_laki, set_push_up_privat_laki_laki] = useState ('')
    const [push_up_privat_perempuan, set_push_up_privat_perempuan] = useState ('')

    // state spir perut atas
    const [spir_perut_atas_remaja_laki_laki, set_spir_perut_atas_remaja_laki_laki] = useState ('')
    const [spir_perut_atas_remaja_perempuan, set_spir_perut_atas_remaja_perempuan] = useState ('')
    const [spir_perut_atas_privat_laki_laki, set_spir_perut_atas_privat_laki_laki] = useState ('')
    const [spir_perut_atas_privat_perempuan, set_spir_perut_atas_privat_perempuan] = useState ('')

    // state spir perut bawah
    const [spir_perut_bawah_remaja_laki_laki, set_spir_perut_bawah_remaja_laki_laki] = useState ('')
    const [spir_perut_bawah_remaja_perempuan, set_spir_perut_bawah_remaja_perempuan] = useState ('')
    const [spir_perut_bawah_privat_laki_laki, set_spir_perut_bawah_privat_laki_laki] = useState ('')
    const [spir_perut_bawah_privat_perempuan, set_spir_perut_bawah_privat_perempuan] = useState ('')

    // state spir dada
    const [spir_dada_remaja_laki_laki, set_spir_dada_remaja_laki_laki] = useState ('')
    const [spir_dada_remaja_perempuan, set_spir_dada_remaja_perempuan] = useState ('')
    const [spir_dada_privat_laki_laki, set_spir_dada_privat_laki_laki] = useState ('')
    const [spir_dada_privat_perempuan, set_spir_dada_privat_perempuan] = useState ('')

    // state plank
    const [plank_remaja_laki_laki, set_plank_remaja_laki_laki] = useState ('')
    const [plank_remaja_perempuan, set_plank_remaja_perempuan] = useState ('')
    const [plank_privat_laki_laki, set_plank_privat_laki_laki] = useState ('')
    const [plank_privat_perempuan, set_plank_privat_perempuan] = useState ('')

    // function get data fisik
    const getDataStandartFisik = () => {
        const token = localStorage.getItem ('token')

        axios.get (BASE_URL + `standar_fisik/jenis_latihan/UKT Putih`, { headers: { Authorization: `Bearer ${token}`}})
        .then (res => {
            setDataStandartFisik (res.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    // funtion modal edit
    const editModal = (selectedItem) => {
        setShowModalUktFisik (true)
        setUkt ('UKT Putih')
        setAction (selectedItem.jenis)

        // set mft to modal
        set_mft_remaja_laki_laki (selectedItem.Remaja_lk)
        set_mft_remaja_perempuan (selectedItem.Remaja_prpn)
        set_mft_privat_laki_laki (selectedItem.Privat_lk)
        set_mft_privat_perempuan (selectedItem.Privat_prpn)

        // set push up to modal
        set_push_up_remaja_laki_laki (selectedItem.Remaja_lk)
        set_push_up_remaja_perempuan (selectedItem.Remaja_prpn)
        set_push_up_privat_laki_laki (selectedItem.Privat_lk)
        set_push_up_privat_perempuan (selectedItem.Privat_prpn)

        // set spir perut atas to modal
        set_spir_perut_atas_remaja_laki_laki (selectedItem.Remaja_lk)
        set_spir_perut_atas_remaja_perempuan (selectedItem.Remaja_prpn)
        set_spir_perut_atas_privat_laki_laki (selectedItem.Privat_lk)
        set_spir_perut_atas_privat_perempuan (selectedItem.Privat_prpn)

        // set spir perut bawah to modal
        set_spir_perut_bawah_remaja_laki_laki (selectedItem.Remaja_lk)
        set_spir_perut_bawah_remaja_perempuan (selectedItem.Remaja_prpn)
        set_spir_perut_bawah_privat_laki_laki (selectedItem.Privat_lk)
        set_spir_perut_bawah_privat_perempuan (selectedItem.Privat_prpn)

        // set spir dada to modal
        set_spir_dada_remaja_laki_laki (selectedItem.Remaja_lk)
        set_spir_dada_remaja_perempuan (selectedItem.Remaja_prpn)
        set_spir_dada_privat_laki_laki (selectedItem.Privat_lk)
        set_spir_dada_privat_perempuan (selectedItem.Privat_prpn)

        // set plank to modal
        set_plank_remaja_laki_laki (selectedItem.Remaja_lk)
        set_plank_remaja_perempuan (selectedItem.Remaja_prpn)
        set_plank_privat_laki_laki (selectedItem.Privat_lk)
        set_plank_privat_perempuan (selectedItem.Privat_prpn)
    }

    // function login checker
    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('admin') === null) {
            router.push ('/admin/login')
        }
    }

    useEffect (() => {
        getDataStandartFisik ()
        isLogged ()
    }, [])

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
                                <Link href={'./fisik'} className="bg-purple hover:bg-white rounded-md w-9 h-9 flex justify-center items-center group duration-300">
                                    <svg className='-translate-x-0.5 fill-white group-hover:fill-purple' width="13" height="22" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2258 26.4657L0.354838 14.4974C0.225806 14.3549 0.134623 14.2005 0.08129 14.0343C0.0270964 13.8681 0 13.69 0 13.5C0 13.31 0.0270964 13.1319 0.08129 12.9657C0.134623 12.7995 0.225806 12.6451 0.354838 12.5026L11.2258 0.498681C11.5269 0.166227 11.9032 0 12.3548 0C12.8065 0 13.1935 0.1781 13.5161 0.534301C13.8387 0.890501 14 1.30607 14 1.781C14 2.25594 13.8387 2.6715 13.5161 3.0277L4.03226 13.5L13.5161 23.9723C13.8172 24.3048 13.9677 24.7141 13.9677 25.2005C13.9677 25.6878 13.8065 26.1095 13.4839 26.4657C13.1613 26.8219 12.7849 27 12.3548 27C11.9247 27 11.5484 26.8219 11.2258 26.4657Z"/>
                                    </svg>
                                </Link>
                                <h1 className='text-2xl tracking-wider uppercase font-bold'>Fisik - UKT Putih</h1>
                            </div>

                            {/* search */}
                            <div className="bg-purple rounded-md px-5 py-2 flex items-center gap-x-2 w-72">
                                <svg className='z-50' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.75901 13.491 2.625 9.625 2.625C5.75901 2.625 2.625 5.75901 2.625 9.625C2.625 13.491 5.75901 16.625 9.625 16.625Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.3746 18.3751L14.5684 14.5688" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <input className='bg-transparent placeholder:text-white placeholder:tracking-wider placeholder:text-sm w-full focus:outline-none' placeholder='Search' type="text" />
                            </div>
                        </div>

                        {/* wrapper header */}
                        <div className="grid grid-cols-12 text-green text-center mb-4">
                            <div className="col-span-3">
                                <h1>Jenis Fisik</h1>
                            </div>
                            <div className="col-span-2">
                                <h1>Remaja - Laki Laki</h1>
                            </div>
                            <div className="col-span-2">
                                <h1>Remaja - Perempuan</h1>
                            </div>
                            <div className="col-span-2">
                                <h1>Privat - Laki Laki</h1>
                            </div>
                            <div className="col-span-2">
                                <h1>Privat - Perempuan</h1>
                            </div>
                            <div className="">
                                <h1>Edit</h1>
                            </div>
                        </div>

                        {/* card kategori mft */}
                        <div className="grid grid-cols-12 place-content-center text-white text-lg text-center gap-x-2 mb-2">
                            <div className="col-span-3 bg-navy py-3 rounded-md">
                                <h1>MFT</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.mft?.Remaja_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.mft?.Remaja_prpn}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.mft?.Privat_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.mft?.Privat_prpn}</h1>
                            </div>
                            <div className="bg-navy rounded-md flex justify-center items-center">
                                <button onClick={() => editModal(dataStandartFisik.mft)} className="bg-green hover:bg-white duration-300 rounded-md p-2 group"> 
                                    <svg className='stroke-white group-hover:stroke-green duration-300' width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 31.6667H33.25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M26.125 5.54166C26.7549 4.91177 27.6092 4.55791 28.5 4.55791C28.9411 4.55791 29.3778 4.64478 29.7853 4.81358C30.1928 4.98237 30.5631 5.22977 30.875 5.54166C31.1869 5.85355 31.4343 6.22382 31.6031 6.63132C31.7719 7.03883 31.8588 7.47559 31.8588 7.91666C31.8588 8.35774 31.7719 8.7945 31.6031 9.202C31.4343 9.60951 31.1869 9.97977 30.875 10.2917L11.0833 30.0833L4.75 31.6667L6.33333 25.3333L26.125 5.54166Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* card kategori push up */}
                        <div className="grid grid-cols-12 place-content-center text-white text-lg text-center gap-x-2 mb-2">
                            <div className="col-span-3 bg-navy py-3 rounded-md">
                                <h1>Push Up</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.push_up?.Remaja_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.push_up?.Remaja_prpn}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.push_up?.Privat_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.push_up?.Privat_prpn}</h1>
                            </div>
                            <div className="bg-navy rounded-md flex justify-center items-center">
                                <button onClick={() => editModal(dataStandartFisik.push_up)} className="bg-green hover:bg-white duration-300 rounded-md p-2 group"> 
                                    <svg className='stroke-white group-hover:stroke-green duration-300' width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 31.6667H33.25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M26.125 5.54166C26.7549 4.91177 27.6092 4.55791 28.5 4.55791C28.9411 4.55791 29.3778 4.64478 29.7853 4.81358C30.1928 4.98237 30.5631 5.22977 30.875 5.54166C31.1869 5.85355 31.4343 6.22382 31.6031 6.63132C31.7719 7.03883 31.8588 7.47559 31.8588 7.91666C31.8588 8.35774 31.7719 8.7945 31.6031 9.202C31.4343 9.60951 31.1869 9.97977 30.875 10.2917L11.0833 30.0833L4.75 31.6667L6.33333 25.3333L26.125 5.54166Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* card kategori spir perut atas */}
                        <div className="grid grid-cols-12 place-content-center text-white text-lg text-center gap-x-2 mb-2">
                            <div className="col-span-3 bg-navy py-3 rounded-md">
                                <h1>Spir Perut Atas</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_perut_atas?.Remaja_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_perut_atas?.Remaja_prpn}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_perut_atas?.Privat_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_perut_atas?.Privat_prpn}</h1>
                            </div>
                            <div className="bg-navy rounded-md flex justify-center items-center">
                                <button onClick={() => editModal(dataStandartFisik.spir_perut_atas)} className="bg-green hover:bg-white duration-300 rounded-md p-2 group"> 
                                    <svg className='stroke-white group-hover:stroke-green duration-300' width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 31.6667H33.25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M26.125 5.54166C26.7549 4.91177 27.6092 4.55791 28.5 4.55791C28.9411 4.55791 29.3778 4.64478 29.7853 4.81358C30.1928 4.98237 30.5631 5.22977 30.875 5.54166C31.1869 5.85355 31.4343 6.22382 31.6031 6.63132C31.7719 7.03883 31.8588 7.47559 31.8588 7.91666C31.8588 8.35774 31.7719 8.7945 31.6031 9.202C31.4343 9.60951 31.1869 9.97977 30.875 10.2917L11.0833 30.0833L4.75 31.6667L6.33333 25.3333L26.125 5.54166Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* card kategori spir perut bawah */}
                        <div className="grid grid-cols-12 place-content-center text-white text-lg text-center gap-x-2 mb-2">
                            <div className="col-span-3 bg-navy py-3 rounded-md">
                                <h1>Spir Perut Bawah</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_perut_bawah?.Remaja_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_perut_bawah?.Remaja_prpn}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_perut_bawah?.Privat_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_perut_bawah?.Privat_prpn}</h1>
                            </div>
                            <div className="bg-navy rounded-md flex justify-center items-center">
                                <button onClick={() => editModal(dataStandartFisik.spir_perut_bawah)} className="bg-green hover:bg-white duration-300 rounded-md p-2 group"> 
                                    <svg className='stroke-white group-hover:stroke-green duration-300' width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 31.6667H33.25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M26.125 5.54166C26.7549 4.91177 27.6092 4.55791 28.5 4.55791C28.9411 4.55791 29.3778 4.64478 29.7853 4.81358C30.1928 4.98237 30.5631 5.22977 30.875 5.54166C31.1869 5.85355 31.4343 6.22382 31.6031 6.63132C31.7719 7.03883 31.8588 7.47559 31.8588 7.91666C31.8588 8.35774 31.7719 8.7945 31.6031 9.202C31.4343 9.60951 31.1869 9.97977 30.875 10.2917L11.0833 30.0833L4.75 31.6667L6.33333 25.3333L26.125 5.54166Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* card kategori spir dada */}
                        <div className="grid grid-cols-12 place-content-center text-white text-lg text-center gap-x-2 mb-2">
                            <div className="col-span-3 bg-navy py-3 rounded-md">
                                <h1>Spir Dada</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_dada?.Remaja_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_dada?.Remaja_prpn}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_dada?.Privat_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.spir_dada?.Privat_prpn}</h1>
                            </div>
                            <div className="bg-navy rounded-md flex justify-center items-center">
                                <button onClick={() => editModal(dataStandartFisik.spir_dada)} className="bg-green hover:bg-white duration-300 rounded-md p-2 group"> 
                                    <svg className='stroke-white group-hover:stroke-green duration-300' width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 31.6667H33.25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M26.125 5.54166C26.7549 4.91177 27.6092 4.55791 28.5 4.55791C28.9411 4.55791 29.3778 4.64478 29.7853 4.81358C30.1928 4.98237 30.5631 5.22977 30.875 5.54166C31.1869 5.85355 31.4343 6.22382 31.6031 6.63132C31.7719 7.03883 31.8588 7.47559 31.8588 7.91666C31.8588 8.35774 31.7719 8.7945 31.6031 9.202C31.4343 9.60951 31.1869 9.97977 30.875 10.2917L11.0833 30.0833L4.75 31.6667L6.33333 25.3333L26.125 5.54166Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* card kategori plank */}
                        <div className="grid grid-cols-12 place-content-center text-white text-lg text-center gap-x-2 mb-2">
                            <div className="col-span-3 bg-navy py-3 rounded-md">
                                <h1>Plank</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.plank?.Remaja_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.plank?.Remaja_prpn}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.plank?.Privat_lk}</h1>
                            </div>
                            <div className="col-span-2 bg-navy py-3 rounded-md">
                                <h1>{dataStandartFisik.plank?.Privat_prpn}</h1>
                            </div>
                            <div className="bg-navy rounded-md flex justify-center items-center">
                                <button onClick={() => editModal(dataStandartFisik.plank)} className="bg-green hover:bg-white duration-300 rounded-md p-2 group"> 
                                    <svg className='stroke-white group-hover:stroke-green duration-300' width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 31.6667H33.25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M26.125 5.54166C26.7549 4.91177 27.6092 4.55791 28.5 4.55791C28.9411 4.55791 29.3778 4.64478 29.7853 4.81358C30.1928 4.98237 30.5631 5.22977 30.875 5.54166C31.1869 5.85355 31.4343 6.22382 31.6031 6.63132C31.7719 7.03883 31.8588 7.47559 31.8588 7.91666C31.8588 8.35774 31.7719 8.7945 31.6031 9.202C31.4343 9.60951 31.1869 9.97977 30.875 10.2917L11.0833 30.0833L4.75 31.6667L6.33333 25.3333L26.125 5.54166Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* akhir konten utama */}

                    {/* footer */}
                    <Footer />
                    {/* akhir footer */}

                </div>
                {/* akhir wrapper konten utama */}
            </div>

            {/* memanggil modal */}
            <globalState.Provider value={{ 
                showModalUktFisik, setShowModalUktFisik, ukt, setUkt, action, dataStandartFisik, setDataStandartFisik, 
                
                // mft
                mft_remaja_laki_laki, set_mft_remaja_laki_laki, mft_remaja_perempuan, set_mft_remaja_perempuan, mft_privat_laki_laki, set_mft_privat_laki_laki, mft_privat_perempuan, set_mft_privat_perempuan,
                
                // push up
                push_up_remaja_laki_laki, set_push_up_remaja_laki_laki, push_up_remaja_perempuan, set_push_up_remaja_perempuan, push_up_privat_laki_laki, set_push_up_privat_laki_laki, push_up_privat_perempuan, set_push_up_privat_perempuan,
                
                // spir perut atas
                spir_perut_atas_remaja_laki_laki, set_spir_perut_atas_remaja_laki_laki, spir_perut_atas_remaja_perempuan, set_spir_perut_atas_remaja_perempuan, spir_perut_atas_privat_laki_laki, set_spir_perut_atas_privat_laki_laki, spir_perut_atas_privat_perempuan, set_spir_perut_atas_privat_perempuan,

                // spir perut bawah
                spir_perut_bawah_remaja_laki_laki, set_spir_perut_bawah_remaja_laki_laki, spir_perut_bawah_remaja_perempuan, set_spir_perut_bawah_remaja_perempuan, spir_perut_bawah_privat_laki_laki, set_spir_perut_bawah_privat_laki_laki, spir_perut_bawah_privat_perempuan, set_spir_perut_bawah_privat_perempuan,

                // spir dada
                spir_dada_remaja_laki_laki, set_spir_dada_remaja_laki_laki, spir_dada_remaja_perempuan, set_spir_dada_remaja_perempuan, spir_dada_privat_laki_laki, set_spir_dada_privat_laki_laki, spir_dada_privat_perempuan, set_spir_dada_privat_perempuan,

                // plank
                plank_remaja_laki_laki, set_plank_remaja_laki_laki, plank_remaja_perempuan, set_plank_remaja_perempuan, plank_privat_laki_laki, set_plank_privat_laki_laki, plank_privat_perempuan, set_plank_privat_perempuan,
                }}>
                <Modal_ukt_fisik />
            </globalState.Provider>
        </>
    )
}

export default detail_fisik_putih