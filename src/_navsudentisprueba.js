export default {
    items: [
      {
        name: 'Control',
        url: '/prueba/control',
        icon: 'icon-speedometer',
      },
      {
        name: 'Consultorio',
        url: '/prueba/consultorio',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Crear o Postular',
            url: '/prueba/consultorio/crear',
            icon: 'icon-puzzle'
          },
          {
            name: 'Mis Consultorios',
            url: '/prueba/consultorio/misconsultorios',
            icon: 'icon-puzzle'
          },
        ]
      },
      {
        name: 'Historias',
        url: '/prueba/historia',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Crear Historia',
            url: '/prueba/historia/crear',
            icon: 'icon-cursor'
          },
          {
            name: 'Mis Historias',
            url: '/prueba/historia/mishistorias',
            icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'Atenciones',
        url: '/prueba/atenciones',
        icon: 'icon-star',
        children: [
          {
            name: 'Crear Atencion',
            url: '/prueba/atenciones/crear',
            icon: 'icon-star',
            badge: {
              variant: 'info',
              text: 'NEW'
            }
          },
          {
            name: 'Mis Atenciones',
            url: '/prueba/atenciones/misatenciones',
            icon: 'icon-star'
          },
        ]
      },
      {
        name: 'Citas',
        url: '/prueba/citas',
        icon: 'icon-bell',
        children: [
          {
            name: 'Crear Cita',
            url: '/prueba/citas/crear',
            icon: 'icon-bell'
          },
          {
            name: 'Mis Citas',
            url: '/prueba/citas/miscitas',
            icon: 'icon-bell'
          },
        ]
      },
      {
        name: 'Material Dental',
        url: '/prueba/materiales',
        icon: 'icon-calculator',
        badge: {
          variant: 'danger',
          text: 'COREUI'
        },
        children:[
          {
            name: 'Consultorio',
            url: '/prueba/materiales/consultorio',
            icon: 'icon-bell'
          },
          {
            name: 'Pacientes',
            url: '/prueba/materiales/pacientes',
            icon: 'icon-bell'
          },
        ]
      },
      {
        divider: true
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