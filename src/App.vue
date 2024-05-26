<template>
  <template v-if="this.$route.meta.layout == this.LAYOUT_ADMIN">
    <AdminLayoutComponent />
  </template>
  <template v-else-if="this.$route.meta.layout == this.LAYOUT_SAV">
    <SavLayoutComponent />
  </template>
  <template v-else>
    <AdminLayoutComponent />
  </template>
</template>

<script>
  import AdminLayoutComponent from './components/layouts/AdminLayoutComponent.vue';
  import SavLayoutComponent from './components/layouts/SavLayoutComponent.vue';

  export default {
    components: {
      AdminLayoutComponent,
      SavLayoutComponent
    },
    data: () => ({
      LAYOUT_ADMIN: 'AdminLayout',
      LAYOUT_SAV: 'SavLayout'
  })
  }
</script>
