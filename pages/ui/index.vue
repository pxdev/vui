<template>

  <div>

    {{ visible }}
    <theme-switcher></theme-switcher>


    <button @click="visible = true">Show Modal</button>
    <modal title="test" size="" v-model="visible">test</modal>

    <button @click="isVisible = true">Show Modal</button>
    <modal title="tests" size="" v-model="isVisible">test</modal>



  </div>

</template>

<script>
import {ref} from 'vue';

definePageMeta({layout: 'ui'})
export default {
  name: "index",

  setup() {

    const visible = ref(false);
    const isVisible = ref(false);

    return {
      visible, isVisible
    }
  }


}
</script>

<style scoped>

</style>
