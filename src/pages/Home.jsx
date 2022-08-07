import React from 'react'

import Slider from '../components/Slider'

import styled from '@emotion/styled'
import Items from '../components/Items'
import MobileAppBanner from '../components/MobileAppBanner'




const Home = () => {
  return (
    <div>

        <Slider />
        <Items page='Home'/>
        <MobileAppBanner />

    </div>
  )
}

export default Home