<template>
  <NavBar />

  <div class="wrapper">
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>

</template>

<script>
  import NavBar from "../template/NavBar.vue";

  export default {
    name: 'AdminLayoutComponent',
    components: {
      NavBar
    }
  }
</script>
