<template>
  <div class="form-group form-text" v-bind="$attrs">
    <form-label v-if="props.label" :required="props.required">{{ props.label }}</form-label>

    <input
        ref="inputText"
        :placeholder="props.placeholder"
        class="form-control"
        :class="props.size"
        :value="props.modelValue"
        @input="updateValue"
        type="text"
    />


  </div>
</template>

<script setup>
import {ref, watchEffect, computed} from 'vue'
import {useCommon} from "./composables/common";

const props = defineProps({
  modelValue: {
    type: String,
  },
  ...useCommon.props(), // spread the useCommon props here

})

const input = ref('')
const inputValue = ref(props.modelValue)


const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  const value = event.target.value;
  emit('update:modelValue', value);
}

watchEffect(() => {
  inputValue.value = props.modelValue
})

</script>
