# Project #2: Student Store

## Overview

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of Codepath. The application entails a frontend user interface for potential customers to peruse the goods, and a backend API to handle data management. The API will be built with Node and Express and the UI will be built with React.

// Include your gif here

### Application Features

#### Core Features

- [x] Displays the following sections: header, banner, search, product grid, about, contact, and footer.
- [x] On initial page load, display the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store).
- [x] User can click on the categories (Clothing, food, etc) to filter the product grid by type.
- [x] User can search for products.
- [x] User can click on a product in the grid to view additional product details. Navigation is via a React Router.

#### Stretch Features - Week 1
- [x] User can click to expand the shopping cart in the left navigation.
- [x] User can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] User can click the '-' button on a product cart to increment that product in the shopping cart.
- [x] Shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] User can click in the top navigation bar to scroll to the relevant section.
- [x] User sees a "not found" display when searching for a nonexistent product.

#### Stretch Features - Week 2
- [ ] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Passing Automated Tests

The following specifications were met on the Express backend and the React frontend.

### React UI

**App.jsx**

  - [ ] The core App component that contains the routes for the app and does the initial data fetching
  - [ ] Renders a `BrowserRouter` component that contains a `Routes` component with the following routes:
    - [ ] `/` - Should render the `Home.jsx` component
    - [ ] `/products/:productId` - should render the `ProductDetail` component
    - [ ] `*` - anything else should render the `NotFound` component
  - [ ] Renders the `Navbar` component on every route
  - [ ] Renders the `Sidebar` component on every route
  - [ ] Should create **at least** the following state variables:
    - [ ] `products` - an array of product objects that is initially empty.
    - [ ] `isFetching` - a boolean value representing whether or not the App is currently fetching the `products` from the API.
    - [ ] `error` - a variable used to display a message when something goes wrong with the API requests.
    - [ ] `isOpen` - a boolean value representing whether or not the `Sidebar.jsx` is in the open or closed state.
    - [ ] `shoppingCart` - should store state for the active user's shopping cart (items they want to purchase and the quantity of each item).
      - [ ] Use whatever data type works best here, but make sure the format the `shoppingCart` as an array before passing it to other components.
      - [ ] When passed down to other components as a prop, it should formatted as an array of objects.
      - [ ] Each object in the array should have two fields:
        - [ ] The `itemId` field should store the `id` of the item being purchased.
        - [ ] The `quantity` field should store a number representing how many of that item the user is purchasing.
    - [ ] `checkoutForm` - the user's information that will be sent to the API when they checkout.
  - [ ] Leverage the `useEffect` hook to ensure that when the `App.jsx` component is mounted to the screen...
    - [ ] It should make a `GET` request to the API's `/store` endpoint with the `axios.get` method.
    - [ ] When the request completes successfully, it should store the `products` returned by the response in state.
    - [ ] If the request does not complete successfully, or there are no `products` found in the response,
            it should create an error message and store it in the `error` state variable.
  - [ ] The `App.jsx` component should define handler functions to be passed as props to the `Home` and `ProductDetail` components.
    - [ ] Define as many as are needed.
    - [ ] At minimum, **create these five handlers**:
      - [ ] The **`handleOnToggle`** function. When called...
        - [ ] It should toggle the open/closed state of the `Sidebar`.
      - [ ] The **`handleAddItemToCart`** function. When called...
        - [ ] It should accept a single argument - `productId`
        - [ ] It should add that product to the `shoppingCart` if it doesn't exist, and set its quantity to `1`.
        - [ ] If it does exist, it should increase the quantity by `1`.
        - [ ] It should add the price of the product to the total price of the `shoppingCart`.
      - [ ] The **`handleRemoveItemFromCart`** function. When called...
        - [ ] It should accept a single argument - `productId`
        - [ ] It should decrease the quantity of the item in the `shoppingCart` by `1`, but only if it already exists.
        - [ ] If it doesn't exist, the function should do nothing.
        - [ ] If the new quantity is `0`, it should remove the item from the `shoppingCart`
      - [ ] The **`handleOnCheckoutFormChange`** function. When called...
        - [ ] It should receive two arguments:
          - [ ] `name` - the `name` attribute of the input being updated
          - [ ] `value` - the new value to set for that input
        - [ ] It should update the `checkoutForm` object with the new value from the correct input(s)
      - [ ] The **`handleOnSubmitCheckoutForm`** function. When called...
        - [ ] It should submit the user's order to the API
        - [ ] To submit the user's order, it should leverage the `axios.post` method to send a `POST` request to the `/store` endpoint.
        - [ ] The body of that `POST` request should be an object with two fields:
          - [ ] The `user` field:
            - [ ] Should be an object containing `name` and `email` properties
            - [ ] Each property should be set to the correct value found in the `checkoutForm`
          - [ ] The `shoppingCart` field:
            - [ ] Should contain the user's order formatted as an array of objects.
            - [ ] Each object in the array should have two fields:
              - [ ] The `itemId` field should store the `id` of the item being purchased.
              - [ ] The `quantity` field should store a number representing how many of that item the user is purchasing.
            - [ ] Don't include the `total` price here, since we'll be calculating that on the backend. Remember to never trust the client!

