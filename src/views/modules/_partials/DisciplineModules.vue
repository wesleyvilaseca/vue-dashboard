<template>
      <div class="modules active">
        <ul class="classes">
          <li
            class="cursor-pointer" :class="selectedLesson.id  == lesson.id ? 'active' : ''"
            v-for="lesson in module.lessons"
            :key="lesson.id"
            @click.prevent="addSelectedLesson(lesson)">
            <span class="check-container">
              <i v-if="lesson.status == 1" class="check active fas fa-check"></i>
            </span>
            <span class="lesson-description">
              <span class="nameLesson">{{ lesson.name }}</span>
              <span class="item-type-class" :class="getIcon(lesson)" />
            </span>
          </li>
        </ul>
      </div>
  <!-- <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Modulos</span>
        <span class="icon far fa-stream"></span>
      </div>

      <div
        class="modules active">
        <div class="name">
          <span class="text">{{ module.name }}</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul class="classes" v-show="module.id == showModule">
          <li
            v-for="lesson in module.lessons"
            :key="lesson.id"
            :class="{'active' : lesson.id === lessonInPlayer.id}"
            @click.prevent="addLessonInPlayer(lesson)">
            <span v-if="lesson.status == 1" class="check active fas fa-check"></span>
            <span class="nameLesson">{{ lesson.name }}</span>
          </li>
        </ul>
      </div>
      
    </div>
  </div> -->
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import { computed, ref } from 'vue'

export default {
    name: 'DisciplineModules',
    data: () => ({
      lessonInPlayer: {}
    }),
    computed: {
    ...mapState({
        module: (state) => state.courseState.moduleDiscipline,
        selectedLesson: (state) => state.courseState.selectedLesson
    }),
    backRoute() {
      return ``;
    },
  },
    methods: {
        ...mapMutations({
          setSelectedLesson: "courseState/SET_SELECTED_LESSON",
          updateStatusLesson: "courseState/UPDATE_STATUS_LESSON"
        }),
        addSelectedLesson (lesson) {
          if (lesson.id != this.selectedLesson.id) {
             const index = this.module.lessons.findIndex(obj => obj.id === this.selectedLesson.id);
             this.module.lessons[index].status = 1;
             this.updateStatusLesson(this.module);
             this.setSelectedLesson(lesson);
          } else {
            console.log('faz nada')
          }
        },

        getIcon(lesson) {
          switch (lesson.type) {
            case 'video':
              return 'fa-solid fa-play';

            case 'article':
              return 'fa-regular fa-newspaper'
          
            case 'test':
              return 'fa-solid fa-list-check'
            default:
              break;
          }
        }
    }

    // setup() {
    //     const store = useStore()

    //     const showModule = ref('0')

    //     const lessonInPlayer = computed(() => store.state.courses.lessonPlayer)

    //     // const course = computed(() => store.state.courses.courseSelected)
    //     const modules = computed(() => store.state.courses.courseSelected.modules)

    //     const toggleModule = (moduleId) => showModule.value = moduleId

    //     const addLessonInPlayer = (lesson) => {
    //       store.commit('SET_LESSON_PLAYER', lesson)
    //     }

    //     return {
    //       // course,
    //       modules,
    //       showModule,
    //       toggleModule,
    //       addLessonInPlayer,
    //       lessonInPlayer,
    //     }
    // },
}
</script>

<style scoped>
 .modules {
        position: relative;
        cursor: pointer;
 }

 .check-container {
  width: 5px;
 }

 .modules ul {
  padding-left: 4px;
 }

 .lesson-description {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 }

 .classes li {
  position: relative;
  border-bottom: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  margin-bottom: 3px;
  transition: background-color 0.5s;
  transition: border-bottom-color 0.3s;
}

 .classes li:hover {
  border-bottom: 1px solid var(--color-purple);
  border-width: 50%;
}

.classes li .check {
  color: var(--flutterColor);
}

.classes li .check.active {
  color: var(--color-purple);
}

.classes li .lesson-description {
  width: 100%;
  padding: 5px 1rem;
  font-size: 13px;
  font-weight: 300;
}

.classes li .file {
  color: var(--LaravelColor);
}

.classes li:hover {
  background-color: var();
}

.classes li:last-child {
  margin-bottom: 0;
}

.classes li.active {
  color: var(--color-purple)
}

.classes li.active .nameLesson {
  color: var(--LaravelColor);
}

.classes.active .name {
  background-color: var(--backgroundBold);
}

.classes.active .name .icon {
  transform: rotate(0);
}

</style>