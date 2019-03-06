/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
//import apiCall from 'utils/api'
import {getTokenUP} from '@/services/GraphqlService'
import {apitoken} from '@/services/api'
//import Router from '@/router'

const state = { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      //////////////////////
      //apiCall({url: 'auth', data: user, method: 'POST'})
      //console.log(user.username)
      getTokenUP({username:user.username,password:user.password})
      .then(resp => {
        //console.log(resp.data.data.tokenAuth.token)
        //localStorage.setItem('user-token', resp.token)
        let token = resp.data.data.tokenAuth.token
        //let name = user.username
        console.log(token)
        //var tokenA = resp.data.data.tokenAuth.token
        //console.log(tokenA)
        localStorage.setItem('user-token', token)      
        // Here set the header of your ajax library to the token value.
        // example with axios
        // axios.defaults.headers.common['Authorization'] = resp.token
        apitoken.defaults.headers.common['Authorization'] = `JWT ${token}`
        commit(AUTH_SUCCESS, token)
        dispatch(USER_REQUEST)
        resolve(resp)
        //Router.push('/indexjoe')
      })
      .catch(err => {
        commit(AUTH_ERROR, err)
        localStorage.removeItem('user-token')
        reject(err)
      })
    })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('user-token')
      resolve()
    })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}