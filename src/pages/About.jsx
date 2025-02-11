import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>With the trendiest, freshest, and most unique styles from across India and the world, AJIO invites you to express your personal style fearlessly, and with a confidence and optimism that cannot be easily shaken.</p>
        <p>AJIO OWN is our private label – that’s designed by us, and owned by you. If you’re looking for head-turning styles that are one-of-a-kind, AJIO OWN is what you should stock up on.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>So the next time someone says ‘Oh, that dress is too bold’ ‘Are you sure you’re the right size for this?’ ‘Maybe you should pick a colour that suits you’ or ‘Act your age and wear something else’, go ahead and do exactly what you please. When it comes to great style and personal expression, there should never be any regrets.</p>

        </div>

      </div>

      <div>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>A high-fashion editorial where we feature the internet’s coolest cats. It’s where you get to read the stories of these influencers and shop their stunning shoot looks.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>This is where we celebrate and showcase our most stylish customers, who’ve given us a shout-out on social while dressed in a trendy AJIO style. You could very well be on the list too.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>From the hailstorm of trends coming down on us every season, we only recommend the ones guaranteed to put you on the hit list. Watch out for these regular highlights.
          </p>
        </div>
        
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
