'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { BussinessUnitesType } from '@/app/types/bussinessUnits'

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading
                        ? Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className="py-14 text-center rounded-2xl bg-white shadow-md h-[250px]"
                            >
                                <div className="animate-pulse bg-gray-200 h-full w-full rounded-xl" />
                            </div>
                        ))
                        : bussinessUnits.map((unit, i) => (
                            <div
                                key={i}
                                className="p-5 bg-white rounded-2xl shadow-lg text-center h-full flex flex-col items-center justify-between transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                <Image
                                    src={unit.imgSrc}
                                    alt={unit.name}
                                    width={389}
                                    height={262}
                                    className="rounded-xl object-contain mb-4"
                                />
                                <h3 className="text-lg font-bold text-midnight_text mb-2">
                                    {unit.name}
                                </h3>
                                <p className="text-sm text-gray-600">{unit.description}</p>
                                <div className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-primary transition duration-300'>
                                    <a className='text-white-500 font-medium' href="">See Product</a>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default BussinessUnits
