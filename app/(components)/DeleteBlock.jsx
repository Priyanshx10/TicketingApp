import { fa6, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon icons={fa6} className='text-red-400 hover:cursor-poointer hover:text-red-300'/>
  )
}

export default DeleteBlock