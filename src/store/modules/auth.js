/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
import { getTokenUP } from '@/services/GraphqlService'
import { apitoken } from '@/services/api'
//import Router from '@/router'

const state = { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false }
//const state = { token: '', status: '', hasLoadedOnce: false }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      getTokenUP({username:user.username,password:user.password})
      .then(resp => {
        let token = resp.data.data.tokenAuth.token
        console.log(token)
        //var tokenA = resp.data.data.tokenAuth.token
        localStorage.setItem('user-token', token)      
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