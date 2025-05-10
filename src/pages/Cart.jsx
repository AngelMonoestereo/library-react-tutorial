import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmptyCart from '../assets/empty_cart.svg' // or your actual path

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const calculateTotal = () => {
    let price = 0
    cart.forEach((item) => {
      price += parseFloat(
        ((item.salePrice || item.originalPrice) * item.quantity).toFixed(2)
      )
    })
    return price
  }

  const itemPrice = (book) => book.salePrice || book.originalPrice

  const totals = {
    subtotal: calculateTotal(),
    tax: calculateTotal() * 0.1,
    total: calculateTotal() * 1.1,
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => (
                  <div className="cart__item" key={book.id}>
                    <div className="cart__book">
                      <img src={book.url} className="cart__book--img" alt="" />
                      <div className="cart__book--info">
                        <span className="cart__book--title">{book.title}</span>
                        <span className="cart__book--price">
                          ${itemPrice(book).toFixed(2)}
                        </span>
                        <button
                          className="cart__book--remove"
                          onClick={() => removeItem(book)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <input
                        type="number"
                        className="cart__input"
                        min={0}
                        max={99}
                        value={book.quantity}
                        onChange={(event) =>
                          changeQuantity(book, event.target.value)
                        }
                      />
                    </div>
                    <div className="cart__total">
                      ${(itemPrice(book) * book.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}

                {(!cart || !cart.length) && (
                  <div className="cart__empty">
                    <img className="cart__empty--img" src={EmptyCart} alt="" />
                    <h2>You don't have any records in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse records</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {cart && cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout"
                  onClick={() => alert(`Checkout coming soon!`)}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart
