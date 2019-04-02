<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <b-card>
          <div slot="header">
            <strong>Buscar paciente</strong>
          </div>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-button variant="primary">
                  <i class="fa fa-search"></i> Buscar
                </b-button>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Ingresa DNI, Nombre o Apellido"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-card>
      </b-col>
      <b-col sm="12">
        <b-card>
          <div slot="header">
            <strong>Crear Historia </strong><small>Formulario</small>
          </div>
          <b-form>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="city">Nombre(s)</label>
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
                  <label for="city">Primer Apellido</label>
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
                  <label for="postal-code">Segundo Apellido</label>
                  <b-form-input type="text" id="postal-code" placeholder="Telefono"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="city">DNI</label>
                  <b-form-input 
                    v-validate="'required|max:50'" 
                    name="zonadetrabajo"
                    v-model="zonadetrabajo" 
                    type="text" 
                    id="city" 
                    placeholder="DNI"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="city">Celular</label>
                  <b-form-input 
                    v-validate="'required|max:50'" 
                    name="zonadetrabajo"
                    v-model="zonadetrabajo" 
                    type="text" 
                    id="city" 
                    placeholder="Celular"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="postal-code">E-mail</label>
                  <b-form-input type="text" id="postal-code" placeholder="e-mail"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="4">
                <b-form-group
                  label="Sexo"
                  label-for="basicRadios"
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-radio-group id="basicRadios"
                    :plain="true"
                    value="1"
                    :options="[
                      {text: 'Masculino ',value: '1'},
                      {text: 'Femenino ',value: '2'},
                    ]"
                    checked="3"
                    stacked>
                  </b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="postal-code">Fecha de Nacimiento</label>
                  <b-form-input type="date" id="date"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="postal-code">Alergias</label>
                  <b-form-input type="text"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <hr>
            <b-button-group>
              <b-button @click="addClinic" v-if="nombre" variant="primary" :disabled="errors.any()"><i class="fa fa-dot-circle-o"></i> Crear Clinica</b-button>
              <b-btn v-b-toggle.collapse1 variant="success"><i class="fa fa-plus"></i> Mas Datos</b-btn>
            </b-button-group>
            <hr>
            <b-collapse id="collapse1" class="mt-2">
              <b-row>
                <b-col sm="4">
                  <b-form-group>
                    <label for="street">Lugar de Nacimiento</label>
                    <b-form-input 
                      v-validate="'required|digits:11'" 
                      name="ruc"
                      v-model="ruc" 
                      type="number" 
                      id="street" 
                      placeholder="Lugar de Nacimiento"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="4">
                  <b-form-group>
                    <label for="street">Dirección Actual</label>
                    <b-form-input 
                      v-validate="'required|digits:11'" 
                      name="ruc"
                      v-model="ruc" 
                      type="number" 
                      id="street" 
                      placeholder="Dirección referencial"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="4">
                  <b-form-group>
                    <label for="street">Ocupación</label>
                    <b-form-input 
                      v-validate="'required|digits:11'" 
                      name="ruc"
                      v-model="ruc" 
                      type="number" 
                      id="street" 
                      placeholder="Ocupación"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group>
                <label for="street">Antecedentes Personales</label>
                <b-form-input 
                  v-validate="'required|digits:11'" 
                  name="ruc"
                  v-model="ruc" 
                  type="text" 
                  id="street" 
                  placeholder="Indicar los antecedentes personales"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <label for="street">Antecedentes Familiares</label>
                <b-form-input 
                  v-validate="'required|digits:11'" 
                  name="ruc"
                  v-model="ruc" 
                  type="text" 
                  id="street" 
                  placeholder="Indicar los antecedentes familiares"
                ></b-form-input>
              </b-form-group>
            </b-collapse>
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
      var clinic = await createClinic({idruc:this.ruc,name:this.nombre,zonework:this.zonadetrabajo})
      this.clinicnew = clinic.data.data.createClinic
      this.clinicadd = clinic
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