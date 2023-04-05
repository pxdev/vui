<template>
  <div
    :style="`border-color:var(--${props.color})`"
    class="rounded position-relative bd mg-y-20 pd-x-15 pd-y-5 tx-start"
  >
    <span
      class="position-absolute op-1"
      style="inset: 0 0 0 0; z-index: 1"
      :class="`bg-${props.color}`"
    ></span>
    <flex
      position="relative"
      style="z-index: 2"
      items="center"
      gap="15"
      :class="`tx-${props.color}`"
      ><i class="tx-34" :class="props.icon"></i>
      <div class="tx-16" :class="`tx-${props.color}`">
        <slot />
      </div>
    </flex>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String
  },
  icon: {
    type: String
  }
})
</script>

<style scoped></style>
