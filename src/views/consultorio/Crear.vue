<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Crear Clinica </strong><small>Form</small>
          </div>
          <b-form @submit="addClinic">
            <b-form-group>
              <label for="company">Nombre</label>
              <b-form-input v-model="nombre" type="text" id="company" placeholder="Enter your company name" name="nombre"></b-form-input>
            </b-form-group>
            <!--
            <b-form-group label-for="rucImput">
              <label for="rucImput">Ruc</label>
              <b-form-input 
                  id="rucImput"
                  type="number"
                  v-model="ruc"
                  v-validate="'required|numeric|digits:11'" 
                  :state="validateState('ruc')"
                  aria-describedby="input1LiveFeedback"
                  placeholder="Ingresa un Ruc"></b-form-input>
              <b-form-invalid-feedback id="input1LiveFeedback">
                  This is a required field and must be at least 3 characters
              </b-form-invalid-feedback>
            </b-form-group>
            -->
            <b-form-group>
              <label for="street">Ruc</label>
              <b-form-input v-model="ruc" type="number" id="street" placeholder="Enter street name" name="ruc"></b-form-input>
            </b-form-group>
            <b-row>
              <b-col sm="8">
                <b-form-group>
                  <label for="city">Zona de Trabajo</label>
                  <b-form-input v-model="zonadetrabajo" type="text" id="city" placeholder="Enter your city" name="zonadetrabajo"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="postal-code">Telefono</label>
                  <b-form-input type="text" id="postal-code" placeholder="Postal Code"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <div slot="footer">
                <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Crear Clinica</b-button>
            </div>
            <!--
            <b-form-group>
              <label for="country">Country</label>
              <b-form-input type="text" id="country" placeholder="Country name"></b-form-input>
            </b-form-group>
            -->
          </b-form>
          <hr>
        </b-card>
      </b-col>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Jalar de la Sunat</strong> Solo 3 intentos
          </div>
          <b-form-group>
            <b-alert show variant="danger">
                Solo funciona para versiones pagadas <a href="#" class="alert-link">adquierela aqui solo por S/.30 mes</a>.
            </b-alert>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-button variant="primary">
                  <i class="fa fa-search"></i> Buscar
                </b-button>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Username"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-card>
      </b-col>
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
    </b-row>
  </div>
</template>

<script>
import { Callout } from '@coreui/vue'
import { createClinic } from '@/services/GraphqlService'
//import { mapGetters, mapState } from 'vuex'

export default {
  name: 'control',
  data() {
    return {
      estado: "En el local store se gurdan cosas, para recuperar",
      form: {
          ruc:10434638254,
      },
      ruc: '',
      nombre: '',
      zonadetrabajo: '',
      clinicnew: ''
    }
  },
  methods:{
    async addClinic(){
        var clinic = await createClinic({idruc:this.ruc,name:this.nombre,zonework:this.zonadetrabajo})
        //console.log(clinic)
        this.clinicnew = clinic.data.data.createClinic
    },
    
    //async getToken(){
    //    var tokenAuth = await getTokenUP({username:this.userlogin,password:this.password})
    //    this.token = tokenAuth.data.data.tokenAuth.token
    //},

    //validateState(ref) {
    //    if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
    //      return !this.errors.has(ref)
    //    }
    //    return null
    //}
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>