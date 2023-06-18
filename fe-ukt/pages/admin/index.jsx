import React, { useEffect, useState } from 'react'
import Sidebar from './components/sidebar'
import Header from './components/header'
import Footer from './components/footer'
import { useRouter } from 'next/router'

const ChartBar = ({ name, percentages }) => {

    const [animationStarted, setAnimationStarted] = useState (false)

    useEffect(() => {
        const startAnimation = () => {
          setAnimationStarted(true);
        };
    
        setTimeout(startAnimation, 1000); // Waktu penundaan sebelum animasi dimulai (dalam milidetik)
    }, []);

    return (
        <div className="flex space-x-3">
            <div className="w-1/4">
                <span 
                    // className={` ${
                    //     animationStarted ? '' : 'animate-slide-in-right transition-opacity duration-3000 text-white'
                    // } 'text-white text-lg font-semibold tracking-wider'`}
                    className="text-white text-lg font-semibold tracking-wider"
                >{name}
                </span>
            </div>
            <div className="w-3/4">
                <div className="flex h-6 rounded-full text-white">
                    <div
                        className={` ${
                            animationStarted ? '' : 'animate-opacity-from-left'
                        } "text-center bg-red rounded-l-md"`}
                        style={{ width: `${percentages.red}%`}}
                    >{percentages.red + '%'}
                    </div>
                    <div
                        className="text-center bg-yellow"
                        style={
                            { width: `${percentages.yellow}%`}
                        }
                    >{percentages.yellow + '%'}
                    </div>
                    <div
                        className="text-center bg-green rounded-r-md"
                        style={{ width: `${percentages.green}%`}}
                    >{percentages.green + '%'}
                    </div>
                </div>
            </div>
        </div>
    );
};


const index = () => {

    // state data chart bar
    const data = [
        { name: 'Keshan', percentages: { red: 40, yellow: 30, green: 30 } },
        { name: 'Senam', percentages: { red: 20, yellow: 40, green: 40 } },
        { name: 'Jurus', percentages: { red: 10, yellow: 60, green: 30 } },
        { name: 'Fisik', percentages: { red: 50, yellow: 20, green: 30 } },
        { name: 'Teknik', percentages: { red: 30, yellow: 10, green: 60 } },
        { name: 'Sambung', percentages: { red: 60, yellow: 30, green: 10 } },
    ];

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

                    {/* wrapper page name and download data */}
                    <div className="flex justify-between items-center text-white mb-7">

                        {/* page name */}
                        <h1 className='text-2xl tracking-wider uppercase font-bold'>Dashboard</h1>
                        
                        {/* download button */}
                        <div className="bg-purple rounded-md px-5 py-2 flex items-center gap-x-2">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.25 7.5L9 11.25L12.75 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 11.25V2.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h1>Download Data</h1>
                        </div>
                    </div>

                    {/* wrapper chart bar description and data set dropdown */}
                    <div className="flex justify-between mb-7">

                        {/* wrapper chart bar description */}
                        <div id='animationElement' className="grid grid-cols-3 gap-x-8 text-white">
                            <div className="inline-flex items-center gap-x-2">
                                <div className="bg-red h-5 w-5">
                                </div>
                                <h1 className='text-lg font-semibold'>Kurang</h1>
                            </div>
                            <div className="inline-flex items-center gap-x-2">
                                <div className="bg-yellow h-5 w-5">
                                </div>
                                <h1 className='text-lg font-semibold'>Kurang</h1>
                            </div>
                            <div className="inline-flex items-center gap-x-2">
                                <div className="bg-green h-5 w-5">
                                </div>
                                <h1 className='text-lg font-semibold'>Kurang</h1>
                            </div>
                        </div>

                        {/* wrapper data set */}
                        <div className="inline-flex space-x-2">
                            <h1 className='px-3 text-white text-lg font-semibold tracking-wider'>Data:</h1>

                            {/* data set dropdown */}
                            <div className="relative w-full">
                                <div className='bg-white rounded-md px-2 w-48'>
                                    <select className='w-full bg-white focus:outline-none' 
                                    // name={idBiru} onChange = {(e) => setIdBiru (e.target.value)} required
                                    >
                                        <option></option>
                                        <option 
                                        // value={item.id}
                                        >Laki - Laki</option>
                                        <option 
                                        // value={item.id}
                                        >Perempuan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* wrapper chart bar */}
                    <div className="bg-navy p-7 rounded-lg space-y-4">
                        <div className="text-white text-2xl font-semibold tracking-wider text-center mb-6 uppercase">Ranting Trenggalek</div>
                        {data.map((item, index) => (
                            <ChartBar key={index} name={item.name} percentages={item.percentages} />
                        ))}
                    </div>
                </div>
                {/* akhir konten utama */}

                {/* footer */}
                <Footer />
                {/* akhir footer */}

            </div>
            {/* akhir wrapper konten utama */}
        </div>
    )
}

export default index