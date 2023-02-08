<template>
  <picker class="form-control"
      :class="`${size ?  size : ''}`"
       v-model:value="modelValue"></picker>
</template>

<script>
import Picker from 'vue-datepicker-next';

export default {
  name: "DatePicker",
  emits: ['update:modelValue'],

  components: { Picker },
  props: {

    size: {
      type: String,
    },

  },
  data() {
    return {
      modelValue : null
     }
  },
  methods: {
    selectItem(data) {
        this.$emit('update:modelValue', data.value);
    },

  }


}
</script>

<style scoped>

</style>
