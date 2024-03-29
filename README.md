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

Users are able to add/remove items to/from their basket from its product card.

I have used [React's Context API](https://reactjs.org/docs/context.html#when-to-use-context) to handle the basket state as this application is small as is its global state, with no complex logic.

In a real world example Redux would probably be the better option as I would expect this products page to be part of a larger application, potentially with a larger and more complex global state.

Users are able to view the contents of their basket by clicking the basket icon in the top right corner. A dropdown basket will appear where users can remove individual items if multiple or delete all quantity of an item.

# Testing

Unit tests: This project is using [Jest](https://jestjs.io/) for unit testing.

Jest coverage (as of 02/08/2022):

<pre>
---------------------|---------|----------|---------|---------|----------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
---------------------|---------|----------|---------|---------|----------------------
All files            |   68.75 |       44 |   78.12 |   69.84 |                      
 src                 |    8.33 |        0 |   33.33 |    8.33 |                      
  App.js             |     100 |      100 |     100 |     100 |                      
 src/components      |   82.69 |    52.38 |   82.75 |   84.31 |                      
  AddToBasket.js     |     100 |      100 |     100 |     100 |                      
  Basket.js          |     100 |      100 |     100 |     100 |                      
  FullBasket.js      |     100 |       75 |     100 |     100 | 14                   
  GlobalState.js     |   73.52 |    36.36 |   54.54 |   75.75 | 30,37,44-46,61,68-69 
  Product.js         |     100 |      100 |     100 |     100 |                      
  Products.js        |     100 |       50 |     100 |     100 | 12-15                
---------------------|---------|----------|---------|---------|----------------------
</pre>

Accessibility: This project has been accessibility tested using the [WAVE accessibility tool](https://wave.webaim.org/).

CI: [Github actions](https://github.com/features/actions) are used for CI testing.
