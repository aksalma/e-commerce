import React from 'react'
import Slider from '../Slider';
import HomeCategories from '../HomeCategories';
import Homecards from '../Homecards';
import ClientsReview from '../ClientsReview';
import NexsLetter from '../Footer/NewsLetter';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div>
      <Slider/>
      <HomeCategories/>
      <Homecards/>
      <br/> <br/> 
      <ClientsReview/>
      
      <Footer/>
    </div>
  )
}

export default Home
