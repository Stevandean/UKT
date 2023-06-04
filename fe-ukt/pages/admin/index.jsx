import React from 'react'
import Sidebar from './components/sidebar'
import Header from './components/header'
import Footer from './components/footer'

const index = () => {
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

                    {/* data count indicator wrapper */}
                    <div className="grid grid-cols-4 gap-x-5">
                        
                        {/* card siswa */}
                        <div className="bg-navy hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5">
                            
                            {/* inner bg */}
                            <div className="bg-navy p-5 rounded-md space-y-5">

                                {/* data name */}
                                <div className="flex justify-between items-center">
                                    <h1 className='text-green text-lg'>Siswa</h1>
                                    <svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5503 2.64594L8.70472 0.0307256C8.57159 -0.0102419 8.42922 -0.0102419 8.29609 0.0307256L0.458636 2.64594H0.442291L0.360566 2.6868H0.352393L0.270668 2.73583C0.270668 2.74401 0.262496 2.74401 0.254323 2.75218L0.188943 2.80939L0.131735 2.87477C0.131735 2.88294 0.123563 2.88294 0.123563 2.89111L0.0745273 2.96466C0.0745273 2.97284 0.0745273 2.97284 0.0663548 2.98101L0.0336647 3.05456L0.00914718 3.14446V3.16898C0.00108611 3.201 -0.00167465 3.23413 0.000974615 3.26705V9.80507C0.000974615 9.97847 0.0698571 10.1448 0.192469 10.2674C0.315081 10.39 0.481378 10.4589 0.654777 10.4589C0.828176 10.4589 0.994473 10.39 1.11708 10.2674C1.2397 10.1448 1.30858 9.97847 1.30858 9.80507V4.1742L4.05455 5.08952C3.53867 5.91527 3.26669 6.87002 3.26999 7.84366C3.27029 8.72916 3.4954 9.60009 3.92422 10.3748C4.35304 11.1496 4.97154 11.8028 5.72175 12.2732C4.16275 12.8629 2.83182 13.9334 1.92152 15.3297C1.82873 15.4764 1.7973 15.6537 1.83399 15.8234C1.87067 15.9931 1.97255 16.1416 2.11766 16.2369C2.18887 16.284 2.26874 16.3166 2.35264 16.3327C2.43653 16.3488 2.52279 16.3481 2.6064 16.3306C2.69002 16.3131 2.76934 16.2792 2.83976 16.2309C2.91017 16.1825 2.9703 16.1206 3.01664 16.0489C3.61007 15.1348 4.42259 14.3835 5.38031 13.8634C6.33803 13.3434 7.41058 13.0709 8.50041 13.0709C9.59023 13.0709 10.6628 13.3434 11.6205 13.8634C12.5782 14.3835 13.3907 15.1348 13.9842 16.0489C14.0439 16.1395 14.1252 16.2139 14.2208 16.2652C14.3163 16.3166 14.4232 16.3433 14.5317 16.3431C14.657 16.3444 14.7796 16.3073 14.8832 16.2369C15.0283 16.1416 15.1301 15.9931 15.1668 15.8234C15.2035 15.6537 15.1721 15.4764 15.0793 15.3297C14.169 13.9334 12.8381 12.8629 11.2791 12.2732C12.0293 11.8028 12.6478 11.1496 13.0766 10.3748C13.5054 9.60009 13.7305 8.72916 13.7308 7.84366C13.7341 6.87002 13.4621 5.91527 12.9463 5.08952L16.5503 3.88816C16.6812 3.84517 16.795 3.76197 16.8758 3.65044C16.9565 3.53891 17 3.40474 17 3.26705C17 3.12936 16.9565 2.99518 16.8758 2.88365C16.795 2.77212 16.6812 2.68893 16.5503 2.64594ZM12.4232 7.84366C12.4232 8.88406 12.0099 9.88184 11.2743 10.6175C10.5386 11.3532 9.5408 11.7665 8.50041 11.7665C7.46001 11.7665 6.46223 11.3532 5.72656 10.6175C4.99089 9.88184 4.57759 8.88406 4.57759 7.84366C4.57917 7.00658 4.84518 6.19139 5.33764 5.51449L8.29609 6.50337C8.4288 6.54703 8.57201 6.54703 8.70472 6.50337L11.6632 5.51449C12.1556 6.19139 12.4216 7.00658 12.4232 7.84366ZM11.6632 4.14151H11.655L8.50041 5.19576L5.34581 4.14151H5.33764L2.72243 3.26705L8.50041 1.33833L14.2784 3.26705L11.6632 4.14151Z" fill="#42C6A3"/>
                                    </svg>
                                </div>

                                {/* data count */}
                                <h1 className='text-white text-3xl font-semibold tracking-wider'>1180</h1>
                            </div>
                        </div>
                        
                        {/* card penguji */}
                        <div className="bg-navy hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5">
                            
                            {/* inner bg */}
                            <div className="bg-navy p-5 rounded-md space-y-5">

                                {/* data name */}
                                <div className="flex justify-between items-center">
                                    <h1 className='text-green text-lg'>Penguji</h1>
                                    <svg width="19" height="17" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.6923 0H1.30769C0.960871 0 0.628254 0.137774 0.383014 0.383014C0.137774 0.628254 0 0.960871 0 1.30769V13.0769C0 13.4237 0.137774 13.7564 0.383014 14.0016C0.628254 14.2468 0.960871 14.3846 1.30769 14.3846H2.40288C2.52669 14.385 2.64799 14.3497 2.75233 14.2831C2.85666 14.2164 2.93963 14.1211 2.99135 14.0087C3.31126 13.3391 3.81414 12.7738 4.44184 12.3781C5.06954 11.9823 5.79642 11.7723 6.53846 11.7723C7.2805 11.7723 8.00738 11.9823 8.63508 12.3781C9.26278 12.7738 9.76566 13.3391 10.0856 14.0087C10.1373 14.1211 10.2203 14.2164 10.3246 14.2831C10.4289 14.3497 10.5502 14.385 10.674 14.3846H15.6923C16.0391 14.3846 16.3717 14.2468 16.617 14.0016C16.8622 13.7564 17 13.4237 17 13.0769V1.30769C17 0.960871 16.8622 0.628254 16.617 0.383014C16.3717 0.137774 16.0391 0 15.6923 0ZM4.57692 8.5C4.57692 8.11204 4.69197 7.7328 4.9075 7.41023C5.12304 7.08765 5.42939 6.83624 5.78781 6.68777C6.14624 6.53931 6.54064 6.50047 6.92114 6.57615C7.30164 6.65184 7.65115 6.83866 7.92548 7.11298C8.19981 7.38731 8.38662 7.73682 8.46231 8.11732C8.538 8.49782 8.49915 8.89222 8.35069 9.25065C8.20222 9.60907 7.95081 9.91542 7.62823 10.131C7.30566 10.3465 6.92642 10.4615 6.53846 10.4615C6.01889 10.4594 5.52122 10.252 5.15382 9.88464C4.78643 9.51725 4.57907 9.01957 4.57692 8.5ZM15.6923 13.0769H11.0663C10.5206 12.1381 9.69866 11.3903 8.7125 10.9356C9.20745 10.4949 9.55677 9.91414 9.71416 9.27037C9.87155 8.62661 9.82957 7.95021 9.59379 7.33085C9.358 6.71149 8.93955 6.17841 8.39391 5.80228C7.84826 5.42616 7.20119 5.22474 6.53846 5.22474C5.87574 5.22474 5.22866 5.42616 4.68302 5.80228C4.13737 6.17841 3.71892 6.71149 3.48314 7.33085C3.24735 7.95021 3.20537 8.62661 3.36276 9.27037C3.52015 9.91414 3.86947 10.4949 4.36442 10.9356C3.37826 11.3903 2.55631 12.1381 2.01058 13.0769H1.30769V1.30769H15.6923V13.0769ZM2.61538 4.57692V3.26923C2.61538 3.09582 2.68427 2.92951 2.80689 2.80689C2.92951 2.68427 3.09582 2.61538 3.26923 2.61538H13.7308C13.9042 2.61538 14.0705 2.68427 14.1931 2.80689C14.3157 2.92951 14.3846 3.09582 14.3846 3.26923V11.1154C14.3846 11.2888 14.3157 11.4551 14.1931 11.5777C14.0705 11.7003 13.9042 11.7692 13.7308 11.7692H12.4231C12.2497 11.7692 12.0834 11.7003 11.9607 11.5777C11.8381 11.4551 11.7692 11.2888 11.7692 11.1154C11.7692 10.942 11.8381 10.7757 11.9607 10.653C12.0834 10.5304 12.2497 10.4615 12.4231 10.4615H13.0769V3.92308H3.92308V4.57692C3.92308 4.75033 3.85419 4.91664 3.73157 5.03926C3.60895 5.16188 3.44264 5.23077 3.26923 5.23077C3.09582 5.23077 2.92951 5.16188 2.80689 5.03926C2.68427 4.91664 2.61538 4.75033 2.61538 4.57692Z" fill="#42C6A3"/>
                                    </svg>

                                </div>

                                {/* data count */}
                                <h1 className='text-white text-3xl font-semibold tracking-wider'>1180</h1>
                            </div>
                        </div>
                        
                        {/* card pengurus cabang */}
                        <div className="bg-navy hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5">
                            
                            {/* inner bg */}
                            <div className="bg-navy p-5 rounded-md space-y-5">

                                {/* data name */}
                                <div className="flex justify-between items-center">
                                    <h1 className='text-green text-lg'>Pengurus Cabang</h1>
                                    <svg width="18" height="19" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.63281 7.85254C8.8431 7.93555 9.04785 8.02686 9.24707 8.12646C9.44629 8.22607 9.63997 8.33952 9.82812 8.4668C9.70638 8.59961 9.5957 8.73796 9.49609 8.88184C9.39648 9.02572 9.30518 9.18066 9.22217 9.34668C8.79606 9.06999 8.34229 8.8597 7.86084 8.71582C7.37939 8.57194 6.88411 8.5 6.375 8.5C5.88802 8.5 5.41764 8.56364 4.96387 8.69092C4.51009 8.8182 4.08675 8.99528 3.69385 9.22217C3.30094 9.44906 2.94401 9.72575 2.62305 10.0522C2.30208 10.3787 2.02539 10.7384 1.79297 11.1313C1.56055 11.5243 1.3807 11.9476 1.25342 12.4014C1.12614 12.8551 1.0625 13.3255 1.0625 13.8125H0C0 13.1484 0.0968424 12.5093 0.290527 11.895C0.484212 11.2808 0.763672 10.7135 1.12891 10.1934C1.49414 9.67318 1.92578 9.2111 2.42383 8.80713C2.92188 8.40316 3.48633 8.08496 4.11719 7.85254C3.49186 7.44303 3.00488 6.92839 2.65625 6.30859C2.30762 5.6888 2.13053 5.0026 2.125 4.25C2.125 3.66341 2.23568 3.11279 2.45703 2.59814C2.67839 2.0835 2.97998 1.63249 3.36182 1.24512C3.74365 0.857747 4.19466 0.553385 4.71484 0.332031C5.23503 0.110677 5.78841 0 6.375 0C6.96159 0 7.51221 0.110677 8.02686 0.332031C8.5415 0.553385 8.99251 0.85498 9.37988 1.23682C9.76725 1.61865 10.0716 2.06966 10.293 2.58984C10.5143 3.11003 10.625 3.66341 10.625 4.25C10.625 4.61523 10.5807 4.97217 10.4922 5.3208C10.4036 5.66943 10.2708 5.9987 10.0938 6.30859C9.91667 6.61849 9.70915 6.90348 9.47119 7.16357C9.23324 7.42367 8.95378 7.65332 8.63281 7.85254ZM3.1875 4.25C3.1875 4.69271 3.27051 5.10498 3.43652 5.48682C3.60254 5.86865 3.82943 6.20622 4.11719 6.49951C4.40495 6.79281 4.74251 7.02246 5.12988 7.18848C5.51725 7.35449 5.93229 7.4375 6.375 7.4375C6.81217 7.4375 7.22445 7.35449 7.61182 7.18848C7.99919 7.02246 8.33675 6.79557 8.62451 6.50781C8.91227 6.22005 9.14193 5.88249 9.31348 5.49512C9.48503 5.10775 9.56803 4.69271 9.5625 4.25C9.5625 3.81283 9.47949 3.40055 9.31348 3.01318C9.14746 2.62581 8.92057 2.28825 8.63281 2.00049C8.34505 1.71273 8.00472 1.48307 7.61182 1.31152C7.21891 1.13997 6.80664 1.05697 6.375 1.0625C5.93229 1.0625 5.52002 1.14551 5.13818 1.31152C4.75635 1.47754 4.41878 1.70443 4.12549 1.99219C3.83219 2.27995 3.60254 2.62028 3.43652 3.01318C3.27051 3.40609 3.1875 3.81836 3.1875 4.25ZM15.4062 11.1562C15.4062 11.444 15.362 11.7235 15.2734 11.9946C15.1849 12.2658 15.0521 12.5176 14.875 12.75V17L12.75 15.9375L10.625 17V12.75C10.4535 12.5176 10.3234 12.2658 10.2349 11.9946C10.1463 11.7235 10.0993 11.444 10.0938 11.1562C10.0938 10.791 10.1629 10.4479 10.3013 10.127C10.4396 9.80599 10.6278 9.52653 10.8657 9.28857C11.1037 9.05062 11.3859 8.8597 11.7124 8.71582C12.0389 8.57194 12.3848 8.5 12.75 8.5C13.1152 8.5 13.4583 8.56917 13.7793 8.70752C14.1003 8.84587 14.3797 9.03678 14.6177 9.28027C14.8556 9.52376 15.0465 9.80599 15.1904 10.127C15.3343 10.4479 15.4062 10.791 15.4062 11.1562ZM12.75 9.5625C12.5286 9.5625 12.3211 9.604 12.1274 9.68701C11.9338 9.77002 11.765 9.88346 11.6211 10.0273C11.4772 10.1712 11.3638 10.34 11.2808 10.5337C11.1978 10.7274 11.1562 10.9349 11.1562 11.1562C11.1562 11.3776 11.1978 11.5851 11.2808 11.7788C11.3638 11.9725 11.4772 12.1413 11.6211 12.2852C11.765 12.429 11.9338 12.5425 12.1274 12.6255C12.3211 12.7085 12.5286 12.75 12.75 12.75C12.9714 12.75 13.1789 12.7085 13.3726 12.6255C13.5662 12.5425 13.735 12.429 13.8789 12.2852C14.0228 12.1413 14.1362 11.9725 14.2192 11.7788C14.3022 11.5851 14.3438 11.3776 14.3438 11.1562C14.3438 10.9349 14.3022 10.7274 14.2192 10.5337C14.1362 10.34 14.0228 10.1712 13.8789 10.0273C13.735 9.88346 13.5662 9.77002 13.3726 9.68701C13.1789 9.604 12.9714 9.5625 12.75 9.5625ZM13.8125 15.2817V13.5884C13.4805 13.7378 13.1263 13.8125 12.75 13.8125C12.3737 13.8125 12.0195 13.7378 11.6875 13.5884V15.2817C11.8646 15.1932 12.0417 15.1074 12.2188 15.0244C12.3958 14.9414 12.5729 14.8501 12.75 14.7505C12.9271 14.8446 13.1042 14.9331 13.2812 15.0161C13.4583 15.0991 13.6354 15.1877 13.8125 15.2817Z" fill="#42C6A3"/>
                                    </svg>

                                </div>

                                {/* data count */}
                                <h1 className='text-white text-3xl font-semibold tracking-wider'>1180</h1>
                            </div>
                        </div>
                        
                        {/* card pengurus ranting */}
                        <div className="bg-navy hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5">
                            
                            {/* inner bg */}
                            <div className="bg-navy p-5 rounded-md space-y-5">

                                {/* data name */}
                                <div className="flex justify-between items-center">
                                    <h1 className='text-green text-lg'>Siswa</h1>
                                    <svg width="18" height="19" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                                        <path d="M8.63281 7.85254C8.8431 7.93555 9.04785 8.02686 9.24707 8.12646C9.44629 8.22607 9.63997 8.33952 9.82812 8.4668C9.70638 8.59961 9.5957 8.73796 9.49609 8.88184C9.39648 9.02572 9.30518 9.18066 9.22217 9.34668C8.79606 9.06999 8.34229 8.8597 7.86084 8.71582C7.37939 8.57194 6.88411 8.5 6.375 8.5C5.88802 8.5 5.41764 8.56364 4.96387 8.69092C4.51009 8.8182 4.08675 8.99528 3.69385 9.22217C3.30094 9.44906 2.94401 9.72575 2.62305 10.0522C2.30208 10.3787 2.02539 10.7384 1.79297 11.1313C1.56055 11.5243 1.3807 11.9476 1.25342 12.4014C1.12614 12.8551 1.0625 13.3255 1.0625 13.8125H0C0 13.1484 0.0968424 12.5093 0.290527 11.895C0.484212 11.2808 0.763672 10.7135 1.12891 10.1934C1.49414 9.67318 1.92578 9.2111 2.42383 8.80713C2.92188 8.40316 3.48633 8.08496 4.11719 7.85254C3.49186 7.44303 3.00488 6.92839 2.65625 6.30859C2.30762 5.6888 2.13053 5.0026 2.125 4.25C2.125 3.66341 2.23568 3.11279 2.45703 2.59814C2.67839 2.0835 2.97998 1.63249 3.36182 1.24512C3.74365 0.857747 4.19466 0.553385 4.71484 0.332031C5.23503 0.110677 5.78841 0 6.375 0C6.96159 0 7.51221 0.110677 8.02686 0.332031C8.5415 0.553385 8.99251 0.85498 9.37988 1.23682C9.76725 1.61865 10.0716 2.06966 10.293 2.58984C10.5143 3.11003 10.625 3.66341 10.625 4.25C10.625 4.61523 10.5807 4.97217 10.4922 5.3208C10.4036 5.66943 10.2708 5.9987 10.0938 6.30859C9.91667 6.61849 9.70915 6.90348 9.47119 7.16357C9.23324 7.42367 8.95378 7.65332 8.63281 7.85254ZM3.1875 4.25C3.1875 4.69271 3.27051 5.10498 3.43652 5.48682C3.60254 5.86865 3.82943 6.20622 4.11719 6.49951C4.40495 6.79281 4.74251 7.02246 5.12988 7.18848C5.51725 7.35449 5.93229 7.4375 6.375 7.4375C6.81217 7.4375 7.22445 7.35449 7.61182 7.18848C7.99919 7.02246 8.33675 6.79557 8.62451 6.50781C8.91227 6.22005 9.14193 5.88249 9.31348 5.49512C9.48503 5.10775 9.56803 4.69271 9.5625 4.25C9.5625 3.81283 9.47949 3.40055 9.31348 3.01318C9.14746 2.62581 8.92057 2.28825 8.63281 2.00049C8.34505 1.71273 8.00472 1.48307 7.61182 1.31152C7.21891 1.13997 6.80664 1.05697 6.375 1.0625C5.93229 1.0625 5.52002 1.14551 5.13818 1.31152C4.75635 1.47754 4.41878 1.70443 4.12549 1.99219C3.83219 2.27995 3.60254 2.62028 3.43652 3.01318C3.27051 3.40609 3.1875 3.81836 3.1875 4.25ZM15.4062 11.1562C15.4062 11.444 15.362 11.7235 15.2734 11.9946C15.1849 12.2658 15.0521 12.5176 14.875 12.75V17L12.75 15.9375L10.625 17V12.75C10.4535 12.5176 10.3234 12.2658 10.2349 11.9946C10.1463 11.7235 10.0993 11.444 10.0938 11.1562C10.0938 10.791 10.1629 10.4479 10.3013 10.127C10.4396 9.80599 10.6278 9.52653 10.8657 9.28857C11.1037 9.05062 11.3859 8.8597 11.7124 8.71582C12.0389 8.57194 12.3848 8.5 12.75 8.5C13.1152 8.5 13.4583 8.56917 13.7793 8.70752C14.1003 8.84587 14.3797 9.03678 14.6177 9.28027C14.8556 9.52376 15.0465 9.80599 15.1904 10.127C15.3343 10.4479 15.4062 10.791 15.4062 11.1562ZM12.75 9.5625C12.5286 9.5625 12.3211 9.604 12.1274 9.68701C11.9338 9.77002 11.765 9.88346 11.6211 10.0273C11.4772 10.1712 11.3638 10.34 11.2808 10.5337C11.1978 10.7274 11.1562 10.9349 11.1562 11.1562C11.1562 11.3776 11.1978 11.5851 11.2808 11.7788C11.3638 11.9725 11.4772 12.1413 11.6211 12.2852C11.765 12.429 11.9338 12.5425 12.1274 12.6255C12.3211 12.7085 12.5286 12.75 12.75 12.75C12.9714 12.75 13.1789 12.7085 13.3726 12.6255C13.5662 12.5425 13.735 12.429 13.8789 12.2852C14.0228 12.1413 14.1362 11.9725 14.2192 11.7788C14.3022 11.5851 14.3438 11.3776 14.3438 11.1562C14.3438 10.9349 14.3022 10.7274 14.2192 10.5337C14.1362 10.34 14.0228 10.1712 13.8789 10.0273C13.735 9.88346 13.5662 9.77002 13.3726 9.68701C13.1789 9.604 12.9714 9.5625 12.75 9.5625ZM13.8125 15.2817V13.5884C13.4805 13.7378 13.1263 13.8125 12.75 13.8125C12.3737 13.8125 12.0195 13.7378 11.6875 13.5884V15.2817C11.8646 15.1932 12.0417 15.1074 12.2188 15.0244C12.3958 14.9414 12.5729 14.8501 12.75 14.7505C12.9271 14.8446 13.1042 14.9331 13.2812 15.0161C13.4583 15.0991 13.6354 15.1877 13.8125 15.2817Z" fill="#42C6A3"/>
                                    </svg>
                                </div>

                                {/* data count */}
                                <h1 className='text-white text-3xl font-semibold tracking-wider'>1180</h1>
                            </div>
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
    )
}

export default index