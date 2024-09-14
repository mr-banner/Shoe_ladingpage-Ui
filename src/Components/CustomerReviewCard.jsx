import React from 'react'
import { star } from '../assets/icons'

const CustomerReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={imgURL} alt="customer" className='rounded-full h-[120px] w-[120px] object-cover' />
      <p className='mt-4 max-w-sm text-center info-text'>{feedback}</p>
      <div className='flex gap-2 items-center justify-center mt-3'>
        <img src={star} alt="star" width={20} height={20} className='object-contain'/>
        <p className='font-montserrat text-lg text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-3 font-palanquin font-bold text-xl text-center'>{customerName}</h3>
    </div>
  )
}

export default CustomerReviewCard
