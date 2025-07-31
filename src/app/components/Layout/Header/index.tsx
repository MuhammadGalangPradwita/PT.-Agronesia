'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/app/components/Auth/SignIn'
import SignUp from '@/app/components/Auth/SignUp'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderType } from '@/app/types/menu'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [navLink, setNavLink] = useState<HeaderType[]>([])

  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setNavLink(data.HeaderData)
      } catch (error) {
        console.error('Error fetching service:', error)
      }
    }
    fetchData()
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-transparent  ${sticky ? 'backdrop-blur-md shadow-lg py-2' : 'shadow-none py-4' 
        }`}>
      <div>
        <div className={`container flex items-center justify-end transition-all duration-300  ${sticky ? 'scale-100' : 'scale-100'}`}>
            <Logo />
          <nav className="hidden lg:flex items-center ml-auto">
            {navLink.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 hover:text-primary transition-colors duration-200"
                >
                  {item.label}

                  {item.icon && (
                    <Icon
                      icon={item.icon}
                      className="h-4 w-4"
                    />
                  )}

                </Link>
                {item.children && item.children.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-primary/10 hover:text-primary rounded transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <form className={`hidden lg:block mx-0 w-50 transition-all duration-300 ${sticky ? 'opacity-90' : 'opacity-100'}`}>
            <div className='relative rounded-35'>
              <input
                type='text'
                name='course'
                className='py-2 pl-8 pr-20 text-lg w-full text-black rounded-full border border-black/10 focus:outline-hidden focus:border-primary duration-300 shadow-input-shadow'
                placeholder='Search...'
                autoComplete='off'
              />
              <button className=' hover:bg-transparent p-3 rounded-full absolute right-2 top-1.5 duration-300 hover:cursor-pointer top-1/2 -translate-y-1/2'>
                <Icon
                  icon='gravity-ui:magnifier'
                  className='text-gray group-hover:text-primary text-xl inline-block duration-300 '
                />
              </button>
            </div>
          </form>
          <button
            className="p-2 mx-2 rounded-full hover:bg-blue-100 hover:cursor-pointer gap-2"
            aria-label="Cart"
          >
            <Icon
              icon="solar:cart-large-line-duotone"
              className="text-black hover:text-primary text-3xl inline-block duration-300"
            />
          </button>
          <div className='flex items-center gap-2'>
            <Link
              href='#'
              className='hidden lg:block bg-primary text-white hover:bg-primary/15 hover:text-primary py-2 px-4 rounded-full text-lg font-medium'
              onClick={() => {
                setIsSignInOpen(true)
              }}>
              Sign In
            </Link>
            {isSignInOpen && (
              <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                <div
                  ref={signInRef}
                  className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-white'>
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className='absolute top-0 right-0 mr-4 mt-8 hover:cursor-pointer'
                    aria-label='Close Sign In Modal'>
                    <Icon
                      icon='material-symbols:close-rounded'
                      width={24}
                      height={24}
                      className='text-black hover:text-primary text-24 inline-block me-2'
                    />
                  </button>
                  <Signin />
                </div>
              </div>
            )}
            <Link
              href='#'
              className='hidden lg:block border border-gray bg-primary/15 hover:bg-primary text-primary hover:text-white py-2 px-4 rounded-full text-lg font-medium'
              onClick={() => {
                setIsSignUpOpen(true)
              }}>
              Sign Up
            </Link>
            {isSignUpOpen && (
              <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                <div
                  ref={signUpRef}
                  className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white/90 backdrop-blur-md px-8 pt-14 pb-8 text-center'>
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className='absolute top-0 right-0 mr-4 mt-8 hover:cursor-pointer'
                    aria-label='Close Sign In Modal'>
                    <Icon
                      icon='material-symbols:close-rounded'
                      width={24}
                      height={24}
                      className='text-black hover:text-primary text-24 inline-block me-2'
                    />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg hover:cursor-pointer'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
          <div className='flex items-center justify-between gap-2 p-4'>
            <div>
              <Logo />
            </div>
            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className='hover:cursor-pointer'
              aria-label='Close menu Modal'>
              <Icon
                icon='material-symbols:close-rounded'
                width={24}
                height={24}
                className='text-black hover:text-primary text-24 inline-block me-2'
              />
            </button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {navLink.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className='mt-4 flex flex-col space-y-4 w-full'>
              <Link
                href='#'
                className='bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white'
                onClick={() => {
                  setIsSignInOpen(true)
                  setNavbarOpen(false)
                }}>
                Sign In
              </Link>
              <Link
                href='#'
                className='bg-primary border border-primary text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-primary'
                onClick={() => {
                  setIsSignUpOpen(true)
                  setNavbarOpen(false)
                }}>
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
