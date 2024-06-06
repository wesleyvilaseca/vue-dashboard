<template>
    <div class="dropdown" 
    @mouseover="this.dropdownOpen = true"
    @click="this.dropdownOpen = true"
    @mouseleave="this.dropdownOpen = false">
        <img src="https://avatars.githubusercontent.com/u/42185973?v=4" class="avatar" alt="Avatar" loading="lazy">
        <div class="dropdown-content" v-if="dropdownOpen">
          <a href="#" class="profile">
            <div class="user-detail">
              <div class="user-avatar">
                <img src="https://avatars.githubusercontent.com/u/42185973?v=4" class="avatar" alt="Avatar">
              </div>
              <div class="user-data">
                <div><b>{{ this.name }} </b> </div>
                <div>{{ limitarTexto(this.user.email) }}</div>
              </div>
            </div>
            <div class="mt-3">{{ limitarTexto(this.selectedCourse.description, 33) }}</div>
          </a>
          <!-- <hr> -->
          <a href="#">
              <i class="fa-regular fa-user"></i>
              Menu Perfil
          </a>
          <a href="#">
              <i class="fa-solid fa-graduation-cap"></i>
              Meus Cursos
          </a>
          <a href="#">
              <i class="fa-solid fa-wallet"></i>
              Mensalidades
          </a>

          <div class="comunication-section">
            <a href="#">
              <i class="fa-regular fa-bell"></i>
                Notificações
            </a>
          </div>

         <div class="darkmode-section">
          <a href="#">
             <div>
                <i class="fa-regular fa-moon"></i>
                Modo Noturno
             </div>

              <div class="custom-control custom-switch ml-3">
                <input v-model="activeDarkMode" type="checkbox" class="custom-control-input" id="customSwitch1" @change.prevent="darmode()">
                <label class="custom-control-label" for="customSwitch1"></label>
            </div>
          </a>
         </div>

          <a href="#">
              <i class="fa-solid fa-right-from-bracket"></i>
              Sair
          </a>

        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AvatarProfileComponent",
  props: {},
  data: () => ({
    dropdownOpen: false,
    activeDarkMode: false,
  }),
  mounted() {
        const _activeDarkMode = localStorage.getItem('active-darkmode');
        this.activeDarkMode = _activeDarkMode == 1 ? true : false;
  },
    computed: {
    ...mapState({
      user: (state) => state.userSession.user,
      selectedCourse: (state) => state.courseState.course
    }),

    name() {
      const userName = this.user.name.split(' ');
      return `${userName[0]} ${userName.pop()}`;
    },
  },
  methods: {
    darmode() {
      localStorage.setItem('active-darkmode', this.activeDarkMode ? 1 : 0);
    },
    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
    limitarTexto(value, _limite = 30) {
      const limite = _limite;
      if (!value) return '';
      if (value.length <= limite) return value;
      return value.substring(0, limite) + '...';
    }
  },
  watch: {
    activeDarkMode() {
        document.documentElement.setAttribute('data-theme', this.activeDarkMode ? 'darkMode' : '');
    }
  }
}
</script>

<style>
    .dropdown {
      position: relative;
      display: inline-block;
      margin-top: -12px;
      width: 100px;
      display: flex;
      flex-direction: row;
      justify-content: right;
    }

    .dropdown-content {
      display: block;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 250px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      right: 0;
      top: 45px;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a i {
      padding-right: 8px;
      color: var(--menu-color-hover)
    }

    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown:hover .dropbtn {
      background-color: #3e8e41;
    }

    .avatar {
      border-radius: 50%;
      max-height: 45px;
    }

    .user-detail {
      display: flex;
    }

    .dropdown-content a.profile {
      border-bottom: 1px solid var(--color-light-grey)
    }

    .user-detail .user-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .user-detail .user-avatar {
      margin-right: 10px;
    }

    .user-detail .user-avatar img{
      max-height: 50px;
    }

    .comunication-section {
      border-top: 1px solid var(--color-light-grey);
      border-bottom: 1px solid var(--color-light-grey);
    }

    .darkmode-section a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between
    }
</style>