import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import { books } from './data';

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  function addToCart(book) {
    const existingItem = cart.find((item) => item.id === book.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  function numberOfItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" render={() => <Books books={books} />} />
          <Route
            path="/books/:id"
            render={(routeProps) => (
              <BookInfo
                books={books}
                addToCart={addToCart}
                cart={cart}
                {...routeProps}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
