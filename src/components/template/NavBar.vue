<template>
  <div>
    <div class="header-bg">
      <header id="topnav">
        <div class="navbar-custom">
          <div class="container-fluid">
            <div id="navigation">
              <ul class="navigation-menu">
                <BrandComponent :li="true" />
                <template v-for="(menu, index) in menus" :key="index">
                      <template v-if="menu?.submenu">
                        <li class="has-submenu">
                          <a href="#">
                              <i :class="menu?.icon"></i>
                              {{ menu.name}}
                              <i class="mdi mdi-chevron-down mdi-drop"></i>
                            </a>
                            <ul class="submenu">
                             <li v-for="(_submenu, index) in menu.submenu" :key="index">
                                <router-link :to="_submenu.link"> {{ _submenu.name }} </router-link>
                             </li>
                            </ul>
                        </li>
                      </template>
                      <template v-else>
                        <li class="has-submenu">
                          <router-link :to="menu.link">
                            <i :class="menu?.icon"></i> 
                            {{ menu.name }}
                          </router-link>
                        </li>
                      </template>
                </template>
                <span style="float: right; padding-top: 18px;">
                  <AvatarProfileComponent />
                </span>
              </ul>
            </div>
          </div>

          <div class="mobile-topbar" v-if="showMobileMenu">
            <BrandComponent />
            <AvatarProfileComponent />
          </div>
        </div>

          <div id="side-menu" class="page-wrapper chiller-theme" :class="{ toggled: menuOpen }" v-if="showMobileMenu">
            <a
              id="show-sidebar"
              class="btn btn-sm side-btn"
              href="#"
              @click.prevent="toggleMenu()"
            >
              <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper">
              <div class="sidebar-content">
                <BrandComponent class="text-center">
                  <template v-slot:content>
                    <div id="close-sidebar" @click.prevent="toggleMenu()">
                      <i class="fas fa-times"></i>
                    </div>
                  </template>
                </BrandComponent>
                <div class="sidebar-menu">
                  <ul>
                    <li v-for="(menu, index) in menus" :key="index">
                      <template v-if="menu?.submenu">
                        <li class="sidebar-dropdown" :class="{ active_side: menu.active }" @click="toggleSubMenu(menu)">
                          <a>
                            <i :class="menu?.icon"></i>
                            <span> {{ menu.name }} </span>
                          </a>
                        </li>
                        <div class="sidebar-submenu" :class="{ 'd-block': menu.active }">
                          <ul>
                            <li  v-for="(_submenu, index) in menu.submenu" :key="index">
                                <router-link :to="_submenu.link">
                                <span :class="_submenu?.icon"></span>
                                {{ _submenu.name }}
                                </router-link>
                            </li>
                          </ul>
                        </div>
                      </template>
                      <template v-else>
                        <router-link :to="menu.link">
                          <i :class="menu?.icon"></i>
                          <span>{{ menu.name }}</span>
                        </router-link>
                      </template>
                    </li>
                  </ul>
                </div>
              </div>
               <div class="sidebar-footer">
                <a href="#">
                </a>
               </div>
            </nav>
          </div>
      </header>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BrandComponent from '../BrandComponent.vue';
import AvatarProfileComponent from '../AvatarProfileComponent.vue';
export default {
  name: "NavBar",
  components: {
    BrandComponent,
    AvatarProfileComponent
  },
    data: () => ({
    dropdownOpen: false,
    menuOpen: false,
    showMobileMenu: false,
    SIZE_SHOW_MOBILE_MENU: 991,
    menus: [
       {
        name: 'Home',
        link: '/',
        icon: 'fa-solid fa-house'
      },
      {
        name: 'Mensalidades',
        link: '/mensalidades',
        icon: 'fa-solid fa-wallet'
      },
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
      }
    ]
  }),
  computed: {
    ...mapState({
      site: "nameSite"
    })
  },
  methods: {
    toggleMenu() {
      if (this.menuOpen) {
        this.menuOpen = false;
      } else {
        this.menuOpen = true;
      }
    },
    responsiveMenu(size) {
      if (size <= this.SIZE_SHOW_MOBILE_MENU) {
        this.showMobileMenu = true;
      } else {
        this.showMobileMenu = false;
      }
    },
    toggleSubMenu(menu) {
      const index = this.menus.findIndex(item => item.name === menu.name);
      if (index !== -1) {
        this.menus[index].active = !this.menus[index].active;
      }
    },
  },
  mounted() {
    this.responsiveMenu(window.innerWidth);
    window.addEventListener('resize', () => this.responsiveMenu(window.innerWidth));
  }
}
</script>

<style scoped>
#topnav{z-index: 50 !important;}

</style>