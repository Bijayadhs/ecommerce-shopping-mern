import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/product/:id' component={ProductScreen} />
            <Route path='/cart' component={Cart} />
            <Route path='/signin' component={Signin} />
          </Switch>
        </Container>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
