<template>

  <div>

    <theme-switcher></theme-switcher>

    <modal></modal>

    <button @click="visible = true">
      Show Modal
    </button>

    <modal v-model="visible">
      <template #header>
        Modal Header
      </template>
      This is the modal body. Useful information goes here.
      <template #footer>
        Modal Footer
      </template>
    </modal>


  </div>

</template>

<script>
import Modal from "~/components/ui/modal/modal.vue";

definePageMeta({ layout: 'ui' })
export default {
  name: "index",
  components: {Modal},
  data(){
    return {
      visible : false
    }
  }

}
</script>

<style scoped>

</style>
