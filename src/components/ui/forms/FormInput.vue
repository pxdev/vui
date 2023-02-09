<template>
  <div class="form-group" :class="formStyle">


    <label v-if="label">{{ label }} <i v-if="required" class="tx-danger required-star">*</i> </label>

    <template v-if="type === 'text' || type === 'password'">

      <template v-if="type === 'text'">
        <input :type="type" :placeholder="placeholder" class="form-control" :class="size" :value="inputValue"
               @input="updateValue"/>
      </template>

      <flex position="relative" v-if="type === 'password'">
        <input :type="showPassword ? 'text' : 'password' " :placeholder="placeholder" class="form-control" :class="size"
               :value="inputValue" @input="updateValue"/>
        <flex v-if="inputValue.length" class="show-password" position="absolute">
          <btn type="default" :icon="showPassword ? 'ri-eye-line tx-16 ' :  'ri-eye-off-line tx-16 op-5' "
               @click.prevent="togglePasswordVisibility"></btn>
        </flex>
      </flex>

    </template>

    <template v-if="type === 'date'">
      <picker class="form-control"  :type="dateType" :placeholder="placeholder" :class="`${size ?  size : ''}`" v-model:value="inputValue"></picker>
    </template>

    <template v-if="type === 'date-range'">
      <picker class="form-control" range  :type="dateType" :placeholder="placeholder" :class="`${size ?  size : ''}`" v-model:value="inputValue"></picker>
    </template>


    <template v-if="type === 'textarea'">
      <textarea :placeholder="placeholder" class="form-textarea" :class="size" :value="inputValue"
                @input="updateValue"/>
    </template>


    <template v-if="type === 'number'">
      <div class="input-number">
      <input :placeholder="placeholder" class="form-control" :class="size" type="number" :value="inputValue" @input="updateValue" />
        <div class="number-icon" :class="size">
          <a href="#" @click.prevent="incrementValue"><i class="ri-arrow-up-s-line"></i></a>
          <a href="#" @click.prevent="decrementValue"><i class="ri-arrow-down-s-line"></i></a>
        </div>
      </div>
    </template>


    <template v-if="type === 'range'">
      <div class="range-input is-ltr">
        <input :min="rangeMin" :max="rangeMax" :step="rangeStep" type="range" :value="inputValue" @input="updateValue" />
        <flex content="start" gap="5" >
          <flex fill content="start" class="range-bar">
            <div class="range-progress"  :style="`background: var(--${rangeColor});  width: ${inputValue}%`" >
              <span class="grip"  :style="`border-color: var(--${rangeColor});`"  ></span>
            </div>
          </flex>
          <flex v-if="rangePercentage" width="50px" items="center">
            {{inputValue ? inputValue  : "0"}}%
          </flex>
        </flex>

      </div>
    </template>

    <template v-if="type === 'radio'">

      <flex :gap="orient === 'vertical' ? '' : '20'" :direction="orient === 'vertical' ? 'column' : 'row'  ">

        <flex gap="5" v-for="(option, index) in options">
          <input :id="`${dataGroup}_${index}`" :name="dataGroup" type="radio" :value="option" :checked="value === option" @change="updateValue"/>
          <label :for="`${dataGroup}_${index}`">{{ option }}</label>
        </flex>
      </flex>
    </template>



    <template v-if="type === 'checkbox'">

      <flex :gap="orient === 'vertical' ? '' : '20'" :direction="orient === 'vertical' ? 'column' : 'row'  ">

        <flex gap="5" v-for="(option, index) in options">
          <input :id="`${dataGroup}_${index}`" :name="dataGroup" type="checkbox" :value="option" :checked="value === option" @change="updateValue"/>
          <label :for="`${dataGroup}_${index}`">{{ option }}</label>
        </flex>
      </flex>
    </template>



<!--    <template v-if="type === 'checkbox'">-->
<!--      <input type="checkbox" :checked="inputValue" @change="updateValue" />-->
<!--    </template>-->


    <template v-if="type === 'switch'">
      <input
          type="checkbox"
          :checked="inputValue"
          @change="updateValue"
      />
    </template>


    <template v-if="validationError">
      <p class="form-error tx-12 tx-danger">{{ validationError }}</p>
    </template>

  </div>
</template>

<script>
import Picker from 'vue-datepicker-next';
import Flex from "@/components/ui/utilities/flex.vue";

export default {
  components: {Flex, Picker },

  props: {

    formStyle: {
      type: String,
    },

    type: {
      type: String,
      required: true
    },

    dateType: {
      type: String,
      default: "Date"
     },

    label: {
      type: String,
    },

    placeholder: {
      type: String,
    },

    size: {
      type: String,
    },

    value: {
    },

    options: {
      type: Array,
      default: () => []
    },

    required: {
      type: Boolean,
      default: false
    },

    // input range
    rangeColor: {
      type: String,
      default: "primary"
    },

    rangeMin: {
      type: String,
     },

    rangeMax: {
      type: String,
    },
    rangeStep: {
      type: String,
    },
    rangePercentage: {
      type: Boolean,
    },

    // radio and checkbox groups
    dataGroup: {
      type: String,
     },

    orient: {
      type: String,
      default: 'horizontal'
    },


  },
  data() {
    return {
      validationError: '',
      showPassword: false,
      inputValue: this.value,
    };
  },

  methods: {
    updateValue(event) {

      if (this.type === 'radio' || this.type === 'checkbox' || this.type === 'switch') {
        this.inputValue = event.target.checked;
      } else {
        this.inputValue = event.target.value;
      }

      if (this.required && !this.inputValue) {
        this.validationError = 'This field is required';
        return;
      }
      this.validationError = '';


      this.inputValue = event.target.value;
      this.$emit('update:value', this.inputValue);

    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },


    incrementValue() {
      this.inputValue++;
      this.$emit('update:value', this.inputValue);
    },

    decrementValue() {
      this.inputValue--;
      this.$emit('update:value', this.inputValue);
    }


  },


};
</script>
