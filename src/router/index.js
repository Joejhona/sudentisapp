import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

//--------------------- SUDENTIS ---------------------//
// Containers
const SudentisContainer = () => import('@/containers/SudentisContainer')

// Vistas
const Control = () => import('@/views/Control')

// Vistas - Consultorio
const CrearConsultorio = () => import('@/views/consultorio/Crear')
const MisConsultorios = () => import('@/views/consultorio/MisConsultorios')

// Vistas - Historia
const CrearHistoria = () => import('@/views/historia/Crear')
const MisHistorias = () => import('@/views/historia/MisHistorias')

//--------------------- SUDENTIS - PRUEBA ---------------------//
// Containers
const SudentisContainerPrueba = () => import('@/containers/SudentisContainerPrueba')
const ControlPrueba = () => import('@/views/ControlPrueba')

// IndexJoe
const IndexJoe = () => import('@/views/IndexJoe')

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')
const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

let router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/control',
      name: 'Home',
      component: SudentisContainer,
      children:[
        {
          path: 'control',
          name: 'Control',
          component: Control,
          meta: { 
            requiresAuth: true
          },
        },
        {
          path: 'consultorio',
          redirect: '/consultorio/crear',
          name: 'Consultorio',
          component: {
            render (c) { return c('router-view') }
          },
          meta: { 
            requiresAuth: true
          },
          children: [
            {
              path: 'crear',
              name: 'Crear o Postular',
              component: CrearConsultorio
            },
            {
              path: 'misconsultorios',
              name: 'Mis Consultorios',
              component: MisConsultorios
            }
          ]
        },
        {
          path: 'historia',
          redirect: '/historia/crear',
          name: 'Historia',
          component: {
            render (c) { return c('router-view') }
          },
          meta: {
            requiresAuth: true
          },
          children: [
            {
              path: 'crear',
              name: 'Crear Historia',
              component: CrearHistoria
            },
            {
              path: 'mishistorias',
              name: 'Mis Historias',
              component: MisHistorias
            }
          ]
        }
      ]
    },
    {
      path: '/prueba',
      redirect: '/prueba/control',
      name: 'Home',
      component: SudentisContainerPrueba,
      children:[
        {
          path: 'control',
          name: 'Control',
          component: ControlPrueba,
        },
        {
          path: 'consultorio',
          redirect: '/prueba/consultorio/crear',
          name: 'Consultorio',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'crear',
              name: 'Crear o Postular',
              component: CrearConsultorio
            },
            {
              path: 'misconsultorios',
              name: 'Mis Consultorios',
              component: MisConsultorios
            }
          ]
        },
        {
          path: 'historia',
          redirect: '/prueba/historia/crear',
          name: 'Historia',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'crear',
              name: 'Crear Historia',
              component: CrearHistoria
            },
            {
              path: 'mishistorias',
              name: 'Mis Historias',
              component: MisHistorias
            }
          ]
        }
      ]
    },
    {
      path: '/plantilla',
      redirect: '/plantilla/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'indexjoe',
          name: 'IndexJoe',
          component: IndexJoe
        },
        {
          path: 'dashboard',
          name: 'Control',
          component: Dashboard,
          //beforeEnter: ifAuthenticated,
          //meta: { 
          //  requiresAuth: true
          //}
        },
        {
          path: 'theme',
          redirect: '/plantilla/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/plantilla/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/plantilla/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/plantilla/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/plantilla/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/pages/login') 
  } else {
    next() 
  }
})

export default router