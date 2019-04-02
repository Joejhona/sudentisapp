<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Crear Clinica </strong><small>Formulario</small>
          </div>
          <b-form-group>
            <b-alert show variant="danger">
                <strong>Buscar en Sunat</strong> solo funciona para versiones pagadas adquierela 
                <a href="#" class="alert-link">aqui</a> solo por S/.30 mes.
            </b-alert>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-button variant="primary">
                  <i class="fa fa-search"></i> Buscar en Sunat
                </b-button>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Ingresa el Ruc"></b-form-input>
            </b-input-group>
          </b-form-group>
          <hr>
          <b-form>
            <b-form-group>
              <label for="company">Nombre</label>
              <b-form-input 
                v-validate="'required|max:50'" 
                name="nombre"
                v-model="nombre" 
                type="text" 
                id="company" 
                placeholder="Nombre de tu consultorio"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="street">Ruc</label>
              <b-form-input 
                v-validate="'required|digits:11'" 
                name="ruc"
                v-model="ruc" 
                type="number" 
                id="street" 
                placeholder="Ruc de 11 digitos"
              ></b-form-input>
            </b-form-group>
            <b-row>
              <b-col sm="8">
                <b-form-group>
                  <label for="city">Zona de Trabajo</label>
                  <b-form-input 
                    v-validate="'required|max:50'" 
                    name="zonadetrabajo"
                    v-model="zonadetrabajo" 
                    type="text" 
                    id="city" 
                    placeholder="Ciudad, distrito y barrio"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="postal-code">Telefono</label>
                  <b-form-input type="text" id="postal-code" placeholder="Telefono"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <div slot="footer" v-if="nombre && ruc && zonadetrabajo">
                <b-button @click="addClinic" size="sm" variant="primary" :disabled="errors.any()"><i class="fa fa-dot-circle-o"></i> Crear Clinica</b-button>
            </div>
            <!--
            <b-form-group>
              <label for="country">Country</label>
              <b-form-input type="text" id="country" placeholder="Country name"></b-form-input>
            </b-form-group>
            -->
          </b-form>
          <hr>
          <b-alert v-bind:key="error.id" v-for="error in errors.all()" show variant="danger">{{ error }}</b-alert>
        </b-card>
      </b-col>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Postular a un consultorio</strong>
          </div>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-button variant="primary">
                  <i class="fa fa-search"></i> Buscar
                </b-button>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Ingresa Ruc o Nombre"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-card>
      </b-col>
      <b-modal title="Felicitaciones ¡Clinica Creada!" v-model="clinicadd" class="modal-primary">
        <div v-if="clinicnew">
          <dl class="row">
            <dt class="col-sm-4">Ruc</dt>
            <dd class="col-sm-8">{{clinicnew.idruc}}</dd>
            <dt class="col-sm-4">Nombre</dt>
            <dd class="col-sm-8">{{clinicnew.name}}</dd>
            <dt class="col-sm-4">Zona de trabajo</dt>
            <dd class="col-sm-8">{{clinicnew.zonework}}</dd>
          </dl>
        </div>
      </b-modal>
      <!--
      <b-col v-if="clinicnew" cols="12" md="6">
        <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-align-justify"></i> Felicitaciones <small>clinica creada</small>
        </div>
        <b-alert show variant="success">
            <h4 class="alert-heading">Clinica {{clinicnew.name}}</h4>
            <p>
            Ahora podras trabajar independientemente, empieza por los siguientes pasos
            </p>
            <hr>
            <p class="mb-0">
            Ruc: {{clinicnew.idruc}} 
            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
        </b-alert>
        </b-card>
      </b-col>
      -->
    </b-row>
  </div>
</template>

<script>
import { Callout } from '@coreui/vue'
import { createClinic } from '@/services/GraphqlService'
import { ME_CLINICS_REQUEST } from '@/store/actions/work'
//import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Crear',
  data() {
    return {
      ruc: '',
      nombre: '',
      zonadetrabajo: '',
      clinicnew: '',
      clinicadd: false
    }
  },
  methods:{
    async addClinic(){
      await createClinic({idruc:this.ruc,name:this.nombre,zonework:this.zonadetrabajo})
        .then(resp => {
          //var clinic =
          this.clinicnew = resp.data.data.createClinic
          this.clinicadd = resp
          this.$store.dispatch(ME_CLINICS_REQUEST)
          //this.$router.push('/sudentis3/consultorio/misconsultorios')
        })
        .catch(resp => {
          this.clinicadd = false
        })
      //this.clinicnew = clinic.data.data.createClinic
      //this.clinicadd = clinic
      //if (this.clinic) {
      //  this.clinicadd = true
      //}
    },
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>