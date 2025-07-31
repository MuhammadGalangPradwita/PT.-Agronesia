'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ValuePropositionsTypes } from '@/app/types/valuePropositions'

const ValuePropositions = () => {
  const [valuePropositions, setValuePropositions] = useState<ValuePropositionsTypes[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data') // bisa disesuaikan endpoint-nya
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setValuePropositions(data.ValuePropositionsData)
      } catch (error) {
        console.error('Error fetching value propositions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section className='scroll-mt-12 py-12' id='value-propositions'>
      <div className='container mx-auto px-4'>
        <h2 className='text-midnight_text text-3xl font-semibold mb-8 text-center'>
          Our Value Propositions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="py-14 text-center rounded-2xl bg-white shadow-lg h-[250px]"
              >
                <div className="animate-pulse bg-gray-200 h-full w-full rounded-xl" />
              </div>
            ))
            : valuePropositions.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-2xl  text-center h-full flex flex-col items-center justify-between transform"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-xl object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-midnight_text mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default ValuePropositions
