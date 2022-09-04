<template>
  <div class="page-title-box">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <h4 class="page-title">{{ page }}</h4>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-right">
          <li v-if="pages.length" class="breadcrumb-item">
            <router-link v-for="p in pages" :key="p.link" :to="p.link">{{ p.name }}</router-link>
          </li>
          <li class="breadcrumb-item active">{{ page }}</li>
        </ol>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    page: {
      type: String,
      required: true
    },
    pages: {
      type: Array,
      required: false
    }
  }
}
</script>

<style scoped>

</style>