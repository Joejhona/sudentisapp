<template>
  <b-row>
    <b-col lg="6" v-bind:key="clinica.id" v-for="clinica in clinicas">
      <b-card>
        <div slot="header">
          <h3>{{clinica.nombre}}</h3>
        </div>
        <dl class="row">
          <dt class="col-sm-3">Ruc</dt>
          <dd class="col-sm-9">{{clinica.ruc}}</dd>
          <dt class="col-sm-3">Trabajadores</dt>
          <dd class="col-sm-9">{{clinica.trabajadores}}</dd>
        </dl>
        <b-table striped hover :items="clinica.trabajador" />
        <div slot="footer">
          <b-button-group>
            <b-button class="d-sm-down-none" variant="success">Editar</b-button>
            <b-button variant="primary">Fusionar </b-button>
          </b-button-group>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { Callout } from '@coreui/vue'
import { mapState } from 'vuex'

export default {
  name: 'MisConsultorios',
  data() {
    return {
    }
  },
  computed: {
    clinicas: function(){
      var arr = []
      var len = this.meclinic.length
      var trabajadores = function(key){
            this.key = key
            var arr2 = []
            var len2 = this.key.length
            for (var j = 0; j < len2; j++){
              arr2.push({
                Dentista: this.key[j].dentist.nombre,
                Puesto: this.key[j].job,
                Estado: this.key[j].dentist.estado
              })
            }
            return arr2 
          }
      for (var i = 0; i < len; i++) {
        arr.push({
            ruc: this.meclinic[i].idruc,
            nombre: this.meclinic[i].name,
            condicion: this.meclinic[i].condicion,
            estado: this.meclinic[i].estado,
            trabajadores: this.meclinic[i].positionSet.length,
            trabajador: new trabajadores(this.meclinic[i].positionSet) 
        });
      } 
      return arr
    },
    //joel: function(){
    //  var columns = {}
    //  var len = this.meclinic.length
    //  for (var i = 0; i < len; i++){
    //    var ruc = this.meclinic[i].idruc
    //    columns[ruc] = ruc
    //  }
    //  return columns
    //},
    ...mapState({
      //meclinic: state => state.user.clinics
      meclinic: state => state.work.clinics
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