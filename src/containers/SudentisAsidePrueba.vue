<template>
  <b-tabs>
    <b-tab>
      <template slot="title">
        <i class='icon-list'></i>
      </template>
      <b-list-group class="list-group-accent">
        <b-list-group-item class="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          Hoy - Jalar de Citas
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-warning list-group-item-divider">
          <div>Tipo de atencion -
            <strong>Nombre del Paciente</strong>
          </div>
          <small class="text-muted mr-3">
            <i class="icon-calendar"></i>&nbsp;&nbsp;El horario
          </small>
          <small class="text-muted">
            <i class="icon-home"></i>&nbsp;&nbsp;En que clinica
          </small>
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-info">
          <div class="avatar float-right">
            <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
          </div>
          <div>Skype with <strong>Megan</strong>
          </div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp;&nbsp;4 - 5pm</small>
          <small class="text-muted"><i class="icon-social-skype"></i>&nbsp;&nbsp;On-line</small>
        </b-list-group-item>
        <hr class="transparent mx-3 my-0">
        <b-list-group-item class="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          Mañana - Jalar de citas
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-danger list-group-item-divider">
          <div>New UI Project - <strong>deadline</strong>
          </div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp;&nbsp;10 - 11pm</small>
          <small class="text-muted"><i class="icon-home"></i>&nbsp;&nbsp;creativeLabs HQ</small>
          <div class="avatars-stack mt-2">
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/2.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/3.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/5.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/6.jpg" alt="admin@bootstrapmaster.com">
            </div>
          </div>
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-success list-group-item-divider">
          <div><strong>#10 Startups.Garden</strong> Meetup</div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>
          <small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-primary list-group-item-divider">
          <div><strong>Team meeting</strong></div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 4 - 6pm</small>
          <small class="text-muted"><i class="icon-home"></i>&nbsp; creativeLabs HQ</small>
          <div class="avatars-stack mt-2">
            <div class="avatar avatar-xs">
              <img src="img/avatars/2.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/3.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/8.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-tab>
    <b-tab>
      <template slot="title">
        <i class='icon-speech'></i>
      </template>
      <div class="p-3">
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="success" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Nombre del Trabajador</small>
            <small class="text-muted float-right mt-1">Hora del Mensaje</small>
          </div>
          <div class="text-truncate font-weight-bold">Titulo del Mensaje</div>
          <small class="text-muted">Algun mensaje, tambien puede ser de otros usuarios muy aparte</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="danger" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Nombre del Paciente</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Nuevo o Recurrente </div>
          <small class="text-muted">Resumen de la atencion...</small>
        </div>
        <hr>
      </div>
    </b-tab>
    <b-tab>
      <template slot="title">
        <i class='icon-settings'></i>
      </template>
      <div class="p-3">
        <h6>Configuraciones</h6>
        <div class="aside-options">
          <div class="clearfix mt-4">
            <small><b>Guardar Historias Siempre</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" checked />
          </div>
          <div>
            <small class="text-muted">Guarda automaticamente todas las historias generadas del día, 
              si tienes muchos dentistas y quieres supervisar los registros antes, 
              desactiva esta opción</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Guardar Atenciones Siempre</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" />
          </div>
          <div>
            <small class="text-muted">Guardar Automaticamente todas las atenciones generadas del día</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Guardar Pacientes Frecuentes</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" disabled defaultChecked/>
          </div>
          <div>
            <small class="text-muted">Disabled option.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Guardar Pacientes Nuevos</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" checked />
          </div>
        </div>
        <hr>
        <h6>Utilización</h6>
        <div class="text-uppercase mb-1 mt-4">
          <small><b>Historias</b></small>
        </div>
        <b-progress height={} class="progress-xs" variant="info" :value="25"></b-progress>
        <small class="text-muted">H. Generadas/H. Permitidas</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>Atenciones</b></small>
        </div>
        <b-progress height={} class="progress-xs" variant="warning" :value="70"></b-progress>
        <small class="text-muted">A. Generadas/A. Permitidas</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>Trabajadores</b></small>
        </div>
        <b-progress height={} class="progress-xs" variant="danger" :value="95"></b-progress>
        <small class="text-muted">243GB/256GB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>Laborando</b></small>
        </div>
        <b-progress height={} class="progress-xs" variant="success" :value="10"></b-progress>
        <small class="text-muted">25GB/256GB</small>
      </div>
    </b-tab>
  </b-tabs>
</template>

<script>
import { Switch as cSwitch } from '@coreui/vue'
export default {
  name: 'SudentisAsidePrueba',
  components: {
    cSwitch
  }
}
</script>
