<template>
  <div class="tabs">
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
    <slot />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
export default {
    name: "TabsWrapperComponent",
    setup(props, {slots}) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title));
        const selectedTitle = ref(tabTitles.value[0]);
        provide("selectedTitle", selectedTitle);

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

.tabs__header {
    margin-bottom: 10px;
    list-style: none;
    display: flex;
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
}

.tabs__header li.active {
    border-bottom: 2px solid var(--color-purple);
    font-weight: 600;
}
</style>