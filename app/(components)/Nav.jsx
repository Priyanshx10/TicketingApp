import { faHome, faTicket, faTractor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-center bg-nav p-4">
      <div className= "flex items-center space-x-4">
        <Link href="/">
            <FontAwesomeIcon icon={faHome} className='icon' />
        </Link>
        <Link href="/TicketPage/new">
            <FontAwesomeIcon icon={faTicket} className='icon' />
        </Link>
      </div>
      <div>
        <p className=' text-default-text'>Priyansh1012@gmail.com</p>
      </div>
    </nav>
    
  )
}

export default Nav