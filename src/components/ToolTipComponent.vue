<template>
  <div class="tooltip-box">
    <slot />
    <div
      :class="`tooltip box-${position}`" :style="`width: ${width}px`"
    >
      <span
        :class="`text text-${position}`"
        v-html="text"
        />
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    text: {
      type: String,
      required: true
    },
    position: {
        type: String,
        default: 'bottom'
    },
    width: {
      type: String,
      default: '160'
    }
  }
};
</script>

<style scoped>
.tooltip-box { 
  position: relative;
  display: inline-block;
}

.tooltip-box:hover .tooltip{
  opacity: 1;
}

.tooltip { 
  color: #ffffff;
  padding: 5px 0;
  margin-top:2px;
  border-radius: 2px;
  left: 50%;
  opacity: 0;
  transition: opacity 0.1s;
  position: absolute;
  z-index: 1;
  background: var(--menu-color);
  transform: translateX(-50%);
}

.tooltip.box-top {
  bottom: 100%;
}

.tooltip-box .text::after {
  content: " ";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}

.tooltip-box .text-bottom::after {
  border-color:  transparent transparent  var(--menu-color) transparent;
}

.tooltip-box .text-top::after {
  border-color: var(--menu-color) transparent transparent transparent;
}
</style>