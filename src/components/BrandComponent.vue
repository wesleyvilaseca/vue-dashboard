<template>
<template v-if="li">
    <li class="sidebar-brand">
        <a href="#"> Post<span style="color: var(--color-purple);">Academy</span> </a>
        <slot name="content"></slot>
    </li>
</template>
<template v-else>
    <div class="sidebar-brand">
        <a href="#"> Post<span style="color: var(--color-purple);">Academy</span></a>
        <slot name="content"></slot>
    </div>
</template>

</template>

<script>
export default {
  name: "BrandComponent",
  props: {
    li: {
        Type: Boolean,
        default: false
    }
  },
  data: () => ({}),
  methods: { },
  updated() {}
}
</script>

<style>
.sidebar-brand>a {
    font-weight: bold;
    flex-grow: 1;
    padding-left: 14px;
    padding-top: 5px;
    font-size: 18px !important;
    color: #000;
}
</style>