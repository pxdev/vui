<template>
  <div class="col" :class="classList">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'GridCol',
  props: {
    sm: Number,
    md: Number,
    lg: Number,
    className: String,
  },
  computed: {
    classList() {
      let classList = []
      if (this.sm) classList.push(`col-sm-${this.sm}`)
      if (this.md) classList.push(`col-md-${this.md}`)
      if (this.lg) classList.push(`col-lg-${this.lg}`)
      return classList
    }
  }
}
</script>
