<template>
  <div class="mg-b-20">
  <h6 class="mg-b-5">{{title}}</h6>
  <code class="tx-pink d-block rounded">
   <slot />
  </code>
  </div>
</template>

<script>
export default {
  name: "DocCode",
  props : ['title']
}
</script>

<style scoped>

</style>
