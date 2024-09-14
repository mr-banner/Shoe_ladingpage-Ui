import React from 'react'
import { reviews } from '../Constants'
import CustomerReviewCard from '../Components/CustomerReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin font-bold text-center text-4xl'>
        What Our
        <span className='text-coral-red'> Customer </span>
        Says?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center info-text'>
      Hear genuine stories from our satisfied customers about their
      exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews.map((review,index) => (
            <CustomerReviewCard key={index} {...review}/>
          ))}
      </div>

    </section>
  )
}

export default CustomerReviews
