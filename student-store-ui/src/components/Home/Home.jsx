import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Selector from "../Selector/Selector"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"

/**
 * 
 * @param {*} props 
 * @returns renders the header, search bar, and product grid
 */
export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <SearchBar handleOnSearchBarChange={props.handleOnSearchBarChange}
                 setSearchBar={props.setSearchBar}
                 products={props.products}/>

      <div className="selector">
        {props.categories.map((category) => 
          <Selector label={category}
                    isActive={props.selectedCategory==category}
                    onClick = {() => {
                      props.setSelectedCategory(category)
                    }} />
        )}
      </div>

      <ProductGrid products={props.products}
                   handleAddItemToCart={props.handleAddItemToCart}
                   handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                   shoppingCart={props.shoppingCart}
                   setIsFetching={props.setIsFetching}
                   searchBar={props.searchBar} />

    </div>

  )
}

