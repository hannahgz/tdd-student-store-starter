import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

import LogoPic from "./logo-pic.svg"

export default function App() {
  // STATE VARIABLES

  // Page rendering and data fetching
  const [isFetching, setIsFetching] = useState(true)
  const [data, setData] = useState(0)
  const [error, setError] = useState(false)

  // All products sourced from data 
  const [products, setSelectedProducts] = useState([])

  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState({email:"", name:""})
  const [searchBar, setSearchBar] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  async function getInfo() {
    try {
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store`);
      setIsFetching(false)
      if (response.statusText != "OK") {
        setError(response.statusText);
      } else if (response.data.products.length == 0) {
        setError("Did not find any products")
      } else {
        setData(response)
        setSelectedProducts(response.data.products)
      }
      
    } catch (anything) {
      setError("Error detected!");
    }
  
  }

  useEffect(()=>{
    getInfo()
  },[])

  const categories = ["All Categories", "food", "clothing", "accessories", "tech"]

    const currentItems = products.filter(item => {
      return (
        item.category == selectedCategory
      )
    })

    const handleOnToggle = () => {
      setIsOpen((item) => !item);
    }

    const handleAddItemToCart = (productId) => {
      let copyCart = [...shoppingCart]
      let found = false;
      copyCart.map((item, index) => {
        if(item.itemId === productId) {
          copyCart[index].quantity = copyCart[index].quantity+1;
          found = true;
        }
      })
      if (!found) {
        copyCart.push({itemId: productId, quantity: 1})
      }
      setShoppingCart(copyCart)
    }
      

    const handleRemoveItemFromCart = (productId) => {
      let copyCart = [...shoppingCart]
      copyCart.map((item, index) => {
        if(item.itemId === productId) {
          copyCart[index].quantity = copyCart[index].quantity-1;
          if (copyCart[index].quantity == 0) {
            copyCart.splice(index, 1)
          }
        }
      })
      setShoppingCart(copyCart)
    }

    const handleOnCheckoutFormChange = (name, value) => {
      console.log(value)
      let copy = {}
      if (name === "name") {
        copy = {...checkoutForm, "name": value}
      } else {
        copy = {...checkoutForm, "email": value}
      }

      setCheckoutForm(copy);
    }

    const handleOnSubmitCheckoutForm = (checkoutForm, shoppingCart) => {
      if (shoppingCart.length == 0) {
        console.log("no items in cart yet!");
      }
      axios.post('https://codepath-store-api.herokuapp.com/store',{'user': checkoutForm, 'shoppingCart': shoppingCart}).then((response) => {
        if (!response) {
          <p className="error">Sorry! Checkout form submission unsuccessful</p>
        } else {
          <p className="success">Success!</p>
          setShoppingCart([])
          setCheckoutForm({email:"", name:""})
        }
      });
    }

    const handleOnSearchBarChange = (value) => {
      setSearchBar(value)
    }

    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <div className="top">
              <Navbar />
            </div>
            
            <div className="left">
              <Sidebar isOpen={isOpen}
                      shoppingCart={shoppingCart}
                      products={products}
                      checkoutForm={checkoutForm}
                      handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                      handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                      handleOnToggle={handleOnToggle}/>
            </div>
            
            <Routes>
              <Route path="/" element={
                <>
                <div className="homepage">
                  <Home products={selectedCategory=="All Categories" ? products : currentItems}
                        selectedCategory={selectedCategory}
                        handleAddItemToCart={handleAddItemToCart}
                        handleRemoveItemFromCart={handleRemoveItemFromCart}
                        setSelectedCategory={setSelectedCategory}
                        handleOnSearchBarChange={handleOnSearchBarChange}
                        categories={categories}
                        shoppingCart={shoppingCart}
                        setIsFetching={setIsFetching}
                        searchBar={searchBar}
                        setSearchBar={setSearchBar}
                  />
                </div>

                <div className="about-us" id="about-us">
                  <h3>ABOUT US</h3>
                  <div className="about-us-wrapper">
                    <div className="summary">
                      <p className="summary-text">The codepath student store offers great products at great prices from a great team and for a great cause.</p>
                      <p className="summary-text">We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
                      <p className="summary-text">All proceeds go towards bringing high quality CS education to college students around the country.</p>
                    </div>

                    <div className="about-image">
                      <img src={LogoPic} className="about-logo"></img>
                    </div>
                  </div>
                  
                </div>

                <div className="contact-us" id="contact-us">
                  <h3>CONTACT US</h3>
                  <div className="contact-us-wrapper">
                    <p>Phone Number: (123) 456-7890</p>
                    <p>Email: test@codepath.org</p>
                    <p>Address: 123 Fake Address, San Francisco, CA</p>
                  </div>
                  
                </div>
                
                <footer className="footer">
                  <div className="footer-wrapper">
                    <h3>FOOTER INFO</h3>
                  </div>
                </footer>
                </>
                
                
              }/>

              <Route path="/products/:productId" element={
                <ProductDetail shoppingCart={shoppingCart}
                               handleAddItemToCart={handleAddItemToCart}
                               handleRemoveItemFromCart={handleRemoveItemFromCart}
                               isFetching={isFetching}
                               setIsFetching={setIsFetching}
                               setError={setError}
                              />
              } />

              <Route path="*" element={<NotFound />} />

            </Routes>
            
          </main>
        </BrowserRouter>
      </div>
    )

}
