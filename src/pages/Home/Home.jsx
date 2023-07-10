import React from 'react'
import "./Home.scss"
import Featured from '../../components/Featured/Featured'
import Categories from '../../components/Categories/Categories'
import Hero from '../../components/Hero/Hero'
import Newsletter from '../../components/Newsletter/Newsletter'
import Trending from '../../components/Trending/Trending'
import Community from '../../components/Community/Community'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Categories />
            <Featured type="featured" />
            <Trending type="trending" />
            <Community />
            <Newsletter />
        </div>
    )
}

export default Home