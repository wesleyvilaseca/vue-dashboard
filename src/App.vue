<template>
  <NavBar />

  <div class="wrapper">
    <div class="container-fluid">
      <router-view/>
    </div>
    <!-- end container-fluid -->
  </div>

  <!-- <FooterSite /> -->
</template>

<script>
  import NavBar from "./components/template/NavBar.vue";
  // import FooterSite from "@/components/template/FooterSite";

  export default {
    components: {
      // FooterSite,
      NavBar
    }
  }
</script>
