import gql from 'graphql-tag'

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
      nombre
      region
      estado
      href
      urlimg
      zonework
      credit
      dentistcreate
      dentistuser{
        id
        username
        email
      }
    }
  }
`;

export const CREATE_CLINIC = gql`
  mutation CreateClinic($idruc: String!, $name: String!, $zonework: String!){
    createClinic(idruc: $idruc, name: $name, zonework: $zonework) {
      idruc
      name
      zonework
      job
    }
  }
`;

export const GET_ME_CLINICS = gql`
  query{
    meclinic{
      condicion
      idruc
      name
      estado
      positionSet{
        job
        dentist{
          nombre
          dentistuser{
            username
          }
        }
      }
    }
  }
`;



/*
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
*/
