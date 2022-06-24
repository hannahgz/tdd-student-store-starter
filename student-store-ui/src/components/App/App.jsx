import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import axios from "axios"

import "./App.css"

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"

import LogoPic from "./logo-pic.svg"


/**
 * 
 * @returns full app display
 */
export default function App() {
  
  /**
   * STATE VARIABLES
   */

  // (boolean) represents whether or not App is currently fetching `products` from API
  const [isFetching, setIsFetching] = useState(true)

  // (boolean) used to display message when something goes wrong with API requests
  const [error, setError] = useState(false)

  // (array of of product objects) initially empty
  const [products, setSelectedProducts] = useState([])

  // (string) used to query for search results
  const [searchBar, setSearchBar] = useState("")

  // (string) query for which category to display on product grid
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const categories = ["All Categories", "food", "clothing", "accessories", "tech"]

  // (array of product objects) stores state for active user's shopping cart
  const [shoppingCart, setShoppingCart] = useState([])
  const [receipt, setReceipt] = useState()

  // (dictionary) user's information sent to API when checkout
  const [checkoutForm, setCheckoutForm] = useState({email:"", name:""})

  // (boolean) represents wheter Sidebar is in open or closed state
  const [isOpen, setIsOpen] = useState(false)


  /**
   * @usage makes 'GET' request to API's store endpoint with 'axios get' method
   * stores data in `products` state variable if successful, otherwise renders error
   */
  async function getInfo() {
    try {
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store`);
      setIsFetching(false)
      if (response.statusText != "OK") {
        setError(response.statusText);
      } else if (response.data.products.length == 0) {
        setError("Did not find any products")
      } else {
        setSelectedProducts(response.data.products)
      }
      
    } catch (anything) {
      setError("Error detected!");
    }
  
  }


  // hook to ensure conditions in getInfo() are met when App.jsx is mounted
  useEffect(()=>{
    getInfo()
  },[])

  const currentItems = products.filter(item => {
    return (
      item.category == selectedCategory
    )
  })


  /**
   * HANDLER FUNCTIONS
   */


  /**
   * @usage toggles open/closed state of the 'Sidebar'
   */
  const handleOnToggle = () => {
    setIsOpen((item) => !item);
  }


  /**
   * @param {*} productId unique id of each product 
   * @usage if product exists, increments quantity in 'shoppingCart' by 1
   * else adds to cart if does not exist and initializes quantity to 1
   */
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
      

  /**
   * @param {*} productId unique id of each product
   * @usage decrease quantity of item in 'shoppingCart' by 1 if already exists 
   * if quantity equals 0, removes product from cart
   */
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


  /**
   * @param {*} name 'name' attribute of input being updated
   * @param {*} value new value to set for that input
   * @usage updates 'checkoutForm' with new value from correct input(s)
   */
  const handleOnCheckoutFormChange = (name, value) => {
    let copy = {}
    if (name === "name") {
      copy = {...checkoutForm, "name": value}
    } else {
      copy = {...checkoutForm, "email": value}
    }
    setCheckoutForm(copy);
  }

  /**
   * @param {*} checkoutForm name and email information from user input
   * @param {*} shoppingCart array of objects representing all products and their quantities
   * @usage submits user order to API using 'POST' request and displays receipt or error message
   */
  const handleOnSubmitCheckoutForm = (checkoutForm, shoppingCart) => {
    axios.post('https://codepath-store-api.herokuapp.com/store',{'user': checkoutForm, 'shoppingCart': shoppingCart}).then((response) => {
      setReceipt(response.data.purchase.receipt.lines)
      setShoppingCart([])
      setCheckoutForm({email:"", name:""})
      setError("Success!")
    }).catch((error) => {
      setReceipt([error.response.data.error.message]) 
      setError("Error")
    });
  }


  /**
   * @param {*} value user input from search bar
   * @usage sets value of search state for filtering
   */
  const handleOnSearchBarChange = (value) => {
    setSearchBar(value)
  }


  /**
   * Renders a `BrowserRouter` component that contains a `Routes` component with the following routes
   * `/` - `Home.jsx` component
   * `/products/:productId` - `ProductDetail` component
   * `*` - anything else should render the `NotFound` component
   * Renders `Navbar` and `Sidebar` component on every route
   */ 
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
                    receipt={receipt}
                    error={error}
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
