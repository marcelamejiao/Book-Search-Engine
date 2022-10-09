import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                username
                _id
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation Mutation($input: saveBookInput) {
        saveBook(input: $input) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation Mutation($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            savedBooks {
                bookId
            }
        }
    }
`;

