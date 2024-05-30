<template>
  <div>
    <PageTitle page="Disciplidas" :pages="pages" />
    <div class="row">
        <div class="col-md-4" v-for="(module, index) in modules" :key="index">
            <div class="card">
                <img class="card-img-top" :src="module.img" alt="Card image cap" style="max-width: 400px">
                <div class="card-body">
                    <h5 class="card-title"> {{ module.name }} </h5>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    <hr>
                     <router-link :to="`/disciplina/${module.id}`" class="btn btn-primary"> Acessar </router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import { mapState } from "vuex";

export default {
  name: "ModulesView",
  components: { PageTitle },
  data: () => ({
    pages: [
      {
        name: "Home",
        link: "/"
      }
    ],
  }),
  computed: {
    ...mapState({
        modules: (state) => state.courseState.courseModules,
    })
  },
  methods: {}
}
</script>
