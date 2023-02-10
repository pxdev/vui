<template>
  <div>
    <btn v-if="theme === 'dark'" @click.prevent="switchTheme('light')"> <i class="ri-sun-fill"></i> </btn>
    <btn v-else @click.prevent="switchTheme('dark')"> <i class="ri-moon-fill"></i> </btn>
  </div>
</template>

<script>

export default {
  computed: {
    theme() {
      return this.$store.state.theme
    }
  },
  methods: {
    switchTheme(theme) {
      this.$store.state.theme = theme
      localStorage.setItem('theme', theme)
    }
  },
  created() {
    const theme = localStorage.getItem('theme')
    if (theme) {
      this.$store.state.theme = theme
    }
  }
}
</script>


