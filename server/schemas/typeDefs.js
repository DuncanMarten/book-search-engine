const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        bookId: Int
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }    

    input Author {
        name: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [Author], description: String, title: String, bookId: ID, image: String, link: String): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;