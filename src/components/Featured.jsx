import React from "react";
import Book from "./Book";
import BestBooks from "./BestBooks";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="orange">Books</span>
          </h2>
          <div className="books">
            <div className="book">
            <a href="">
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
              <FontAwesomeIcon icon="star" />
              <FontAwesomelcon icon="star" />
              <FontAwesomelcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star-half-alt" />
              </div>
              <div className="book__price">
                <span className= "book__price--normal">$39.99</span>$34.99
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
