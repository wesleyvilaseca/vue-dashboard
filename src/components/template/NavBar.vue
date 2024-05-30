<template>
  <div>
    <div class="header-bg">
      <header id="topnav">
        <div class="navbar-custom">
          <div class="container-fluid">
            <div id="navigation">
              <ul class="navigation-menu"  v-if="!showMobileMenu">
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

          <div class="mobile-topbar" style="padding-right: 15px;" v-if="showMobileMenu">
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
                    <li class="selected-course">{{ limitarTexto(this.selectedCourse.description, 35) }} </li>
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
import { mapState, mapMutations } from "vuex";
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
  }),
  computed: {
    ...mapState({
      site: "nameSite",
      menus: (state) => state.navMenuState.menus,
      SIZE_SHOW_MOBILE_MENU: (state) => state.navMenuState.SIZE_SHOW_MOBILE_MENU,
      showMobileMenu: (state) => state.navMenuState.showMobileMenu,
      selectedCourse: (state) => state.courseState.course
    })
  },
  methods: {
      ...mapMutations({
      _showMobileMenu: "navMenuState/SET_SHOW_MENU_MOBILE",
    }),
    toggleMenu() {
      if (this.menuOpen) {
        this.menuOpen = false;
      } else {
        this.menuOpen = true;
      }
    },
    limitarTexto(value, _limite = 30) {
      const limite = _limite;
      if (!value) return '';
      if (value.length <= limite) return value;
      return value.substring(0, limite) + '...';
    },
    responsiveMenu(size) {
      if (size <= this.SIZE_SHOW_MOBILE_MENU) {
        this._showMobileMenu(true);
      } else {
         this._showMobileMenu(false);
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

.selected-course {
  padding-top: 10px;
  padding-bottom: 6px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>