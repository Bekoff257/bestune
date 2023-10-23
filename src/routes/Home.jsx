import React from 'react'
import Main from '../components/main/Main'
import SmallModels from '../components/small-models/SmallModels'
import Chose from '../components/chose-car/Chose'
import NewsSection from '../components/new-section/NewsSection'
import Filials from '../components/filials/Filials'
import About from '../components/about-company/About'
import Nav from '../components/nav/Nav'

const Home = () => {
  return (
    <React.Fragment>
        <Nav/>
        <Main/>
        <SmallModels/>
        <About/>
        <Chose/>
        <NewsSection/>
        <Filials/>
    </React.Fragment>
  )
}

export default Home