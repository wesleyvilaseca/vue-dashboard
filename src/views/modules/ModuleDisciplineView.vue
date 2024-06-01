<template>
  <div>
    <PageTitle :page="module.name" :pages="pages" :backRoute="backRoute"/>
    <LeftBarPageWrapperComponent
    sideBarWidth="300"
    sideBarTitle='
    <i class="fa-solid fa-person-chalkboard mr-2" style="color: var(--color-purple)"></i>
    Aulas
    '
    >
      <template v-slot:content_leftbar>
         <Modules />
      </template>

      <template v-slot:page_content>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </template>
    </LeftBarPageWrapperComponent>

    <!-- <div class="content">
          <div class="container">
              <Modules />
              <div class="right">
                  <div class="content">
                    <Player />
                    <SupportsLesson />
                  </div>
              </div>
          </div>
    </div> -->
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import { mapState, mapMutations } from "vuex";

import Modules from './_partials/DisciplineModules.vue';
// import Player from './_partials/PlayerComponent.vue';
// import SupportsLesson from './_partials/SupportsLesson.vue';
import LeftBarPageWrapperComponent from '@/components/LeftBarPageWrapperComponent.vue';


export default {
  name: "ModuleDisciplineView",
  components: { 
      PageTitle,
      Modules,
      // Player,
      // SupportsLesson,
      LeftBarPageWrapperComponent
     },
  data: () => ({
    disciplineId: '',
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
        module: (state) => state.courseState.moduleDiscipline,
        selectedLesson: (state) => state.courseState.selectedLesson
    }),
    backRoute() {
      return `/disciplina/${this.disciplineId}`;
    }
  },
  mounted() {
    this.disciplineId = this.$route.params.id;
     this.pages.push({
      name: 'Disciplina',
      link: '/disciplina/' + this.disciplineId
    });

    if (!this.selectedLesson?.id) {
      this.setSelectedLesson(this.module.lessons[0]);
    }
  },
  methods: {
    ...mapMutations({
      setSelectedLesson: "courseState/SET_SELECTED_LESSON",
    }),
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