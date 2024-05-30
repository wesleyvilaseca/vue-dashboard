<template>
  <div>
    <PageTitle :page="module.module" :pages="pages" :backRoute="backRoute"/>
    <div class="row">
        <div class="col-md-8">
            <div class="card cursor-pointer" v-for="(discipline, index) in module.disciplines" :key="index" @click.prevent="accessLesson(discipline)">
                <div class="card-body">
                    <div class="lesson-card"> 
                      <h5 class="card-title"> {{ discipline.name }} </h5>
                      <ToolTipComponent text="Difficulty">
                           <span> hover over me </span>
                      </ToolTipComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import ToolTipComponent from "@/components/ToolTipComponent.vue";
import { mapState } from "vuex";

export default {
  name: "ModuleView",
  components: { PageTitle, ToolTipComponent },
  data: () => ({
    backRoute: '/disciplinas',
    pages: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "Disciplinas",
        link: "/disciplinas"
      }
    ],
  }),
  computed: {
    ...mapState({
        module: (state) => state.courseState.moduleDisciplines,
    })
  },
  methods: {
    accessLesson(item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>
 .lesson-card {

 }
</style>