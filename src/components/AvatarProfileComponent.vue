<template>
    <div class="dropdown">
        <img src="https://avatars.githubusercontent.com/u/42185973?v=4" class="avatar" alt="Avatar" loading="lazy" @click="toggleDropdown">
        <div class="dropdown-content">
        <a href="#" class="text-center">{{ this.name }}</a>
        <a href="#">
            <i class="fa-regular fa-user"></i>
            Menu Perfil
        </a>
        <a href="#">
            <i class="fa-solid fa-graduation-cap"></i>
            Meus Cursos
        </a>
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
    dropdownOpen: false
  }),
  mounted() {},
    computed: {
    ...mapState({
      user: (state) => state.userSession.user
    }),

    name() {
      const userName = this.user.name.split(' ');
      return `${userName[0]} ${userName.pop()}`;
    }
  },
  methods: {
    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      }
  },
}
</script>

<style>
    .dropdown {
      position: relative;
      display: inline-block;
      margin-top: -12px;
      margin-right: 20px;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 150px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      right: 0
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
      max-height: 50px;
    }
</style>