export default {
  items: [
    {
      name: 'Control',
      url: '/sudentis3/control',
      icon: 'icon-speedometer',
    },
    {
      name: 'Consultorio',
      url: '/sudentis3/consultorio',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Crear Consultorio',
          url: '/sudentis3/consultorio/crear',
          icon: 'icon-puzzle'
        },
        {
          name: 'Mis Consultorios',
          url: '/sudentis3/consultorio/misconsultorios',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'Historias',
      url: '/sudentis3/historias',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Crear Historia',
          url: '/sudentis3/historias/crear',
          icon: 'icon-cursor'
        },
        {
          name: 'Mis Historias',
          url: '/sudentis3/historias/mishistorias',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Atenciones',
      url: '/sudentis3/atenciones',
      icon: 'icon-star',
      children: [
        {
          name: 'Crear Atencion',
          url: '/sudentis3/atenciones/crear',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Mis Atenciones',
          url: '/sudentis3/atenciones/misatenciones',
          icon: 'icon-star'
        },
      ]
    },
    {
      name: 'Citas',
      url: '/sudentis3/citas',
      icon: 'icon-bell',
      children: [
        {
          name: 'Crear Cita',
          url: '/sudentis3/citas/crear',
          icon: 'icon-bell'
        },
        {
          name: 'Mis Citas',
          url: '/sudentis3/citas/miscitas',
          icon: 'icon-bell'
        },
      ]
    },
    {
      name: 'Material dendal',
      url: '/sudentis3/materiales',
      icon: 'icon-calculator',
      badge: {
        variant: 'danger',
        text: 'COREUI'
      },
      children:[
        {
          name: 'Consultorio',
          url: '/sudentis3/materiales/consultorio',
          icon: 'icon-bell'
        },
        {
          name: 'Pacientes',
          url: '/sudentis3/materiales/pacientes',
          icon: 'icon-bell'
        },
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Buscar fuera',
      url: '/sudentis3/buscar',
      icon: 'icon-star',
      children: [
        {
          name: 'Clinicas',
          url: '/sudentis3/buscar/clinicas',
          icon: 'icon-star'
        },
        {
          name: 'Dentistas',
          url: '/sudentis3/buscar/dentistas',
          icon: 'icon-star'
        },
        {
          name: 'Pacientes',
          url: '/sudentis3/buscar/pacientes',
          icon: 'icon-star'
        },
      ]
    },
    {
      name: 'Pedir Material',
      url: '/dashboard',
      icon: 'icon-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW'
      },
      attributes: { disabled: true },
    },
    {
      name: 'Sudentis3 Windows',
      url: 'https://github.com/Joejhona',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: 'noopener' }
    },
    {
      name: 'Sudentis3 Android',
      url: 'https://github.com/Joejhona',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: 'noopener' }
    },
  ]
}
