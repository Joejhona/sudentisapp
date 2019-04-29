<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/dashboard">Control</b-nav-item>
        <b-nav-item class="px-3" to="/users" exact>Trabajadores</b-nav-item>
        <b-nav-item class="px-3" to="/users">Historias</b-nav-item>
        <b-nav-item class="px-3" to="/users">Atenciones</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!--<b-navbar-brand>Clinica los Matazanos</b-navbar-brand>      -->
        <b-nav-item class="px-3" >{{me.nombre}}</b-nav-item> 
        <b-nav-item class="d-md-down-none">
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item>
        <SudentisHeaderDropdownAccnt/>
      </b-navbar-nav>
      <AsideToggler class="d-none d-lg-block" />
      <AsideToggler class="d-lg-none" mobile />
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <SudentisAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <span class="ml-1">IDEM &copy; 2019 </span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Desarrollado por</span>
        <a href="https://github.com/Joejhona">Joejhona</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_navsudentisprueba'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import SudentisAsidePrueba from './SudentisAsidePrueba'
import SudentisHeaderDropdownAccntPrueba from './SudentisHeaderDropdownAccntPrueba'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SudentisContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    SudentisAsidePrueba,
    SudentisHeaderDropdownAccntPrueba,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items,
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    },
    ...mapGetters(['isAuthenticated']),
    ...mapState({
        //name: state => `${state.user.profile.nombre}`,
        me: state => state.user.profile,
      })
  },
}
</script>
