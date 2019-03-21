import axios from 'axios'
import { print } from 'graphql'
import { GET_USERS,GET_CLINICS,CREATE_CLINIC,GET_TOKEN,GET_ME } from '@/services/queries'
//import { apitoken, instance } from '../services/api'
//import jQuery from 'jquery'
//instance.defaults.xsrfHeaderName = "X-CSRFToken";

const apitoken = axios.create({
    //baseURL: "http://127.0.0.1:8000/gql",
    //baseURL: "http://joejhona.pythonanywhere.com/gql",
    baseURL: "https://joejhona.pythonanywhere.com/gql",
    //timeout: 5000,
})
/*
function getUsers () {
    return apitoken.post('',{
        query: print(GET_USERS)
        })
    }

function getClinics () {
    return apitoken.post('',{
        query: print(GET_CLINICS)
        })
    }

function getUser (params) {
    return apitoken.post('',{
        query: print(GET_USER),
        variables:{
            username : params.username
        }
    })
}
*/
function getTokenUP (params) {
    return apitoken.post('',{
        query: print(GET_TOKEN),
        variables: {
            username : params.username,
            password : params.password
        }
    })
    //.then(res => console.log(res))
}

function getMe () {
    return apitoken.post('',{
        query: print(GET_ME)
    })
}

function createClinic (params) {
    return apitoken.post('',{
        query: print(CREATE_CLINIC),
        variables: {
            idruc    : params.idruc,
            name     : params.name,
            zonework : params.zonework,
        }
    })
}

export {createClinic,getTokenUP,getMe}

/*
export default {
    getUsers () {
        return axios({
            method: 'POST',
            url: "http://127.0.0.1:8000/gql",
            data: {
                query: print(GET_USERS)
            }
        })
    }
}
*/
/*
import Apigraphql from '@/services/Apigraphql'

export default {
    getUsers () {
        return Apigraphql().post('/gql',{ query: `allUsers {
            id
            username
            email
          }`
        })
    }
}
*/
/*
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');
*/