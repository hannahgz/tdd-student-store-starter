# Project #2: Student Store

## Overview

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of Codepath. The application entails a frontend user interface for potential customers to peruse the goods, and a backend API to handle data management. The API will be built with Node and Express and the UI will be built with React.

Project Demo Part 1

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/26664975/175697373-d1f1f77c-cdc6-4d14-ae09-9cb15290eed3.gif)

Project Demo Part 2 

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/26664975/175697568-0b5f01a4-4cbd-4e43-9e51-f668269d1b69.gif)

Project Demo Part 3

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/26664975/175697634-15400808-58a6-49d4-a612-cd3392840805.gif)

### Application Features

#### Core Features

- [x] Displays the following sections: header, banner, search, product grid, about, contact, and footer.
- [x] On initial page load, display the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store).
- [x] User can click on the categories (Clothing, food, etc) to filter the product grid by type.
- [x] User can search for products.
- [x] User can click on a product in the grid to view additional product details. Navigation is via a React Router.

#### Stretch Features - Week 2 (this week)
- [x] User can click to expand the shopping cart in the left navigation.
- [x] User can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] User can click the '-' button on a product cart to increment that product in the shopping cart.
- [x] Shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] User can click in the top navigation bar to scroll to the relevant section.
- [x] User sees a "not found" display when searching for a nonexistent product.

#### Stretch Features - Week 3 (next week)
- [ ] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Passing Automated Tests

The following specifications were met on the Express backend and the React frontend.

### React UI

**App.jsx**

  - [x] The core App component that contains the routes for the app and does the initial data fetching
  - [x] Renders a `BrowserRouter` component that contains a `Routes` component with the following routes:
    - [x] `/` - Should render the `Home.jsx` component
    - [x] `/products/:productId` - should render the `ProductDetail` component
    - [x] `*` - anything else should render the `NotFound` component
  - [x] Renders the `Navbar` component on every route
  - [x] Renders the `Sidebar` component on every route
  - [x] Should create **at least** the following state variables:
    - [x] `products` - an array of product objects that is initially empty.
    - [x] `isFetching` - a boolean value representing whether or not the App is currently fetching the `products` from the API.
    - [x] `error` - a variable used to display a message when something goes wrong with the API requests.
    - [x] `isOpen` - a boolean value representing whether or not the `Sidebar.jsx` is in the open or closed state.
    - [x] `shoppingCart` - should store state for the active user's shopping cart (items they want to purchase and the quantity of each item).
      - [x] Use whatever data type works best here, but make sure the format the `shoppingCart` as an array before passing it to other components.
      - [x] When passed down to other components as a prop, it should formatted as an array of objects.
      - [x] Each object in the array should have two fields:
        - [x] The `itemId` field should store the `id` of the item being purchased.
        - [x] The `quantity` field should store a number representing how many of that item the user is purchasing.
    - [x] `checkoutForm` - the user's information that will be sent to the API when they checkout.
  - [x] Leverage the `useEffect` hook to ensure that when the `App.jsx` component is mounted to the screen...
    - [x] It should make a `GET` request to the API's `/store` endpoint with the `axios.get` method.
    - [x] When the request completes successfully, it should store the `products` returned by the response in state.
    - [x] If the request does not complete successfully, or there are no `products` found in the response,
            it should create an error message and store it in the `error` state variable.
  - [x] The `App.jsx` component should define handler functions to be passed as props to the `Home` and `ProductDetail` components.
    - [x] Define as many as are needed.
    - [x] At minimum, **create these five handlers**:
      - [x] The **`handleOnToggle`** function. When called...
        - [x] It should toggle the open/closed state of the `Sidebar`.
      - [x] The **`handleAddItemToCart`** function. When called...
        - [x] It should accept a single argument - `productId`
        - [x] It should add that product to the `shoppingCart` if it doesn't exist, and set its quantity to `1`.
        - [x] If it does exist, it should increase the quantity by `1`.
        - [x] It should add the price of the product to the total price of the `shoppingCart`.
      - [x] The **`handleRemoveItemFromCart`** function. When called...
        - [x] It should accept a single argument - `productId`
        - [x] It should decrease the quantity of the item in the `shoppingCart` by `1`, but only if it already exists.
        - [x] If it doesn't exist, the function should do nothing.
        - [x] If the new quantity is `0`, it should remove the item from the `shoppingCart`
      - [x] The **`handleOnCheckoutFormChange`** function. When called...
        - [x] It should receive two arguments:
          - [x] `name` - the `name` attribute of the input being updated
          - [x] `value` - the new value to set for that input
        - [x] It should update the `checkoutForm` object with the new value from the correct input(s)
      - [x] The **`handleOnSubmitCheckoutForm`** function. When called...
        - [x] It should submit the user's order to the API
        - [x] To submit the user's order, it should leverage the `axios.post` method to send a `POST` request to the `/store` endpoint.
        - [x] The body of that `POST` request should be an object with two fields:
          - [x] The `user` field:
            - [x] Should be an object containing `name` and `email` properties
            - [x] Each property should be set to the correct value found in the `checkoutForm`
          - [x] The `shoppingCart` field:
            - [x] Should contain the user's order formatted as an array of objects.
            - [x] Each object in the array should have two fields:
              - [x] The `itemId` field should store the `id` of the item being purchased.
              - [x] The `quantity` field should store a number representing how many of that item the user is purchasing.
            - [x] Don't include the `total` price here, since we'll be calculating that on the backend. Remember to never trust the client!

