export default {
  items: [
    {
      name: 'Dashboard',
      url: '/plantilla/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'Joe'
      }
    },
    {
      title: true,
      name: 'Theme',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Colors',
      url: '/plantilla/theme/colors',
      icon: 'icon-drop',
      badge: {
        variant: 'danger',
        text: 'COREUI'
      }
    },
    {
      name: 'Typography',
      url: '/plantilla/theme/typography',
      icon: 'icon-pencil',
      badge: {
        variant: 'danger',
        text: 'COREUI'
      }
    },
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/plantilla/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/plantilla/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/plantilla/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/plantilla/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Collapses',
          url: '/plantilla/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/plantilla/base/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/plantilla/base/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Groups',
          url: '/plantilla/base/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/plantilla/base/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navbars',
          url: '/plantilla/base/navbars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/plantilla/base/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/plantilla/base/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/plantilla/base/progress-bars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/plantilla/base/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/plantilla/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/plantilla/base/tabs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/plantilla/base/tooltips',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/plantilla/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/plantilla/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Dropdowns',
          url: '/plantilla/buttons/dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Groups',
          url: '/plantilla/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Brand Buttons',
          url: '/plantilla/buttons/brand-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/plantilla/charts',
      icon: 'icon-pie-chart',
      badge: {
        variant: 'danger',
        text: 'COREUI'
      }
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/plantilla/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Flags',
          url: '/plantilla/icons/flags',
          icon: 'icon-star'
        },
        {
          name: 'Font Awesome',
          url: '/plantilla/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/plantilla/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/plantilla/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/plantilla/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/plantilla/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/plantilla/notifications/modals',
          icon: 'icon-bell'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/plantilla/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'danger',
        text: 'COREUI'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW'
      },
      attributes: { disabled: true },
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/vue/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: 'noopener' }
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/vue/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: 'noopener' }
    },
  ]
}
