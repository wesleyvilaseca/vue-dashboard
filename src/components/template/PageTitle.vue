<template>
  <div class="page-title-box">
    <div class="row align-items-center">
      <div class="col-sm-6 title-section">
        <template v-if="backRoute">
         <router-link :to="backRoute">
          <i class="fa-solid fa-chevron-left"></i>
          </router-link>
        </template>
        <h4 class="page-title">{{ page }}</h4>
      </div>
      <div v-if="pages.length" class="col-sm-6">
        <ol class="breadcrumb float-right">
          <li v-for="p in pages" :key="p.link" class="breadcrumb-item">
            <router-link :to="p.link">{{ p.name }}</router-link>
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
    },
    backRoute: {
      type: String
    }
  }
}
</script>

<style scoped>
  .title-section {
    display: flex
  }

  .title-section a{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-purple);
    cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .title-section span i{
    /* margin-right: 20px; */
  }
</style>