import React from 'react'
import Book from './ui/Book'
import { books } from '../data'

const Featured = () => {
  console.log(books)
  console.log()

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="orange">Vinyl Records</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
            {/* <a href="">
             <figure className="book__img--wrapper">
             <img src="https://m.media-amazon.com/images/I/81V5WzJ7vDL._AC_SY679_.jpg"
              </figure>
              </а>
              <div className="book__title">
              <a href="/" className="book__title--link">
                A Love Supreme
              </a>
              </ div>
              <div className="book_ratings">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
      </div>
              <div className="book__price">
                <span className= "book__price--normal">$39.99</span>$34.99
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
