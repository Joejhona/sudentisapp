import gql from 'graphql-tag'

export const GET_USER = gql`
  query Username($username: String!){
    user(username:$username) {
      id
      username
      email
    }
  }
`;

export const GET_CLINICS = gql`
  query {
    allClinics {
      name
      idRuc
    }
  }
`;

export const GET_USERS = gql`
  query {
    allUsers {
      id
      username
      email
    }
  }
`;

export const GET_TOKEN = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      id
      username
      email
    }
  }
`;