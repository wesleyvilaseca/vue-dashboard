<template>
  <div class="video-container">
    <iframe
      class="responsive-iframe"
      :src="embedUrl"
      :title="lesson.name"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <!-- <div class="description-lesson" v-if="lesson.description">
    {{ lesson.description }}
  </div> -->
  <div></div>
</template>

<script>
// import { computed, watch } from 'vue'
// import { useStore } from 'vuex'

export default {
    name: 'PlayerComponent',
    props: {
      lesson: {
        type: Object
      }
    },
    computed: {
      embedUrl() {
        return `https://www.youtube.com/embed/${this.lesson.youTubeVideoId}`;
        }
    },
    mounted() {
      console.log(this.lesson)
    }
    // setup() {
    //   const store = useStore()

    //   const lesson = computed(() => store.state.courses.lessonPlayer)

    //   watch(() => store.state.courses.lessonPlayer, () => {
    //     if (lesson.value.id != '')
    //       setTimeout(() => store.dispatch('markLessonViewed'), 3000)
    //   })

    //   return {
    //     lesson
    //   }
    // }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Proporção de aspecto 16:9 (h / w * 100%) */
  overflow: hidden;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>