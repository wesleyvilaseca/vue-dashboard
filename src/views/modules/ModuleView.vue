<template>
  <div>
    <PageTitle :page="module.module" :pages="pages" :backRoute="backRoute"/>
    <div class="row">
        <div class="col-md-8">
            <div class="card cursor-pointer" v-for="(discipline, index) in module.disciplines" :key="index" @click.prevent="accessLesson(discipline)">
                <div class="card-body">
                    <div class="lesson-card"> 
                      <h5 class="card-title"> {{ discipline.name }} </h5>
                      <ToolTipComponent :text="`
                        <div class='pl-2 pr-2'>
                          <div>
                            <i class='fa-solid fa-play width-20'></i>
                            <span>${discipline.disciplineDetail.visualizedVideos} / ${discipline.disciplineDetail.videos} Vídeo</span>
                          </div>
                          <div>
                            <i class='fa-regular fa-newspaper width-20'></i>
                            <span>${discipline.disciplineDetail.vizualizedArticles} / ${discipline.disciplineDetail.articles} Artigo</span>
                          </div>
                          <div>
                            <i class='fa-solid fa-list-check width-20'></i>
                            <span>${discipline.disciplineDetail.exercicesConcluded} / ${discipline.disciplineDetail.exercices} Múltipla Escolha</span>
                          </div>
                        </div>
                      `"
                      width="200"
                      >
                           <i class="fa-solid fa-circle-info"></i>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
 }

 .fa-circle-info {
  font-size: 22px;
  color: var(--color-purple)
 }

</style>