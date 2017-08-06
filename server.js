/**
 * A simple GraphQL starter with Node.JS and Express
 * @author  Jon Bonso
 */

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
//var Stock = require('./models/stock');
var crypto = require('crypto');

var mockDatabase = {};

var schema = buildSchema(`
  input StockObject {
    stockName: String
    stockPrice: String
  }

  type Stock {
    id: ID!
    stockName: String
    stockPrice: String
  }

  type Query {
    getStock(id: ID!): Stock
    stocks : [Stock] 
  }

  type Mutation {
    createStock(input: StockObject): Stock
    updateStock(id: ID!, input: StockObject): Stock
  }
`);

// TODO: Move this to model/stock.js
class Stock {
  constructor(id, {stockName, stockPrice}) {
    this.id = id;
    this.stockPrice = stockPrice;
    this.stockName = stockName;
  }
}

var root = {
  /**
   * Get all Stocks
   */
  stocks: () => {
    return mockDatabase;
  },

  getStock: function ({id}) {
    if (!mockDatabase[id]) {
      throw new Error('no Stock exists with ID: ' + id);
    }
    return new Stock(id, mockDatabase[id]);
  },

  /**
   * Sample CreateStock Mutation Payload: 
        mutation {
          createStock(input: {
          stockName: "Google",
          stockPrice: "100.20",
          }) {
            id
          }
        }
   * 
   */
  createStock: function ({input}) {
    var id = crypto.randomBytes(10).toString('hex');
    mockDatabase[id] = input;
    return new Stock(id, input);
  },

  /**
   * Sample CreateStock Mutation Payload: 
   * 
   *  Step 1: Ensure you create at least 1 stock
   *  Step 2: Get the Id ( example: cd9440b48a1815b3da4d )
   *  Step 3: Use the id as the first parameter: 
   * 
   *    mutation {
          updateStock( id: "cd9440b48a1815b3da4d", input: {
          		stockName: "Amazon",
         			 stockPrice: "101",
          }){
            id
          }  
        }
   */
  updateStock: function ({id, input}) {
    if (!mockDatabase[id]) {
      throw new Error('no Stock exists with ID: ' + id);
    }
    mockDatabase[id] = input;
    return new Stock(id, input);
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(2017);
console.log('Access GraphQL API server at localhost:2017/graphql');
