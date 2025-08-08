'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { BussinessUnitesType } from '@/app/types/bussinessUnits'
import { Icon } from '@iconify/react/dist/iconify.js'

const BussinessUnits = () => {
    const [bussinessUnits, setBussinessUnits] = useState<BussinessUnitesType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setBussinessUnits(data.BussinessUnitsData)
            } catch (error) {
                console.error('Error fetching business units:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <section className='scroll-mt-12 py-12' id='bussiness-units'>
            <div className='container mx-auto px-4'>
                <h2 className='text-midnight_text text-3xl font-semibold mb-8 text-center'>
                    Our Business Units
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* Main Card: Ambil 1 kolom */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between col-span-1">
                        <Image
                            src="/path/to/image.jpg"
                            alt="Main Unit"
                            width={600}
                            height={400}
                            className="rounded-xl object-contain mb-4"
                        />
                    </div>

                    {/* Card Kecil: Isi sisa 3 kolom */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-span-1 lg:col-span-3">
                        {loading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="py-14 text-center rounded-2xl bg-white shadow-md h-[250px]"
                                >
                                    <div className="animate-pulse bg-gray-200 h-full w-full rounded-xl" />
                                </div>
                            ))
                            : bussinessUnits.slice(0, 6).map((item, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between h-auto hover:scale-105 transition"
                                >
                                    <div className='relative rounded-3xl'>
                                        <Image
                                            src={item.imgSrc}
                                            alt={item.name}
                                            width={389}
                                            height={262}
                                            className='w-full rounded-2xl object-cover mb-4'
                                        />
                                    </div>
                                    <div className='w-full px-3 mb-4'>
                                        <h6 className='text-black text-lg font-semibold max-w-[75%] mb-1'>
                                            {item.name}
                                        </h6>
                                        <p className='text-sm font-normal text-black/60 '>
                                            {item.description}
                                        </p>

                                        <div className='flex justify-between items-center mt-2'>
                                            {/* Rating */}
                                            <div className='flex items-center gap-2'>
                                                <Icon
                                                    icon='solar:star-bold'
                                                    className='text-yellow-500 text-lg'
                                                />
                                                <p className='text-yellow-500 font-medium text-sm'>
                                                    {item.rating.toFixed(1)}
                                                </p>
                                            </div>

                                            {/* Harga */}
                                            <div className='text-right'>
                                                {item.discPrice ? (
                                                    <>
                                                        <p className='text-black font-bold text-lg leading-tight'>
                                                            Rp{item.discPrice.toFixed(2)}
                                                        </p>
                                                        <p className='text-gray-500 line-through text-sm leading-tight'>
                                                            Rp{item.price.toFixed(2)}
                                                        </p>
                                                    </>
                                                ) : (
                                                    <p className='text-black font-bold text-lg leading-tight'>
                                                        Rp{item.price.toFixed(2)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-span-1 lg:col-span-3">
                        {loading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="py-14 text-center rounded-2xl bg-white shadow-md h-[250px]"
                                >
                                    <div className="animate-pulse bg-gray-200 h-full w-full rounded-xl" />
                                </div>
                            ))
                            : bussinessUnits.slice(0, 6).map((item, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between h-auto hover:scale-105 transition"
                                >
                                    <div className='relative rounded-3xl'>
                                        <Image
                                            src={item.imgSrc}
                                            alt={item.name}
                                            width={389}
                                            height={262}
                                            className='w-full rounded-2xl object-cover mb-4'
                                        />
                                    </div>
                                    <div className='w-full px-3 mb-4'>
                                        <h6 className='text-black text-lg font-semibold max-w-[75%] mb-1'>
                                            {item.name}
                                        </h6>
                                        <p className='text-sm font-normal text-black/60 '>
                                            {item.description}
                                        </p>

                                        <div className='flex justify-between items-center mt-2'>
                                            {/* Rating */}
                                            <div className='flex items-center gap-2'>
                                                <Icon
                                                    icon='solar:star-bold'
                                                    className='text-yellow-500 text-lg'
                                                />
                                                <p className='text-yellow-500 font-medium text-sm'>
                                                    {item.rating.toFixed(1)}
                                                </p>
                                            </div>

                                            {/* Harga */}
                                            <div className='text-right'>
                                                {item.discPrice ? (
                                                    <>
                                                        <p className='text-black font-bold text-lg leading-tight'>
                                                            Rp{item.discPrice.toFixed(2)}
                                                        </p>
                                                        <p className='text-gray-500 line-through text-sm leading-tight'>
                                                            Rp{item.price.toFixed(2)}
                                                        </p>
                                                    </>
                                                ) : (
                                                    <p className='text-black font-bold text-lg leading-tight'>
                                                        Rp{item.price.toFixed(2)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between col-span-1">
                        <Image
                            src="/path/to/image.jpg"
                            alt="Main Unit"
                            width={600}
                            height={400}
                            className="rounded-xl object-contain mb-4"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between col-span-1">
                        <Image
                            src="/path/to/image.jpg"
                            alt="Main Unit"
                            width={600}
                            height={400}
                            className="rounded-xl object-contain mb-4"
                        />
                    </div>

                    {/* Card Kecil: Isi sisa 3 kolom */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-span-1 lg:col-span-3">
                        {loading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="py-14 text-center rounded-2xl bg-white shadow-md h-[250px]"
                                >
                                    <div className="animate-pulse bg-gray-200 h-full w-full rounded-xl" />
                                </div>
                            ))
                            : bussinessUnits.slice(0, 6).map((item, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between h-auto hover:scale-105 transition"
                                >
                                    <div className='relative rounded-3xl'>
                                        <Image
                                            src={item.imgSrc}
                                            alt={item.name}
                                            width={389}
                                            height={262}
                                            className='w-full rounded-2xl object-cover mb-4'
                                        />
                                    </div>
                                    <div className='w-full px-3 mb-4'>
                                        <h6 className='text-black text-lg font-semibold max-w-[75%] mb-1'>
                                            {item.name}
                                        </h6>
                                        <p className='text-sm font-normal text-black/60 '>
                                            {item.description}
                                        </p>

                                        <div className='flex justify-between items-center mt-2'>
                                            {/* Rating */}
                                            <div className='flex items-center gap-2'>
                                                <Icon
                                                    icon='solar:star-bold'
                                                    className='text-yellow-500 text-lg'
                                                />
                                                <p className='text-yellow-500 font-medium text-sm'>
                                                    {item.rating.toFixed(1)}
                                                </p>
                                            </div>

                                            {/* Harga */}
                                            <div className='text-right'>
                                                {item.discPrice ? (
                                                    <>
                                                        <p className='text-black font-bold text-lg leading-tight'>
                                                            Rp{item.discPrice.toFixed(2)}
                                                        </p>
                                                        <p className='text-gray-500 line-through text-sm leading-tight'>
                                                            Rp{item.price.toFixed(2)}
                                                        </p>
                                                    </>
                                                ) : (
                                                    <p className='text-black font-bold text-lg leading-tight'>
                                                        Rp{item.price.toFixed(2)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BussinessUnits