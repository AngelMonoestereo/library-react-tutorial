import React from 'react'
import mainphoto from '../assets/mainphoto.png'

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Discover Hidden Vinyl Treasures Online</h1>
            <h2>
              Find Your Dream Record at{' '}
              <span className="orange">Vinyl Library</span>
            </h2>

            <a href="#features">
              <button className="btn">Browse Records</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={mainphoto} alt="" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing
