'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BestsellersType } from '@/app/types/bestsellers'
import { Icon } from '@iconify/react/dist/iconify.js'

const Bestsellers = () => {
    const [bestsellers, setBestsellers] = useState<BestsellersType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setBestsellers(data.BestsellersData)
            } catch (error) {
                console.error('Error fetching bestsellers:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <section id='bestsellers' className='scroll-mt-12 pb-20'>
            <div className='container mx-auto px-4'>
                <div className='sm:flex justify-between items-center mb-10'>
                    <h2 className='text-midnight_text text-3xl font-semibold '>
                        Bestsellers
                    </h2>
                    <Link
                        href={'/'}
                        className='text-primary text-lg font-medium hover:underline duration-500'>
                        More&nbsp;&gt;
                    </Link>
                </div>

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
                        : bestsellers.map((item, i) => (
                            <div key={i}>
                                <div className='bg-white m-3 px-3 pt-3 pb-6 shadow-md rounded-2xl h-[400px] border border-black/10'>
                                    <div className='relative rounded-3xl'>
                                        <Image
                                            src={item.imgSrc}
                                            alt={item.name}
                                            width={389}
                                            height={262}
                                            className='w-full rounded-2xl object-cover mb-4'
                                        />
                                        <div className='absolute right-5 -bottom-3 bg-secondary rounded-full px-4 py-1'>
                                            <p className='text-white uppercase text-center text-sm font-medium'>
                                                best seller
                                            </p>
                                        </div>
                                    </div>

                                    <div className='w-full px-3 pt-4 mb-4'>
                                        <h6 className='text-black text-lg font-semibold max-w-[75%] mb-1'>
                                            {item.name}
                                        </h6>
                                        <p className='text-sm font-normal text-black/60 '>
                                            {item.desc}
                                        </p>

                                        <div className='flex justify-between items-center mt-2'>
                                            <div className='flex items-center gap-2'>
                                                <Icon
                                                    icon='solar:star-bold'
                                                    className='text-yellow-500 text-lg'
                                                />
                                                <p className='text-yellow-500 font-medium text-sm'>
                                                    {item.rating.toFixed(1)}
                                                </p>
                                            </div>

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
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Bestsellers
