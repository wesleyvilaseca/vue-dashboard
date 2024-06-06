<template>
  <div class="tabs">
    <div class="tabs__scroll-container">
      <ul class="tabs__header">
          <li
          v-for="title in tabTitles" 
          :key="title"
          @click.prevent="selectedTitle = title"
          :class=" {active: title == selectedTitle}"
          >
              {{ title}}
          </li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<script>
import { ref, provide, onMounted } from 'vue';

export default {
    name: "TabsWrapperComponent",
    setup(props, {slots}) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title));
        const selectedTitle = ref(tabTitles.value[0]);
        provide("selectedTitle", selectedTitle);

        onMounted(() => {
          // Adicione lógica de inicialização do carrossel aqui, se necessário
        });

        return {
            tabTitles,
            selectedTitle
        }
    }
};
</script>

<style scoped>
.tabs {
    /* max-width: 400px; */
    /* margin: 0 auto; */
}

.tabs__scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.tabs__header {
    margin-bottom: 10px;
    list-style: none;
    display: inline-flex; /* Exibe as abas em linha */
    border-bottom: 1px solid #d1d7dc;
}

.tabs__header li {
    /* width: 80px; */
    text-align: center;
    padding: 10px 20px;
    margin-right: 10px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: 0.4s all ease-out;
    white-space: nowrap; /* Evita que o texto quebre em várias linhas */
}

.tabs__header li.active {
    border-bottom: 2px solid var(--color-purple);
    font-weight: 600;
}
</style>
