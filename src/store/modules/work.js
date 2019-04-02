import { ME_CLINICS_REQUEST, ME_CLINICS_SUCCESS, ME_CLINICS_ERROR, ME_JOBS_REQUEST } from '../actions/work'
import { getMeClinics } from '@/services/GraphqlService'

const state = { status: '', clinics: {} }

//const getters = {
//    getProfile: state => state.status,
//    isProfileLoaded: state => !!state.profile.name,
//  }

const actions = {
    [ME_CLINICS_REQUEST]: ({commit, dispatch}) => {
        commit(ME_CLINICS_REQUEST)
        getMeClinics()
        .then(resp => {
            let clinics = resp.data.data
            console.log(clinics)
            commit(ME_CLINICS_SUCCESS, clinics)
          })
          .catch(resp => {
            commit(ME_CLINICS_ERROR)
            // if resp is unauthorized, logout, to
            // dispatch(AUTH_LOGOUT)
          })
    },
}

const mutations = {
    [ME_CLINICS_REQUEST]: (state) => {
        state.status = 'cargando'
    },
    [ME_CLINICS_SUCCESS]: (state, resp) => {
        state.status = 'exito'
        state.clinics = resp.meclinic
    },
    [ME_CLINICS_ERROR]: (state) => {
        state.clinics = {}
    }
}

export default {
    state,
    //getters,
    actions,
    mutations,
}