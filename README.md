# hellographql
Author: Jon Bonso

A simple GraphQL API with Create, Read, Update and Delete functions

# How to run:
```npm start```

Then go to http://localhost:2017/graphql

![Hello GraphiQL API](https://raw.githubusercontent.com/jsbonso/hellographql/master/hello_graphql.png?raw=true "Hello GraphiQL API")


#Sample CreateStock Mutation Payload: 
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
#Sample UpdateStock Mutation Payload: 
   
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
