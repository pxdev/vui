<template>
  <div class="grid-row" :class="classList">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    items: String,
    content: Number,
    className: String,
  },
  computed: {
    classList() {
      let classList = []
      if (this.items) classList.push(`align-items-${this.items}`)
      if (this.content) classList.push(`justify-content-${this.content}`)
       return classList
    }
  }

}
</script>
