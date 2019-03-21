<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Cuenta</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-bell-o" /> Historias
        <b-badge variant="info">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-envelope-o" /> Atenciones
        <b-badge variant="success">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-tasks" /> Trabajadores
        <b-badge variant="danger">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-comments" /> Clinicas
        <b-badge variant="warning">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Configuracion</strong>
      </b-dropdown-header>
      <b-dropdown-item><i class="fa fa-user" /> Perfil</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-wrench" /> Configuraciones</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-usd" /> Credito
        <b-badge variant="secondary">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-file" /> Projects
        <b-badge variant="primary">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item><i class="fa fa-shield" /> Lock Account</b-dropdown-item>
      <b-dropdown-item @click="logout"><i class="fa fa-lock" /> Cerrar Sesion</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import { AUTH_LOGOUT } from '@/store/actions/auth'

export default {
  name: 'SudentisHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods:{
      logout: function () {
        this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/pages/login'))
      }
  }
}
</script>
