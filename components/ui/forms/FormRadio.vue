<template>
  <div class="form-group form-textarea" v-bind="$attrs">


    <flex :gap="orient === 'vertical' ? '' : '20'" :direction="orient === 'vertical' ? 'column' : 'row'  ">

      <flex items="center" class="custom-radio" gap="5" v-for="(option, index) in props.options" :key="index+'radio'">
        <input :id="`${RadioGroupId}_${index}`" :name="RadioGroupId" type="radio" :value="option" :checked="value === option"
               @change="updateValue(option)"/>
        <form-label :for="`${RadioGroupId}_${index}`" v-if="props.label" :required="props.required">{{ option }}</form-label>
      </flex>
    </flex>


  </div>
</template>

<script setup>

import {computed, ref, watchEffect} from 'vue'
import {useCommon} from "./composables/common";

const props = defineProps({
  value: String,

  options: {
    type: Array,
    default: () => []
  },

  orient: {
    type: String,
    default: 'horizontal'
  },

  ...useCommon.props(), // spread the useCommon props here

})

const input = ref('')
const inputValue = ref(props.value)

const RadioGroupId = computed(() => {
  return 'RadioGroupId-' + Math.floor(Math.random() * 1000000)
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (option) => {
  const value = option
  inputValue.value = value
  emit('update:modelValue', value)
}
watchEffect(() => {
  inputValue.value = props.modelValue
})

</script>
