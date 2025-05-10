import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="orange">Records</span>
          </h2>
          <Link to="/books">
            <button className="btn">Explore Records</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Explore
