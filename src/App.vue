<template>
  <div class="app" :class="theme">
    <router-view />
  </div>
</template>

<script>
export default {
computed: {
  theme() {
    return this.$store.state.theme
  }
}
}
</script>
