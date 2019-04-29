export default {
  items: [
    {
      name: 'Control',
      url: '/control',
      icon: 'icon-speedometer',
    },
    {
      name: 'Consultorio',
      url: '/consultorio',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Crear o Postular',
          url: '/consultorio/crear',
          icon: 'icon-puzzle'
        },
        {
          name: 'Mis Consultorios',
          url: '/consultorio/misconsultorios',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'Historias',
      url: '/historia',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Crear Historia',
          url: '/historia/crear',
          icon: 'icon-cursor'
        },
        {
          name: 'Mis Historias',
          url: '/historia/mishistorias',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Atenciones',
      url: '/atenciones',
      icon: 'icon-star',
      children: [
        {
          name: 'Crear Atencion',
          url: '/atenciones/crear',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Mis Atenciones',
          url: '/atenciones/misatenciones',
          icon: 'icon-star'
        },
      ]
    },
    {
      name: 'Citas',
      url: '/citas',
      icon: 'icon-bell',
      children: [
        {
          name: 'Crear Cita',
          url: '/citas/crear',
          icon: 'icon-bell'
        },
        {
          name: 'Mis Citas',
          url: '/citas/miscitas',
          icon: 'icon-bell'
        },
      ]
    },
    {
      name: 'Material Dental',
      url: '/materiales',
      icon: 'icon-calculator',
      badge: {
        variant: 'danger',
        text: 'COREUI'
      },
      children:[
        {
          name: 'Consultorio',
          url: '/materiales/consultorio',
          icon: 'icon-bell'
        },
        {
          name: 'Pacientes',
          url: '/materiales/pacientes',
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
      url: '/buscar',
      icon: 'icon-star',
      children: [
        {
          name: 'Clinicas',
          url: '/buscar/clinicas',
          icon: 'icon-star'
        },
        {
          name: 'Dentistas',
          url: '/buscar/dentistas',
          icon: 'icon-star'
        },
        {
          name: 'Pacientes',
          url: '/buscar/pacientes',
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
