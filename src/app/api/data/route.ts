import { CourseType } from '@/app/types/course'
import { FooterLinkType } from '@/app/types/footerlink'
import { MentorType } from '@/app/types/mentor'
import { HeaderType } from '@/app/types/menu'
import { TestimonialType } from '@/app/types/testimonial'
import { NextResponse } from 'next/server'
import { BussinessUnitesType } from '@/app/types/bussinessUnits'
import { ValuePropositionsTypes } from '@/app/types/valuePropositions'
import { BestsellersType } from '@/app/types/bestsellers'
import { Icon } from '@iconify/react/dist/iconify.js'


const HeaderData: HeaderType[] = [
  // { label: 'Home', href: '/' },
  {
    label: 'Home', href: '/',
  },
  { 
    label: 'Products & Services',
    href: '',
    icon: 'gravity-ui:chevron-down',
    children: [
      { label: 'Inkaba', href: '/#courses' },
      { label: 'BMC', href: '/#courses' },
      { label: 'Saripetojo', href: '/#courses' },
    ],
   },
  { label: 'About Us', href: '/#mentor' },
  { label: 'Contact Us', href: '/#contact' },
  // { label: 'Docs', href: '/documentation' },
]

const Banners : { imgSrc: string }[] = [
  {
    imgSrc: '/images/banners/banners1.png',
  },
  {
    imgSrc: '/images/banners/banners2.png',
  },
  {
    imgSrc: '/images/banners/banners3.png',
  },
]

const TechGaintsData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
  {
    imgSrc: '/images/companies/google.svg',
  },
  {
    imgSrc: '/images/companies/hubspot.svg',
  },
  {
    imgSrc: '/images/companies/microsoft.svg',
  },
  {
    imgSrc: '/images/companies/walmart.svg',
  },
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
]

const CourseData: CourseType[] = [
  {
    heading: '(MERN) Full-Stack Development',
    name: 'James Nolan',
    imgSrc: '/images/courses/mern.webp',
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.4,
  },
  {
    heading: 'Design Systems with React',
    name: 'Elena Brooks',
    imgSrc: '/images/courses/react.webp',
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.5,
  },
  {
    heading: 'Create Stunning Banners in Figma',
    name: 'Aria Kim',
    imgSrc: '/images/courses/UiUx.webp',
    students: 120,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
  {
    heading: 'Build & Launch a Webflow Website',
    name: 'Marcus Lee',
    imgSrc: '/images/courses/webflow.webp',
    students: 150,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
]

const BussinessUnitsData: BussinessUnitesType[] = [
  {
    name: 'Inkaba',
    imgSrc: '/images/bussinessUnits/bussinessInkaba.png',
    description: 'Inkaba is a leading provider of innovative software solutions, specializing in web and mobile applications that drive business growth.',
    href: '',
  },
  {
    name: 'BMC',
    imgSrc: '/images/bussinessUnits/bussinessBMC.png',
    description: 'BMC is a global leader in business process management, offering cutting-edge solutions to streamline operations and enhance productivity.',
    href: '',
  },
  {
    name: 'Saripetojo',
    imgSrc: '/images/bussinessUnits/bussinessSaripetojo.png',
    description: 'Saripetojo is a dynamic startup focused on delivering high-quality digital marketing services to help businesses thrive in the online space.',
    href: '',
  }
]

const BestsellersData: BestsellersType[] = [
  {
    desc: 'Inkaba Pro',
    imgSrc: '/images/bestsellers/inkabaPro.png',
    name: 'Advanced',
    price: 99.99,
    href: '',
    rating: 4.8,
  },
  {
    desc: 'BMC Suite',
    imgSrc: '/images/bestsellers/bmcSuite.png',
    name: 'Comprehensive business',
    price: 79.99,
    discPrice: 59.99,
    href: '',
    rating: 4.7,
  },
  {
    name: 'Saripetojo Marketing',
    imgSrc: '/images/bestsellers/saripetojoMarketing.png',
    desc: 'Effective digital marketing.',
    price: 59.99,
    href: '',
    rating: 4.9,
  },
]

const ValuePropositionsData: ValuePropositionsTypes[] = [
  {
    name: 'Innovative Solutions',
    icon: '/images/valuePropositions/innovation.png',
    description: 'We provide cutting-edge solutions that drive efficiency and growth for your business.',
  },
  {
    name: 'Expert Team',
    icon: '/images/valuePropositions/expert.png',
    description: 'Our team of experts is dedicated to delivering exceptional results tailored to your needs.',
  },
  {
    name: 'Customer-Centric Approach',
    icon: '/images/valuePropositions/heart.png',
    description: 'We prioritize our customers, ensuring satisfaction and long-term partnerships.',
  },
]

const MentorData: MentorType[] = [
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user1.webp',
  },
  {
    profession: 'Product Design Lead',
    name: 'Lina Carter',
    imgSrc: '/images/mentor/user2.webp',
  },
  {
    profession: 'UI/UX Strategy Consultant',
    name: 'Ethan Nakamura',
    imgSrc: '/images/mentor/user3.webp',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    name: 'Michelle Bennett',
    profession: 'CEO, Parkview International Ltd',
    comment:
      'The courses transformed my career! The practical approach and expert mentorship made all the difference.',
    imgSrc: '/images/testimonial/user1.webp',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Founder, TechWave Solutions',
    comment:
      'Engaging content and flexible learning schedules helped me upskill without disrupting my work.',
    imgSrc: '/images/testimonial/user2.webp',
    rating: 5,
  },
  {
    name: 'Cody Fisher',
    profession: 'Product Manager, InnovateX',
    comment:
      'Highly recommend! The hands-on projects and supportive community boosted my confidence and skills.',
    imgSrc: '/images/testimonial/user3.webp',
    rating: 5,
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Navigation & Help',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#courses' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    section: 'Products & Services',
    links: [
      { label: 'Inkaba', href: '/' },
      { label: 'BMC', href: '/' },
      { label: 'Saripetojo', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    Banners,
    BussinessUnitsData,
    ValuePropositionsData,
    BestsellersData,
    TechGaintsData,
    CourseData,
    MentorData,
    TestimonialData,
    FooterLinkData,
  })
}
