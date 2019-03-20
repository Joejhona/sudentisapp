<template>
  <div class="animated fadeIn">
      <h1>Bienbenido</h1>
      <h2>{{name}}</h2>
      <h2>{{estado}}</h2>
      <h2>{{me.nombre}}</h2>
      <h2>{{me.estado}}</h2>
  </div>
</template>

<script>
import { Callout } from '@coreui/vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'control',
  data() {
    return {
      name: "Deberia Salir el Nombre",
      estado: "En el local store se gurdan cosas, para recuperar"
    }
  },
  computed: {
    //name () {
    //  return this.$route.name
    //},
    ...mapGetters(['isAuthenticated']),
    ...mapState({
        //name: state => `${state.user.profile.nombre}`,    //--> si quieres llamar a uno solo
        //estado: state => `${state.user.profile.estado}`,  
        me: state => state.user.profile                     //--> para llamar a todo el objeto
      }),
  }, 
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>