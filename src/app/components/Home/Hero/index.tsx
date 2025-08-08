'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BannerCarousel = () => {
  const [banners, setBanners] = useState<{ imgSrc: string }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setBanners(data.Banners)
      } catch (error) {
        console.error('Error fetching banners:', error)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
  }

  return (
    <section id='home' className='text-center'>
      <div className='container py-5'>
        <Slider {...settings}>
          {banners.map((item, i) => (
            <div key={i} className="px-1">
              <Image
                src={item.imgSrc}
                alt={`Banner ${i + 1}`}
                width={1200}
                height={500}
                className='w-full h-auto rounded-lg object-cover'
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default BannerCarousel
