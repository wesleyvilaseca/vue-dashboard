export default {
    menus: [
        {
         name: 'Home',
         link: '/',
         icon: 'fa-solid fa-house'
       },
      //  {
      //    name: 'Mensalidades',
      //    link: '/mensalidades',
      //    icon: 'fa-solid fa-wallet'
      //  },
       {
         name: 'Acadêmico',
         link: '',
         icon: 'fa-solid fa-school',
         active: false,
         submenu: [
           {
             name: 'Boletim Acadêmico',
             link: '/boletim-academico',
             icon: '',
           },
           {
             name: 'Calendário Acadêmico',
             link: '/calendario-academico',
             icon: '',
           },
           {
             name: 'Perguntas Frequentes',
             link: '/perguntas-frequentes',
             icon: '',
           }
         ]
       },
       {
         name: 'Documentos',
         link: '',
         icon: 'fa-regular fa-file',
         active: false,
         submenu: [
           {
             name: 'Central de documentos',
             link: '/central-documentos',
             icon: 'fa-solid fa-file-word',
           },
            {
             name: 'Manual do Aluno',
             link: '/manual-do-aluno',
             icon: 'fa-solid fa-bars',
           },
           {
             name: 'Contato',
             link: '/contato',
             icon: 'fa-solid fa-headset',
           }
         ]
       },
       {
         name: 'Comunicação',
         link: '',
         icon: 'fa-solid fa-phone',
         active: false,
         submenu: [
           {
             name: 'CAD - Central de Atendimento',
             link: '/cad',
             icon: '',
           },
           {
             name: 'Comunicados institucionais',
             link: '/comunicados-institucionais',
             icon: '',
           }
         ]
       },
       {
        name: 'Disciplinas',
        link: '/disciplinas',
        icon: 'fa-solid fa-grip-vertical'
       }
     ],
     showMobileMenu: false,
     SIZE_SHOW_MOBILE_MENU: 991,
}