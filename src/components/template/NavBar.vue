<template>
  <div>
    <div class="header-bg">
      <!-- Navigation Bar-->
      <header id="topnav">
        <div class="topbar-main">
          <div class="container-fluid">

            <!-- Logo-->
            <div>
              <router-link to="/" class="logo">
                <span class="logo-light">
                        <i class="mdi mdi-camera-control"></i> {{ constantes.NameSite }}
                </span>
              </router-link>
            </div>
            <!-- End Logo-->

            <div class="clearfix"></div>

          </div>
          <!-- end container -->
        </div>
        <!-- end topbar-main -->

        <!-- MENU Start -->
        <div class="navbar-custom">
          <div class="container-fluid">

            <div id="navigation">

              <!-- Navigation Menu-->
              <ul class="navigation-menu">

                <!-- Início -->
                <li class="has-submenu">
                  <router-link to="/"><i class="icon-accelerator"></i> Início</router-link>
                </li>

                <!-- Marcas -->
                <li class="has-submenu">
                  <a href="#">
                    <i class="icon-life-buoy"></i>
                    Marcas <i class="mdi mdi-chevron-down mdi-drop"></i>
                  </a>
                  <ul class="submenu">
                    <li>
                      <router-link to="/marcas">Todas as marcas</router-link>
                    </li>

                    <li>
                      <router-link to="/marcas/adicionar">Nova marca </router-link>
                    </li>
                  </ul>
                </li>

                <!-- Produtos -->
                <li class="has-submenu">
                  <a href="#">
                    <i class="icon-shopping-cart"></i>
                    Produtos <i class="mdi mdi-chevron-down mdi-drop"></i>
                  </a>
                  <ul class="submenu">
                    <li>
                      <router-link to="/produtos">Todas os produtos</router-link>
                    </li>

                    <li>
                      <router-link to="/produtos/adicionar">Novo produto </router-link>
                    </li>
                  </ul>
                </li>

              </ul>
              <!-- End navigation menu -->
            </div>
            <!-- end #navigation -->
          </div>
          <!-- end container -->
        </div>
        <!-- end navbar-custom -->
      </header>
      <!-- End Navigation Bar-->
    </div>
  </div>
</template>

<script>
import Constantes from "@/config/constants";

export default {
  name: "NavBar",
  data: () => {
    return {
      constantes: Constantes
    }
  }
}
</script>

<style scoped>

</style>