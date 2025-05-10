import Footer from './components/Footer';
import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
  const exists = cart.find(item => item.id === book.id);

  if (exists) {
    setCart(
      cart.map(item =>
        item.id === book.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...book, quantity: 1 }]);
  }
}


  function changeQuantity(book, quantity) {
  setCart(
    cart.map((item) =>
      item.id === book.id
        ? { ...item, quantity: Number(quantity) }
        : item
    )
  );
}

    function removeItem(item)  {
      setCart(cart.filter(book => book.id !== item.id))
    }

    function numberOfItems(){
      let counter = 0;
      cart.forEach(item => {
        counter += item.quantity
      })
      return counter;
    }


  useEffect(() => {
    console.log(cart);
  },[cart]);

 return (
  <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()} />
      <Route exact path="/" component={Home} />
      <Route
        path="/books"
        render={() => <Books books={books} />}
      />
      <Route
        path="/books/:id"
        render={() => (
          <BookInfo books={books} addToCart={addToCart} cart={cart} />
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
      <Footer />
    </div>
  </Router>
);


}

export default App;


