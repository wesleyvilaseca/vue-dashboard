<template>
  <div>
      <footer class="footer">
        © {{ date }} {{ constantes.NameSite }}
        <span class="d-none d-sm-inline-block"> - Todos os direitos reservados </span>.
      </footer>
  </div>
</template>

<script>
import Constants from "@/config/constants";

export default {
  name: "FooterSite",
  data: () => {
    return {
      date: '',
      constantes: Constants
    }
  },
  mounted() {
    var dt = new Date();
    this.date = dt.getFullYear();
  }
}
</script>

<style scoped>

</style>