<template>
  <label class="form-label" v-bind="$attrs">
    <slot />
    <i v-if="props.required" class="tx-danger required-star">*</i>
  </label>
</template>

<script setup>
const props = defineProps({
  required: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped></style>
