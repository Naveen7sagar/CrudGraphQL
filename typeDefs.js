const {gql} = require('apollo-server-express')
const typeDefs = gql`
type Post{
    id: ID
    title: String
    description: String  
}
type Query {
    hello: String
    getAllPosts: [Post]
}
input PostInput {
    title:String
    description: String
}
type Mutation {
    createPost(post:PostInput): Post

    deletePost(id: ID): String
    UpdatePost(id:ID, post: PostInput): Post
    
}

`;
module.exports = typeDefs

    // createPost(title:String.description: String):Post
    // getPost(id: ID):Post
