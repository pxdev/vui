<template>
  <div class="form-group form-textarea"  v-bind="$attrs">
    <form-label v-if="props.label" :required="props.required">{{ props.label }}</form-label>

    <div class="toggle-btn" :style="[ inputValue ? `background: var(--${switchColor});` : '']"
         :class="`${inputValue ? 'active' : ''} ${props.size ? props.size : ''} `" @click.prevent="toggleSwitch">
      <span :style="`border-color: var(--light);`"></span>
    </div>


  </div>
</template>

<script setup>
import {ref, watchEffect, computed} from 'vue'
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
const inputValue = ref(props.value)
const emit = defineEmits(['update:value'])

const toggleSwitch = () => {
  inputValue.value = !inputValue.value
  emit('update:value', inputValue.value);
}


watchEffect(() => {
  inputValue.value = props.value
})


</script>
