<template>
  <div class="form-group form-switch" v-bind="$attrs">

    <flex gap="5" items="center">
      <div class="toggle-btn" :style="[ inputValue ? `background: var(--${switchColor});` : '']"
           :class="`${inputValue ? 'active' : ''} ${props.size ? props.size : ''} `" @click.prevent="toggleSwitch">
        <span :style="`border-color: var(--light);`"></span>
      </div>
      <form-label v-if="props.label" :required="props.required">{{ props.label }}</form-label>
    </flex>
  </div>
</template>

<script setup>
import {ref, watchEffect} from 'vue'
import {useCommon} from "./composables/common";

const props = defineProps({
  ...useCommon.props(), // spread the useCommon props here
  value: Boolean,
  switchColor: {
    type: String,
    default: 'text'
  },


})

const input = ref('')
const inputValue = ref(props.moelValue)
const emit = defineEmits(['update:modelValue'])

const toggleSwitch = () => {
  inputValue.value = !inputValue.value
  emit('update:modelValue', inputValue.value);
}


watchEffect(() => {
  inputValue.value = props.value
})


</script>
