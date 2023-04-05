<template>
  <div class="form-group form-checkbox" v-bind="$attrs">
    <flex class="custom-check" items="center" gap="5" :class="props.size">
      <input
        type="checkbox"
        ref="inputCheckbox"
        @input="updateValue"
        :id="checkboxId"
        :value="props.modelValue"
      />
      <form-label
        :for="checkboxId"
        v-if="props.label"
        :required="props.required"
        >{{ props.label }}</form-label
      >
    </flex>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useCommon } from './composables/common'

const props = defineProps({
  value: String,

  ...useCommon.props() // spread the useCommon props here
})

const input = ref('')
const inputValue = ref(props.value)

const checkboxId = computed(() => {
  return 'checkbox-' + Math.floor(Math.random() * 1000000)
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  const value = event.target.checked
  inputValue.value = value
  emit('update:modelValue', value)
}
watchEffect(() => {
  inputValue.value = props.modelValue
})
</script>