**Navbar.jsx**

  - [x] Should render JSX that is wrapped by a `nav` element with a `className` of `navbar`
  - [x] Should render the `Logo` component that links to the `/` route when clicked

**Logo.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with a `className` of `logo`
  - [x] Should use the `Link` component from `react-router-dom` to link to the home route (`/`) when clicked

**Home.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with a `className` of `home`
  - [x] Should accept **at least** the following props:
    - `products` - an array of product objects
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [x] Should render the `Hero` component
  - [x] Should render the `ProductGrid` component

**Hero.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with a `className` of `hero`
  - [x] Should display an intro message inside an element with the `className` of `intro`. That message should contain the text `"Welcome!"` somewhere within it.
  - [x] Should render a hero image inside an `img` tag with the `className` of `hero-img`.

**ProductGrid.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with a `className` of `product-grid`
  - [x] Should accept **at least** the following props:
    - `products` - an array of product objects
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [x] Should iterate over its `products` prop, rendering a `ProductCard` component for each one. Set the `showDescription` prop to `false` for all of the `ProductCard` components rendered in the `ProductGrid` component.

**ProductDetail.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with a `className` of `product-detail`
  - [x] Should accept **at least** the following props:
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [x] Should define **at least** a `product` state variable and updater
  - [x] It should leverage the `useParams` hook from `react-router-dom` to extract the `productId` param from the url.
  - [x] When the component is mounted to the screen...
    - [x] It should make a `GET` request to the `/store/:productId` endpoint with the `axios.get` method.
    - [x] The `:productId` part of the request should be replaced with the `productId` pulled from the url.
    - [x] When the initial request is loading, it should render an `h1` element with the `className` of `loading` and contain the text `"Loading..."`
    - [x] It should store the `product` received by the request in state and then render the `ProductView` component.
    - [x] If no `product` is found with that `id`, it should render the `NotFound` component

**ProductView.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with a `className` of `product-view`
  - [x] Should accept **at least** the following props:
    - `product` - the `product` object returned by the API request
    - `productId` - the id of the product extracted from the url
    - `quantity` - the quantity for this product found in the `shoppingCart`
    - `handleAddItemToCart` - handler function
    - `handleRemoveItemToCart` - handler function
  - [x] It should display an `h1` element with the `className` of `product-id` that contains the text: `Product #` followed by the `productId` prop
  - [x] It should render a `ProductCard` component and pass it the props it needs. It should also set the `showDescription` prop to `true` for this product card.

**ProductCard.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with a `className` of `product-card`
  - [x] Should accept **at least** the following props:
    - `product` - a product object
    - `productId` - a `number` representing the `id` of the product
    - `quantity` - the quantity for this product found in the `shoppingCart`
    - `handleAddItemToCart` - handler function
    - `handleRemoveItemToCart` - handler function
    - `showDescription` - boolean
  - [x] Should render the `name` of the product inside an element with the `className` of `product-name`
  - [x] Should render the `price` of the product inside an element with the `className` of `product-price`. The price should formatted so that it starts with a `$`, and has **at least one** integer digit, along with **exactly two** decimal digits. Examples - `$22.99`, `$860.20`, and `$0.50`
  - [x] If the `showDescription` prop is set to `true`, it should render the `description` of the product inside an element with the `className` of `product-description`.
  - [x] Should render an `img` element for the product:
    - [x] The `img` element should have a `src` attribute to set to the `image` property of the `product` prop.
    - [x] The `img` element should be wrapped in a `Link` component from `react-router-dom`.
      - [x] The `Link` element should have a `to` prop so that when the `img` element is clicked on, it should navigate to the product detail route for that product using its `id` attribute. For example, a product with an `id` of `4` should create a `Link` with its `to` prop set to `/products/4`.
      - [x] The `Link` that wraps the `img` element should be nested somewhere inside an element with the `className` of `media`.
  - [x] Should render two `buttons` elements...
    - [x] One button with a `className` of `add`. When clicked, it should call the `handleAddItemToCart` function with the `id` of the `product` as its only argument.
    - [x] One button with a `className` of `remove`. When clicked, it should call the `handleRemoveItemFromCart` function with the `id` of the `product` as its only argument.
  - [x] Should display the current quantity of items that the user has selected in their shopping cart. The quantity should be rendered inside an element with the `className` of `product-quantity`. If none of that particular item have been added to the shopping cart, it should render nothing there.

