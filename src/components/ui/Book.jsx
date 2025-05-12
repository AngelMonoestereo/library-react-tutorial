import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Price from './Price'
import Rating from './Ratings'

const Book = ({ book, addToCart }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }

  const handleImageError = (e) => {
    console.error('Failed to load image:', book.url)
    e.target.onerror = null
    e.target.src = 'https://placehold.co/200x300?text=No+Image'
    setImageLoaded(true)
  }

  useEffect(() => {
    let timer
    if (imageLoaded) {
      timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
    return () => clearTimeout(timer)
  }, [imageLoaded])

  return (
    <div className="book">
      {/* Show skeleton while loading */}
      {isLoading ? (
        <>
          <div className="book__img--skeleton skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={book.url}
                alt={book.title}
                className="book__img"
                onLoad={handleImageLoaded}
                onError={handleImageError}
              />
            </figure>
          </Link>

          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />

          {addToCart && (
            <button
              className="btn"
              onClick={() => {
                console.log('Add to Cart clicked:', book)
                addToCart(book)
              }}
            >
              Add to Cart
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Book
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Price from './Price'
// import Rating from './Ratings'

// const Book = ({ book, addToCart }) => {
//   const [isLoading, setIsLoading] = useState(true)
//   const [imageLoaded, setImageLoaded] = useState(false)

//   const handleImageLoaded = () => {
//     setImageLoaded(true)
//   }

//   const handleImageError = (e) => {
//     console.error('Failed to load image:', book.url)
//     e.target.onerror = null
//     e.target.src = 'https://placehold.co/200x300?text=No+Image'
//     setImageLoaded(true)
//   }

//   useEffect(() => {
//     let timer
//     if (imageLoaded) {
//       const timer = setTimeout(() => {
//         setIsLoading(false)
//       }, 500)
//       return () => clearTimeout(timer)
//     }
//   }, [imageLoaded])

//   return (
//     <div className="book">
//       <div style={{ display: isLoading ? 'none' : 'block' }}>
//         <Link to=/books/${book.id}}>
//         <figure className="book__img--wrapper">
//           {/* Always render image so it can load */}
//           <img
//             src={book.url}
//             alt={book.title}
//             className="book__img"
//             onLoad={handleImageLoaded}
//             onError={handleImageError}
//             />
//              </figure>
//             </Link>

//             <div className="book__title">
//             <Link to={`/books/${book.id}`} className="book__title--link">
//               {book.title}
//             </Link>
//           </div>

//           <Rating rating={book.rating} />
//           <Price
//             salePrice={book.salePrice}
//             originalPrice={book.originalPrice}
//           />
//           </div>

//           //   style={{ display: isLoading ? 'none' : 'block' }}
//           // />
//           // {isLoading && <div className="book__img--skeleton skeleton"></div>}

//           {addToCart && (
//             <button
//               className="btn"
//               onClick={() => {
//                 console.log('Add to Cart clicked:', book)
//                 addToCart(book)
//               }}
//             >
//               Add to Cart
//             </button>
//           )}
//     </div>

// {isLoading && (
// <>
// <div className="book__img--skeleton skeleton"></div>
// <div className="skeleton book__title--skeleton"></div>
// <div className="skeleton book__rating--skeleton"></div>
// <div className="skeleton book__price--skeleton"></div>
// </>
// )}
// </div>
// )
// }

// export default Book
