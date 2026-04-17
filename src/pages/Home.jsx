import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import HeroSection from '../components/HeroSection'
import TrendingProducts from '../components/TrendingProducts'
import Announcement from '../components/Announcement'
import FeaturedPolicy from '../components/FeaturedPolicy'
import Blog from '../components/Blog'

const Home = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
        <Banner />
        <Categories />
        <HeroSection />
        <TrendingProducts />
        <Announcement />
        <FeaturedPolicy />
        <Blog />
    </>
  )
}

export default Home