import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center gap-2 px-7 items-center bg-coral-red py-4 
    font-montserrat leading-none text-lg text-white rounded-full border
    border-coral-red hover:bg-white hover:text-black hover:shadow-2xl'>
        {label}

        <img src={iconURL} alt='arrowRight'
        className='ml-2 rounded-full w-5 h-5'
        />
    </button>
  )
}

export default Button
