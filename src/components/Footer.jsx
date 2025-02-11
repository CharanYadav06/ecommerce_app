import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.ajio} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>The Ajio All Stars Sale starts 13th Sep, Friday!
I'm really excited as there are 100 reasons to shop, that you wouldn't want to miss.
I've already discovered the reasons and wishlisted my favorite brands, are you ready to join the shopping spree?
Download the Ajio App and wishlist now!
</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@ajio.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ ajio.com - All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
