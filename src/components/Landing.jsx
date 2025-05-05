import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Discover Hidden Vinyl Treasures Online</h1>
            <h2>
              Find Your Dream Record at{' '}
              <span className="purple">Vinyl Library</span>
            </h2>

            <a href="#features">
              <button className="btn">Browse books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing
