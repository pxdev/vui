<template>
  <div class="form-group form-textarea"  v-bind="$attrs">
    <form-label v-if="props.label" :required="props.required">{{ props.label }}</form-label>

    <textarea v-if="props.adjustToText"
              ref="textarea"
              :placeholder="props.placeholder"
              class="form-textarea resizable"
              :class="props.size"
              v-model="input"
              @input="updateValue"

    />
    <textarea v-else
              ref="defaultTextarea"
              :placeholder="props.placeholder"
              class="form-textarea"
              :class="props.size"
              v-model="input"
              @input="updateValue"

    />

  </div>
</template>

<script setup>
import {ref, watchEffect} from 'vue'
import {useTextareaAutosize} from '@vueuse/core'
import {useCommon} from "./composables/common";

const props = defineProps({
  ...useCommon.props(), // spread the useCommon props here
  value: String,
  adjustToText: {
    type: Boolean,
    default: false,
  }
})



const inputValue = ref(props.value)
const emit = defineEmits(['update:modelValue'])

const {textarea, input} = useTextareaAutosize();



const updateValue = (event) => {
  const value = event.target.value
  inputValue.value = value
  emit('update:modelValue', value)
}
watchEffect(() => {
  inputValue.value = props.modelValue
})

</script>
