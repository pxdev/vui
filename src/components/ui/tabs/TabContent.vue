<template>
  <div class="data-tabs-content" :class="'tab-'+tabIndex" v-if="tabIndex === activeTab">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TabContent",

  props: {
    tabIndex: {
      type: Number,
     },

    activeTab: {
      type: Number,
     },

  },

}
</script>

<style scoped>

</style>
