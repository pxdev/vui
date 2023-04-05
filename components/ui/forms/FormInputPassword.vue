<template>
  <div class="form-group form-text" v-bind="$attrs">
    <form-label v-if="props.label" :required="props.required">{{ props.label }}</form-label>

    <flex position="relative" fill>


      <input @focusin="toggleMeter" @focusout="toggleMeter" :type="showPassword ? 'text' : 'password' "
             ref="input"
             :placeholder="props.placeholder"
             class="form-control"
             :class="props.size"
             :value="props.modelValue"
             @input="updateValue"
      />
      <flex v-if="inputValue.length" class="show-password" position="absolute">
        <btn type="default"
             :icon="showPassword ? 'ri-eye-line tx-16 ' :  'ri-eye-off-line tx-16 op-5' "
             @click.prevent="togglePasswordVisibility">
        </btn>
      </flex>
      <flex v-if="passwordMeterVisible" gap="5" fill position="absolute" class="password-meter">
        <span :class="{'active': passwordStrength >= 1 }" class="bar bar-1"></span>
        <span :class="{'active': passwordStrength >= 2 }" class="bar bar-2"></span>
        <span :class="{'active': passwordStrength >= 3 }" class="bar bar-3"></span>
        <span :class="{'active': passwordStrength >= 4 }" class="bar bar-4"></span>
      </flex>
    </flex>
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
const showPassword = ref(false)

const passwordMeterVisible = ref(false)

const toggleMeter = ()=> {
  passwordMeterVisible.value = ! passwordMeterVisible.value
}
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
}
const passwordStrength = computed(() => {
  let score = 0;
  if (inputValue.value.length >= 8) score++;
  if (/[A-Z]/.test(inputValue.value)) score++;
  if (/[a-z]/.test(inputValue.value)) score++;
  if (/[0-9]/.test(inputValue.value)) score++;
  return score;
});


const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  const value = event.target.value;
  emit('update:modelValue', value);
}
watchEffect(() => {
  inputValue.value = props.modelValue
})

</script>