**Navbar.jsx**

  - [ ] Should render JSX that is wrapped by a `nav` element with a `className` of `navbar`
  - [ ] Should render the `Logo` component that links to the `/` route when clicked

**Logo.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `logo`
  - [ ] Should use the `Link` component from `react-router-dom` to link to the home route (`/`) when clicked

**Home.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `home`
  - [ ] Should accept **at least** the following props:
    - `products` - an array of product objects
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [ ] Should render the `Hero` component
  - [ ] Should render the `ProductGrid` component

**Hero.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `hero`
  - [ ] Should display an intro message inside an element with the `className` of `intro`. That message should contain the text `"Welcome!"` somewhere within it.
  - [ ] Should render a hero image inside an `img` tag with the `className` of `hero-img`.

**ProductGrid.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `product-grid`
  - [ ] Should accept **at least** the following props:
    - `products` - an array of product objects
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [ ] Should iterate over its `products` prop, rendering a `ProductCard` component for each one. Set the `showDescription` prop to `false` for all of the `ProductCard` components rendered in the `ProductGrid` component.

**ProductDetail.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `product-detail`
  - [ ] Should accept **at least** the following props:
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [ ] Should define **at least** a `product` state variable and updater
  - [ ] It should leverage the `useParams` hook from `react-router-dom` to extract the `productId` param from the url.
  - [ ] When the component is mounted to the screen...
    - [ ] It should make a `GET` request to the `/store/:productId` endpoint with the `axios.get` method.
    - [ ] The `:productId` part of the request should be replaced with the `productId` pulled from the url.
    - [ ] When the initial request is loading, it should render an `h1` element with the `className` of `loading` and contain the text `"Loading..."`
    - [ ] It should store the `product` received by the request in state and then render the `ProductView` component.
    - [ ] If no `product` is found with that `id`, it should render the `NotFound` component

**ProductView.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `product-view`
  - [ ] Should accept **at least** the following props:
    - `product` - the `product` object returned by the API request
    - `productId` - the id of the product extracted from the url
    - `quantity` - the quantity for this product found in the `shoppingCart`
    - `handleAddItemToCart` - handler function
    - `handleRemoveItemToCart` - handler function
  - [ ] It should display an `h1` element with the `className` of `product-id` that contains the text: `Product #` followed by the `productId` prop
  - [ ] It should render a `ProductCard` component and pass it the props it needs. It should also set the `showDescription` prop to `true` for this product card.

**ProductCard.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `product-card`
  - [ ] Should accept **at least** the following props:
    - `product` - a product object
    - `productId` - a `number` representing the `id` of the product
    - `quantity` - the quantity for this product found in the `shoppingCart`
    - `handleAddItemToCart` - handler function
    - `handleRemoveItemToCart` - handler function
    - `showDescription` - boolean
  - [ ] Should render the `name` of the product inside an element with the `className` of `product-name`
  - [ ] Should render the `price` of the product inside an element with the `className` of `product-price`. The price should formatted so that it starts with a `$`, and has **at least one** integer digit, along with **exactly two** decimal digits. Examples - `$22.99`, `$860.20`, and `$0.50`
  - [ ] If the `showDescription` prop is set to `true`, it should render the `description` of the product inside an element with the `className` of `product-description`.
  - [ ] Should render an `img` element for the product:
    - [ ] The `img` element should have a `src` attribute to set to the `image` property of the `product` prop.
    - [ ] The `img` element should be wrapped in a `Link` component from `react-router-dom`.
      - [ ] The `Link` element should have a `to` prop so that when the `img` element is clicked on, it should navigate to the product detail route for that product using its `id` attribute. For example, a product with an `id` of `4` should create a `Link` with its `to` prop set to `/products/4`.
      - [ ] The `Link` that wraps the `img` element should be nested somewhere inside an element with the `className` of `media`.
  - [ ] Should render two `buttons` elements...
    - [ ] One button with a `className` of `add`. When clicked, it should call the `handleAddItemToCart` function with the `id` of the `product` as its only argument.
    - [ ] One button with a `className` of `remove`. When clicked, it should call the `handleRemoveItemFromCart` function with the `id` of the `product` as its only argument.
  - [ ] Should display the current quantity of items that the user has selected in their shopping cart. The quantity should be rendered inside an element with the `className` of `product-quantity`. If none of that particular item have been added to the shopping cart, it should render nothing there.

