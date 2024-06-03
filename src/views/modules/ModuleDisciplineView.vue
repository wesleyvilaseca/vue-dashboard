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
        <div class="lesson-content" :style="`background-color:${backgroundColorContent}`">
          <!-- <div>
            <h4>{{ selectedLesson.name }}</h4>
          </div> -->
          <template v-if="selectedLesson.type == VIDEO">
            <Player :lesson="this.selectedLesson"/>
          </template>
          <template v-if="selectedLesson.type == ARTICLE">
            <div v-html="selectedLesson.html"></div>
          </template>
          <template v-if="selectedLesson.type == TEST">
            <TestModuleComponent />
          </template>
        </div>

        <TabsWrapperComponent>
            <TabComponent title="Visão geral">
            <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
             Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
             Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, 
              elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. 
              Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
              Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
              </p>

             <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
             Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
             Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, 
              elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. 
              Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
              Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
              </p>

            <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
             Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
             Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, 
              elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. 
              Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
              Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
              </p>
            </TabComponent>
            <TabComponent title="Perguntas e respostas">Perguntas e respostas</TabComponent>
            <TabComponent title="Observações">Observações</TabComponent>
            <TabComponent title="Avaliações">Observações</TabComponent>
        </TabsWrapperComponent>
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
import Player from './_partials/PlayerComponent.vue';
import TestModuleComponent from './_partials/TestModuleComponent.vue';
// import SupportsLesson from './_partials/SupportsLesson.vue';
import LeftBarPageWrapperComponent from '@/components/LeftBarPageWrapperComponent.vue';
import TabsWrapperComponent from '@/components/TabsWrapperComponent.vue';
import TabComponent from '@/components/TabComponent.vue';


export default {
  name: "ModuleDisciplineView",
  components: { 
      PageTitle,
      Modules,
      Player,
      // SupportsLesson,
      TestModuleComponent,
      LeftBarPageWrapperComponent,
      TabsWrapperComponent,
      TabComponent
     },
  data: () => ({
    disciplineId: '',
    VIDEO: 'video',
    ARTICLE: 'article',
    TEST: 'test',
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
    },
    contentHeigth() {
      return this.selectedLesson?.type == this.VIDEO ? '60vh' : '70vh';
    },
    backgroundColorContent() {
      switch (this.selectedLesson.type) {
        case this.VIDEO:
          return `var(--color-gray-400)`;
        case this.ARTICLE:
        case this.TEST:
          return `var(--color-white)`;      
        default:
          return "#fff";
      }
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

 .lesson-content {
    max-width: 100%;
    height: v-bind(contentHeigth);
    overflow-y: auto;
    padding: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
 }

</style>