# hellographql
Author: Jon Bonso

A simple GraphQL API with Create, Read, Update and Delete functions using NodeJS, Express and Express-Graphql

This is a bare-to-the-bones implementation of GraphQL API, without using GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString et cetera, but nonetheless,
this small project can still help you learn how GraphQL works and how it performs in 
comparison with RESTful APIs. 

# How to run:
```npm start``` or
```node server.js```

Then go to http://localhost:2017/graphql

![Hello GraphiQL API](https://raw.githubusercontent.com/jsbonso/hellographql/master/hello_graphql.png?raw=true "Hello GraphiQL API")


# Sample CreateStock Mutation Payload: 
```
    mutation {
      createStock(input: 
        {
         stockName: "Google",
         stockPrice: "100.20",
        }
        ){
            id
        }
    }
```

# Sample GetStock Query:
```
   { 
    getStock(id: "ad5ffb568d234aa723a0") {
      id
      stockName
      stockPrice
    }
   }
```


# Sample UpdateStock Mutation Payload: 
   
Step 1: Ensure you create or have at least 1 stock
Step 2: Get the Id ( example: cd9440b48a1815b3da4d )
Step 3: Use the id as the first parameter: 

```
   mutation {
     updateStock( id: "cd9440b48a1815b3da4d", 
                 input: {
          		    stockName: "Amazon",
     			    stockPrice: "101",
                }){
            id
        }  
    }
```

 # Sample DeleteStock Mutation Payload: 
 ```
    mutation {
          deleteStock( id: "cd9440b48a1815b3da4d"){
            id
          }  
        }
```