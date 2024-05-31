<template>
  <div>
    <PageTitle :page="module.name" :pages="pages" :backRoute="backRoute"/>
    <SideBarComponent>
      <template v-slot:content>
        Hello from content
      </template>
    </SideBarComponent>

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
import { mapState } from "vuex";

// import Modules from './_partials/DisciplineModules.vue';
// import Player from './_partials/PlayerComponent.vue';
// import SupportsLesson from './_partials/SupportsLesson.vue';
import SideBarComponent from '@/components/SideBarComponent.vue';


export default {
  name: "ModuleDisciplineView",
  components: { 
      PageTitle,
      // Modules,
      // Player,
      // SupportsLesson,
      SideBarComponent
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

  },
  methods: {

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