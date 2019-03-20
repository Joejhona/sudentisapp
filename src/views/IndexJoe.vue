<template>
    <div>
        <h1>Pagina de Inicio</h1>

        <h1>Anuncions e imagenes para la aplicación</h1>

        <b-button v-if="!isAuthenticated && !authLoading" to='/pages/login' variant="primary" size="lg">Iniciar Sesion</b-button>

        <div class="input-group">
            <input type="text" v-on:keydown.enter="getUsername" v-model="username" placeholder="edit me"/>
            <button @click="getUsername" type="submit">
                    Click
            </button>
        </div>

        <section v-if="user">
                <div> {{user.username}} </div>
                <div> {{user.id}} </div>
        </section>

        <div class="input-group">
            <input type="text" v-model="userlogin" placeholder="usernamet" autocomplete="userrr"/>
            <input type="password" v-on:keydown.enter="getToken" v-model="password" placeholder="password" autocomplete="passworddd"/>
            <button @click="getToken" type="submit">
                    Obtener Token
            </button>
        </div>
        <section v-if="token">
                TOKEN: {{token}}
        </section>

    </div>
</template>

<script>
import { Callout } from '@coreui/vue'
import { getClinics, getUsers, getUser, getTokenUP, getCookie } from '@/services/GraphqlService'
import { mapGetters, mapState } from 'vuex'


const tokenj = localStorage.getItem('user-token')
console.log(tokenj)

export default {
    name: 'indexjoe',
    data(){
        return{
            username: '',
            user: '',
            userlogin: '',
            password: '',
            token:''
        }
    },
    methods:{
        async getUsername(){
            var response = await getUser({username:this.username})
            this.username = response.data.data.user.username
            this.user = response.data.data.user
        },
        async getToken(){
            var tokenAuth = await getTokenUP({username:this.userlogin,password:this.password})
            this.token = tokenAuth.data.data.tokenAuth.token
        },
    },
    computed:{
        ...mapGetters(['isAuthenticated']),
        ...mapState({
            name: state => `${state.user.profile.nombre}`,
        })
    }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>