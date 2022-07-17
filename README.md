# Sainsbury’s Tech Front End Exercise

This repo contains a project as per [Sainsbury's Front End Exercise](https://jsainsburyplc.github.io/front-end-test/).

# Technologies

## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Jest

This project uses [Jest](https://jestjs.io/) for testing.

# Features

## Products

The initial view of this app displays a list of products in product cards.

Fetching data from [products](https://jsainsburyplc.github.io/front-end-test/products.json), the product cards show the product image, name, SKU and price.

## Basket

Users are able to add and remove items to/from their basket from its product card.

I have used [React's Context API](https://reactjs.org/docs/context.html#when-to-use-context) to handle the basket state as this application is small as is its global state, with no complex logic.

In a real world example Redux would probably be the better option as I would expect this products page to be part of a larger application, potentially with a larger and more complex global state.

# Testing

Unit tests: This project is using [Jest](https://jestjs.io/) for unit testing.

Jest coverage (as of 17/07/2022):

<pre>
-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------|---------|----------|---------|---------|-------------------
All files        |   84.09 |       60 |   83.33 |   84.09 |                   
 src             |     100 |      100 |     100 |     100 |                   
  App.js         |     100 |      100 |     100 |     100 |                   
 src/components  |   83.72 |       60 |    82.6 |   83.72 |                   
  AddToBasket.js |     100 |      100 |     100 |     100 |                   
  Basket.js      |     100 |      100 |   66.66 |     100 |                   
  GlobalState.js |   76.66 |       50 |   66.66 |   76.66 | 29,36-38,53,60-61 
  Product.js     |     100 |      100 |     100 |     100 |                   
  Products.js    |     100 |       50 |     100 |     100 | 14                
-----------------|---------|----------|---------|---------|-------------------
</pre>

Accessibility: This project has been accessibility tested using the [WAVE accessibility tool](https://wave.webaim.org/).

CI: [Github actions](https://github.com/features/actions) are used for CI testing.
