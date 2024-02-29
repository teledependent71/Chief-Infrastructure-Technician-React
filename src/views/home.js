import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chief Infrastructure Technician</title>
        <meta property="og:title" content="Chief Infrastructure Technician" />
      </Helmet>
    </div>
  )
}

export default Home
