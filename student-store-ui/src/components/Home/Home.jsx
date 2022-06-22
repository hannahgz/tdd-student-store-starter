import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Selector from "../Selector/Selector"
import Hero from "../Hero/Hero"

export default function Home(props) {
  return (
    <div className="home">
      <Hero />

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
                   shoppingCart={props.shoppingCart} />

    </div>

  )
}
