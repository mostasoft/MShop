import React from 'react'
import Hero from './Home/Hero'
import Featured from './Home/Featured'
import DealOfTheDay from './Home/Shop'
import CategoriesSection from './Home/Categories'
import CustomerReviews from './Home/Review'
import BlogSection from './Home/blog'
import ContactSection from './Home/Contact'

const page = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <DealOfTheDay/>
      <CategoriesSection/>
      <BlogSection/>
      <CustomerReviews/>
      <ContactSection/>
    </div>
  )
}

export default page
