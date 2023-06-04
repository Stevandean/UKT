import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <>
            <div className="font-lato">

                {/* awal wrapper konten utama */}
                <div className="w-full h-screen">

                    {/* konten utama */}
                    <div className="min-h-full bg-darkBlue px-10 py-20">
                        <div className="text-white flex flex-col items-center text-center">

                            {/* psht icon */}
                            <img className='w-32 mb-4' src="/images/psht-icon.png" alt="" />

                            {/* title */}
                            <h1 className='text-xl font-semibold mb-12'>Uji Kenaikan Tingkat Cabang Trenggalek</h1>

                            <h1 className='text-lg tracking-wide text-green'>0800113784</h1>
                            <h1 className='text-xl tracking-wide text-white font-semibold'>Nadia Azza Desti - Trenggalek</h1>

                            <Link href={'siswa/ujian'} className='bg-purple py-1.5 w-3/4 rounded-md text-lg font-semibold hover:scale-105 transition ease-in-out duration-300 absolute bottom-14'>Mulai Ujian</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index