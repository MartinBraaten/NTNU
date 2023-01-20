const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const MONGODB = "mongodb://admin:admin@it2810-19.idi.ntnu.no:27017/"
const dbName = "Lol"

mongoose.connect(MONGODB, {dbName})
    .then(() => {
        console.log("Connection successful");
        
        return server.listen({port: 4000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });

