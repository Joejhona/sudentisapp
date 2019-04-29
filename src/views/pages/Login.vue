<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="login">
                  <h2>Login AppSudentis3</h2>
                  <!--<p class="text-muted">Sign In to your account</p>-->
                  <p class="text-muted">Si ya te registraste entra con tu cuenta</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input required v-model="username" type="text" v-validate="'numeric'" name="Usuario" data-vv-as="Numero de COP" class="form-control" placeholder="Colegiatura COP" autocomplete="username email" />
                  </b-input-group>
                  <b-alert v-bind:key="error.id" v-for="error in errors.collect('Usuario')" show variant="danger">{{ error }}</b-alert>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input required v-model="password" type="password" class="form-control" placeholder="Contraseña" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" type="submit">Entrar</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">¿olvidaste tu contraseña?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <!--<h2>Sign up</h2>-->
                  <h2>Registrate</h2>
                  <p>Si todavia no tienes cuenta, creala con tu cuenta de Google, Facebook, Instagram o Twiter. 
                    Debes ingresar tu Colegiatura y crear una contraseña, es muy facil.</p>
                  <b-button variant="primary" class="active mt-3" href="https://joejhona.pythonanywhere.com/">¡Registrate Ahora!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {AUTH_REQUEST} from '@/store/actions/auth'

export default {
  name: 'Login',
  data(){
    return{
      username: '',
      password: '',
      key: 1,
    }
  },
  methods:{
    login: function(){
      const { username, password } = this
      //this.$store.dispatch(AUTH_REQUEST, {username,password})
      this.$store.dispatch(AUTH_REQUEST, {username,password}).then(()=>{
        this.$router.push('/control')
      })
    }
  }
}
</script>
