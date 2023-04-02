<template>
  <div class="form-group form-textarea"  v-bind="$attrs">
    <form-label v-if="props.label" :required="props.required">{{ props.label }}</form-label>

    <input type="text" v-if="type === 'text'"
           ref="inputText"
           :placeholder="props.placeholder"
           class="form-control"
           :class="props.size"
           v-model="input"
           @input="updateValue"
    />

    <flex position="relative" fill v-if="type === 'password'">
      <input @focusin="toggleMeter" @focusout="toggleMeter" :type="showPassword ? 'text' : 'password' "
             ref="inputPassword"
             :placeholder="props.placeholder"
             class="form-control"
             :class="props.size"
             v-model="input"
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


      <div v-if="type === 'number'" class="input-number">
        <input
            ref="inputText"
            :placeholder="props.placeholder"
            class="form-control"
            :class="props.size"
            v-model="input"
            @input="updateValue"
            type="number"
        />
        <div class="number-icon" :class="props.size">
          <a href="#" @click.prevent="incrementValue"><i class="ri-arrow-up-s-line"></i></a>
          <a href="#" @click.prevent="decrementValue"><i class="ri-arrow-down-s-line"></i></a>
        </div>
      </div>



  </div>
</template>

<script setup>
import {ref, watchEffect, computed} from 'vue'
import {useCommon} from "./composables/common";

const props = defineProps({
  value: String,
  type: {
    type: String,
    default: 'text'
  },
  PasswordMeter: {
    type: Boolean,
    default: true
  },
  ...useCommon.props(), // spread the useCommon props here

})

const input = ref('')
const inputValue = ref(props.value)
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
  if (input.value.length >= 8) score++;
  if (/[A-Z]/.test(input.value)) score++;
  if (/[a-z]/.test(input.value)) score++;
  if (/[0-9]/.test(input.value)) score++;
  return score;
});


const incrementValue = () => {
  inputValue.value++;
  input.value++;
  emit('update:value', inputValue.value);
}

const decrementValue = () => {
  inputValue.value--;
  input.value--;
  emit('update:value', inputValue.value);
}


watchEffect(() => {
  inputValue.value = props.value
})

const emit = defineEmits(['update:value'])

const updateValue = (event) => {
  const value = event.target.value
  inputValue.value = value
  emit('update:value', value)
}

</script>