**Sidebar.jsx**

  - [ ] Should render JSX that is wrapped by a `section` element with the `className` of `sidebar`
  - [ ] Should accept **at least** the following props (and probably a few more):
    - `isOpen` - boolean representing the open/closed state of the Sidebar
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
    - `products` - the array of products fetched from the API
    - `checkoutForm` - the form state for the `CheckoutForm` component
    - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm` object
    - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
    - `handleOnToggle` - handler function to toggle open/closed `Sidebar` state
  - [ ] It should always render a `button` element with the `className` of `toggle-button`. When that button is clicked it should change the `isOpen` prop by calling the `handleOnToggle` prop.
  - [ ] When the sidebar is opened, it should display the `ShoppingCart` and `CheckoutForm` components and should be wider than `350px`.
  - [ ] When the sidebar is closed, it should only render the toggle button and shouldn't be wider than `150px`.

**ShoppingCart.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with the `className` of `shopping-cart`
  - [ ] Should accept **at least** the following props (and probably a few more):
    - `isOpen` - boolean representing the open/closed state of the Sidebar
    - `products` - the array of products fetched from the API
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
  - [ ] For every item in the `shoppingCart`:
    - [ ] It should display the `name` of the item in an element with the `className` of `cart-product-name`. Remember that items in the `shoppingCart` prop will **only** contain the `itemId` and `quantity` fields. Other props will have to be used to conver the `itemId` field to the `product`'s name.
    - [ ] It should display the `quantity` of the item in an element with the `className` of `cart-product-quantity`
  - [ ] It add up the cost of all items (make sure to use the quantity of the item requested), and render that amount **rounded up to exactly 2 decimal places** inside an element with the `className` of `subtotal`. Make sure it is prefixed with a dollar sign ($)!
  - [ ] It should calculate the cost of taxes on that subtotal (using 8.75% as the tax rate), add that amount to the subtotal, and render the total cost **rounded up to exactly 2 decimal places** inside an element with the `className` of `total-price`. Make sure it is prefixed with a dollar sign ($)!
  - [ ] If no items exist in the `shoppingCart`, it should render this message: `"No items added to cart yet. Start shopping now!"` inside an element with the `className` of `notification`

**CheckoutForm.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with the `className` of `checkout-form`
  - [ ] Should accept **at least** the following props:
    - `isOpen` - boolean
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
    - `checkoutForm` - the form state for the `CheckoutForm` component
    - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm`
    - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
  - [ ] Should render two `input` elements, each with the `className` of `checkout-form-input`
    - [ ] The `checkoutForm` prop should supply the correct props needed to create the two controlled inputs:
      - [ ] The first input should have:
        - [ ] the `type` prop set to `email`
        - [ ] the `name` prop set to `email`
        - [ ] the `placeholder` prop set to `student@codepath.org`
        - [ ] the `value` prop set by `checkoutForm.email`.
        - [ ] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
      - [ ] The second input should have:
        - [ ] the `type` prop set to `text`
        - [ ] the `name` prop set to `name`
        - [ ] the `placeholder` prop set to `Student Name`
        - [ ] the `value` prop set by `checkoutForm.name`.
        - [ ] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
  - [ ] Should render a `button` element with the `className` of `checkout-button`.
    - [ ] It should contain the text `Checkout`.
    - [ ] When clicked, it should call the `handleOnSubmit` function.
      - [ ] If that request fails, the `CheckoutForm` component should display an error message inside an element with the `className` of `error`.
      - [ ] If the `POST` request is successful...
        - [ ] The `CheckoutForm` component should display a success message that contains the text `"Success!"` inside an element with the `className` of `success`.
        - [ ] The `shoppingCart` should be emptied
        - [ ] The `checkoutForm` should be reset to its default state.

---

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Add your response here

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Add your response here

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Add your response here

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.
