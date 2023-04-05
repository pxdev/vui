<template>
  <div class="form-group form-range" v-bind="$attrs">
    <form-label v-if="props.label" :required="props.required">{{
      props.label
    }}</form-label>

    <flex class="range-input is-ltr" fill>
      <input
        :min="rangeMin"
        :max="rangeMax"
        :step="rangeStep"
        type="range"
        v-model="props.modelValue"
        @input="updateValue"
      />
      <flex content="start" gap="5" fill>
        <flex fill content="start" class="range-bar">
          <div
            class="range-progress"
            :style="`background: var(--${rangeColor});  width: ${inputValue}%`"
          >
            <span
              class="grip"
              :style="`border-color: var(--${rangeColor});`"
            ></span>
          </div>
        </flex>
        <flex v-if="rangePercentage" width="30px" items="center" content="end">
          {{ inputValue ? inputValue : '0' }}%
        </flex>
      </flex>
    </flex>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useCommon } from './composables/common'

const props = defineProps({
  value: String,
  // input range
  rangeColor: {
    type: String,
    default: 'primary'
  },

  rangeMin: {
    type: String
  },

  rangeMax: {
    type: String
  },
  rangeStep: {
    type: String
  },
  rangePercentage: {
    type: Boolean
  },
  ...useCommon.props() // spread the useCommon props here
})

const input = ref('')
const inputValue = ref(props.value)

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  const value = event.target.value
  inputValue.value = Number(value)
  emit('update:modelValue', inputValue.value)
}
watchEffect(() => {
  inputValue.value = props.modelValue
})
</script>
