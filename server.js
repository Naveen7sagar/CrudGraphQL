const express = require('express');
const { ApolloServer , gql} = require('apollo-server-express');
const resolvers = require('./resolver')
const typeDefs= require('./typeDefs')
const mongoose = require('mongoose')
// const Schema = require('./models/Post.model')


async function startServer(){
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,

    })
    await apolloServer.start()

    // apolloServer.applyMiddleware({app : app,path:'./truly'});
    apolloServer.applyMiddleware({app : app});
    
app.use((req,res)=>{
    res.send('hello from express apollo server')
})

await mongoose.connect('mongodb://localhost:27017/tutorial',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
console.log('GraphQL DataBase Connection...')

app.listen(4000,()=>{console.log(`Server is running on port 4000`)})
}
startServer();