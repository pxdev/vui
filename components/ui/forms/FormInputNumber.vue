<template>
  <div class="form-group form-number" v-bind="$attrs">
    <form-label v-if="props.label" :required="props.required">{{
      props.label
    }}</form-label>

    <flex position="relative" class="input-number">
      <input
        ref="inputText"
        :placeholder="props.placeholder"
        class="form-control"
        :class="props.size"
        :value="props.modelValue"
        @input="updateNumberValue"
        type="number"
      />
      <div class="number-icon" :class="props.size">
        <a href="#" @click.prevent="incrementValue"
          ><i class="ri-arrow-up-s-line"></i
        ></a>
        <a href="#" @click.prevent="decrementValue"
          ><i class="ri-arrow-down-s-line"></i
        ></a>
      </div>
    </flex>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useCommon } from './composables/common'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  ...useCommon.props() // spread the useCommon props here
})

const input = ref('')
const inputValue = ref(props.modelValue)

const incrementValue = () => {
  const newValue = props.modelValue + 1
  emit('update:modelValue', newValue)
}

const decrementValue = () => {
  const newValue = props.modelValue - 1
  emit('update:modelValue', newValue)
}

const emit = defineEmits(['update:modelValue'])

const updateNumberValue = (event) => {
  const value = event.target.value
  emit('update:modelValue', Number(value))
}

watchEffect(() => {
  inputValue.value = props.modelValue
})
</script>