**Sidebar.jsx**

  - [x] Should render JSX that is wrapped by a `section` element with the `className` of `sidebar`
  - [x] Should accept **at least** the following props (and probably a few more):
    - `isOpen` - boolean representing the open/closed state of the Sidebar
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
    - `products` - the array of products fetched from the API
    - `checkoutForm` - the form state for the `CheckoutForm` component
    - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm` object
    - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
    - `handleOnToggle` - handler function to toggle open/closed `Sidebar` state
  - [x] It should always render a `button` element with the `className` of `toggle-button`. When that button is clicked it should change the `isOpen` prop by calling the `handleOnToggle` prop.
  - [x] When the sidebar is opened, it should display the `ShoppingCart` and `CheckoutForm` components and should be wider than `350px`.
  - [x] When the sidebar is closed, it should only render the toggle button and shouldn't be wider than `150px`.

**ShoppingCart.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with the `className` of `shopping-cart`
  - [x] Should accept **at least** the following props (and probably a few more):
    - `isOpen` - boolean representing the open/closed state of the Sidebar
    - `products` - the array of products fetched from the API
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
  - [x] For every item in the `shoppingCart`:
    - [x] It should display the `name` of the item in an element with the `className` of `cart-product-name`. Remember that items in the `shoppingCart` prop will **only** contain the `itemId` and `quantity` fields. Other props will have to be used to conver the `itemId` field to the `product`'s name.
    - [x] It should display the `quantity` of the item in an element with the `className` of `cart-product-quantity`
  - [x] It add up the cost of all items (make sure to use the quantity of the item requested), and render that amount **rounded up to exactly 2 decimal places** inside an element with the `className` of `subtotal`. Make sure it is prefixed with a dollar sign ($)!
  - [x] It should calculate the cost of taxes on that subtotal (using 8.75% as the tax rate), add that amount to the subtotal, and render the total cost **rounded up to exactly 2 decimal places** inside an element with the `className` of `total-price`. Make sure it is prefixed with a dollar sign ($)!
  - [x] If no items exist in the `shoppingCart`, it should render this message: `"No items added to cart yet. Start shopping now!"` inside an element with the `className` of `notification`

**CheckoutForm.jsx**

  - [x] Should render JSX that is wrapped by a `div` element with the `className` of `checkout-form`
  - [x] Should accept **at least** the following props:
    - `isOpen` - boolean
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
    - `checkoutForm` - the form state for the `CheckoutForm` component
    - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm`
    - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
  - [x] Should render two `input` elements, each with the `className` of `checkout-form-input`
    - [x] The `checkoutForm` prop should supply the correct props needed to create the two controlled inputs:
      - [x] The first input should have:
        - [x] the `type` prop set to `email`
        - [x] the `name` prop set to `email`
        - [x] the `placeholder` prop set to `student@codepath.org`
        - [x] the `value` prop set by `checkoutForm.email`.
        - [x] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
      - [x] The second input should have:
        - [x] the `type` prop set to `text`
        - [x] the `name` prop set to `name`
        - [x] the `placeholder` prop set to `Student Name`
        - [x] the `value` prop set by `checkoutForm.name`.
        - [x] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
  - [x] Should render a `button` element with the `className` of `checkout-button`.
    - [x] It should contain the text `Checkout`.
    - [x] When clicked, it should call the `handleOnSubmit` function.
      - [x] If that request fails, the `CheckoutForm` component should display an error message inside an element with the `className` of `error`.
      - [x] If the `POST` request is successful...
        - [x] The `CheckoutForm` component should display a success message that contains the text `"Success!"` inside an element with the `className` of `success`.
        - [x] The `shoppingCart` should be emptied
        - [x] The `checkoutForm` should be reset to its default state.

---

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Both of the labs this week definitely helped prepare me to complete the assignemnt. Specifically, both labs taught me a lot about how to use state variables as well as handler functions. For example, the Fast Food Feud Lab when we learned about clicking both the buttons to display the nutritional label taught me how to use state variables and the Twitter lab furthered my knowledge. I honestly felt pretty prepared to complete the weekly assignment it was just a bit overwhelming in regards to the structure.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have liked to add some additional styling specifically on the sidebar and the shopping cart/checkout form. I also would have liked to further format the product description page when it pops up. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Overall, the project demo went pretty well besides some of the small styling elements that I mentioned above. One element that I was pretty pleased with was the implementation of the search bar. Last week during Flixster I didn't have time/didn't really know how to make a search bar that searched as the user typed, but this week using state variables and passing the proper variables in as props allowed the search results to update as the user typed. Another small element that I was happy with was the displaying of the quantity of each product on the product card. I struggled a lot with using the appropriate setter functions but I ultimately learned a lot more about how React operates on a deeper level. The experience gave me a lot more debugging experience and also furthered my willingness to ask for help as both my peers and TAs were so helpful in finding the ultimate error!

### Open-source libraries used

- React Router DOM 
- Axios 

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Thank you to Vincent (our primary TA) for continuing to answer my endless questions. Thank you to Phineas and Yilika for also being incredibly helpful. Thanks to Lucas and Nicole for help with features and to my intern neighbor Kimberly for all of her help with CSS/styling. 

Thank you also to Mohan and Sunil for their continued support and bigger picture understanding of my internship as a whole!
