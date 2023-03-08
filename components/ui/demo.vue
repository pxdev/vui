<template>
  <div>
    <p>Value: {{ value ? 'ON' : 'OFF' }}</p>
    <button @click="toggle()">
      Toggle
    </button>
    <button @click="value = true">
      Set ON
    </button>
    <button @click="value = false">
      Set OFF
    </button>
  </div>
</template>

<script>
import { useToggle } from '@vueuse/core'

export default {
  name: "demo",

  setup(){
    const [value, toggle] = useToggle()

    return {
      value, toggle
    }
  }

}
</script>

<style scoped>

</style>
