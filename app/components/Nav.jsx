'use client'
import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react'


const Nav = () => {
    const status = useSession()
    console.log(status)
  return (
    <div className='flex w-full bg-gray-900 py-8 px-6 justify-between text-white'>
        <Link className='text-3xl' href='/'>Home</Link>
        <h2 className='text-3xl sm:hidden '>&times;</h2>
        <div className='sm:block hidden '>
            <Link className='text-md px-4' href='/'>Contact us</Link>
            <Link className='text-md px-4' href='/'>Bookings </Link>
            <Link className='text-md ' href='/'>Profile</Link>
        </div>
        <button onClick={()=> status === 'authenticated'? signOut() :signIn()}  className='text-xs sm:block hidden bg-red-700 py-2 px-6 rounded'>
          {status === 'authenticated'? 'Logout':'Login' }
          </button>
    </div>
  )
}

export default Nav