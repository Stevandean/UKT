import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import Footer from '../components/footer'
import { useRouter } from 'next/router'

const keSHan = () => {

    // deklarasi router
    const router = useRouter ()

    // function login checker
    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('admin') === null) {
            router.push ('/admin/login')
        }
    }

    useEffect (() => {
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

                        {/* page name */}
                        <h1 className='text-2xl tracking-wider uppercase font-bold'>Materi - KESHAN</h1>

                        {/* search */}
                        <div className="bg-purple rounded-md px-5 py-2 flex items-center gap-x-2 w-72">
                            <svg className='z-50' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.75901 13.491 2.625 9.625 2.625C5.75901 2.625 2.625 5.75901 2.625 9.625C2.625 13.491 5.75901 16.625 9.625 16.625Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.3746 18.3751L14.5684 14.5688" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <input className='bg-transparent placeholder:text-white placeholder:tracking-wider placeholder:text-sm w-full focus:outline-none' placeholder='Search' type="text" />
                        </div>
                    </div>

                    {/* data count */}
                    <div className="grid grid-cols-2 gap-5">

                        {/* card ukt jambon */}
                        <Link href={'./keSHan/ukt_jambon'} className="bg-navy hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5">

                            {/* inner bg */}
                            <div className="bg-navy p-5 rounded-md space-y-5">

                                {/* data name */}
                                <div className="flex justify-between items-center">
                                    <h1 className='text-green text-2xl'>UKT Jambon</h1>    
                                    <svg width="30" height="30" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="77" height="77" rx="3" fill="#FF32DE"/>
                                    </svg>
                                </div>

                                {/* data count */}
                                <h1 className='text-white text-4xl font-semibold tracking-wider'>1180</h1>
                            </div>
                        </Link>

                        {/* card ukt hijau */}
                        <Link href={'./keSHan/ukt_hijau'} className="bg-navy hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5">

                            {/* inner bg */}
                            <div className="bg-navy p-5 rounded-md space-y-5">

                                {/* data name */}
                                <div className="flex justify-between items-center">
                                    <h1 className='text-green text-2xl'>UKT Hijau</h1>    
                                    <svg width="30" height="30" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="77" height="77" rx="3" fill="#0B8800"/>
                                    </svg>
                                </div>

                                {/* data count */}
                                <h1 className='text-white text-4xl font-semibold tracking-wider'>1180</h1>
                            </div>
                        </Link>

                        {/* card ukt putih */}
                        <Link href={'./keSHan/ukt_putih'} className="bg-navy hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5">

                            {/* inner bg */}
                            <div className="bg-navy p-5 rounded-md space-y-5">

                                {/* data name */}
                                <div className="flex justify-between items-center">
                                    <h1 className='text-green text-2xl'>UKT Putih</h1>    
                                    <svg width="30" height="30" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="77" height="77" rx="3" fill="#FFFFFF"/>
                                    </svg>
                                </div>

                                {/* data count */}
                                <h1 className='text-white text-4xl font-semibold tracking-wider'>1180</h1>
                            </div>
                        </Link>

                        {/* card ukcw */}
                        <Link href={'./keSHan/ukcw'} className="bg-navy hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5">

                            {/* inner bg */}
                            <div className="bg-navy p-5 rounded-md space-y-5">

                                {/* data name */}
                                <div className="flex justify-between items-center">
                                    <h1 className='text-green text-2xl'>UKCW</h1>    
                                    <svg width="34" height="34" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.5 0L0 4.63636L3.09091 6.32091V10.9573L8.5 13.9091L13.9091 10.9573V6.32091L15.4545 5.47864V10.8182H17V4.63636L8.5 0ZM13.77 4.63636L8.5 7.51091L3.23 4.63636L8.5 1.76182L13.77 4.63636ZM12.3636 10.0455L8.5 12.1473L4.63636 10.0455V7.16318L8.5 9.27273L12.3636 7.16318V10.0455Z" fill="white"/>
                                    </svg>

                                </div>

                                {/* data count */}
                                <h1 className='text-white text-4xl font-semibold tracking-wider'>1180</h1>
                            </div>
                        </Link>
                    </div>

                </div>
                {/* akhir konten utama */}

                {/* footer */}
                <Footer />
                {/* akhir footer */}

            </div>
            {/* akhir wrapper konten utama */}
        </div>  
    </>

    )
}

export default keSHan