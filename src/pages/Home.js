import React from 'react'
import Header from '../components/Header.js'
import Container from '../components/Container.js'
import Layout from '../components/Layout.js'
import ItemCart from '../components/ItemCart.js'
import Footer from '../components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      
      {/* header */}
      < Header />
      {/* main-container */}
      <Container/>
      {/*button layout */}
      < Layout />
      {/* itme-cart */}
      <ItemCart/>
      {/* footer */}
      <Footer/>
      
    </div>
  )
}

export default Home
