<template>


  <div class="form-group"
       :class="`${formStyle && type === 'text' || formStyle && type === 'textarea'  || formStyle && type === 'password' || formStyle && type === 'date' || formStyle && type === 'date-range' || formStyle && type === 'number'    ? formStyle : ''} ${type ? 'form-' + type + '-type' : '' }`">


    <label class="form-label" v-if="label">{{ label }} <i v-if="required" class="tx-danger required-star">*</i> </label>

    <template v-if="type === 'text' || type === 'password'">

      <template v-if="type === 'text'">
        <input :type="type" :placeholder="placeholder" class="form-control" :class="size" :value="inputValue"
               @input="updateValue"/>
      </template>

      <flex position="relative" fill v-if="type === 'password'">
        <input :type="showPassword ? 'text' : 'password' " :placeholder="placeholder" class="form-control" :class="size"
               :value="inputValue" @input="updateValue"/>
        <flex v-if="inputValue.length" class="show-password" position="absolute">
          <btn type="default" :icon="showPassword ? 'ri-eye-line tx-16 ' :  'ri-eye-off-line tx-16 op-5' "
               @click.prevent="togglePasswordVisibility"></btn>
        </flex>
      </flex>

    </template>

    <template v-if="type === 'date'">
      <picker class="form-control" :type="dateType" :placeholder="placeholder" :class="`${size ?  size : ''}`"
              v-model:value="inputValue"></picker>
    </template>

    <template v-if="type === 'date-range'">
      <picker class="form-control" range :type="dateType" :placeholder="placeholder" :class="`${size ?  size : ''}`"
              v-model:value="inputValue"></picker>
    </template>


    <template v-if="type === 'textarea'">
      <textarea ref="textArea" :placeholder="placeholder" class="form-textarea" :class="size" :value="inputValue"
                @input="updateValue" :style="{ height: `${textareaHeight}px` }"/>
    </template>


    <template v-if="type === 'number'">
      <div class="input-number">
        <input
            :placeholder="placeholder" class="form-control"
            :class="size" type="number"
            :value="inputValue" @input="updateValue"/>
        <div class="number-icon" :class="size">
          <a href="#" @click.prevent="incrementValue"><i class="ri-arrow-up-s-line"></i></a>
          <a href="#" @click.prevent="decrementValue"><i class="ri-arrow-down-s-line"></i></a>
        </div>
      </div>
    </template>


    <template v-if="type === 'range'">
      <flex class="range-input is-ltr" fill>
        <input :min="rangeMin" :max="rangeMax" :step="rangeStep" type="range" :value="inputValue" @input="updateValue"/>
        <flex content="start" gap="5" fill>
          <flex fill content="start" class="range-bar">
            <div class="range-progress" :style="`background: var(--${rangeColor});  width: ${inputValue}%`">
              <span class="grip" :style="`border-color: var(--${rangeColor});`"></span>
            </div>
          </flex>
          <flex v-if="rangePercentage" width="30px" items="center" content="end">
            {{ inputValue ? inputValue : "0" }}%
          </flex>
        </flex>

      </flex>
    </template>

    <template v-if="type === 'radio'">

      <flex :gap="orient === 'vertical' ? '' : '20'" :direction="orient === 'vertical' ? 'column' : 'row'  ">

        <flex items="center" gap="5" v-for="(option, index) in options" :key="index+'radio'">
          <input :id="`${dataGroup}_${index}`" :name="dataGroup" type="radio" :value="option"
                 :checked="value === option" @change="updateValue"/>
          <label :for="`${dataGroup}_${index}`">{{ option }}</label>
        </flex>
      </flex>
    </template>


    <template v-if="type === 'checkbox'">

      <flex :gap="orient === 'vertical' ? '' : '20'" :direction="orient === 'vertical' ? 'column' : 'row'  ">

        <flex items="center" gap="5" v-for="(option, index) in options" :key="index+'check'">
          <input :id="`${dataGroup}_${index}`" :name="dataGroup" type="checkbox" :value="option"
                 :checked="value === option" @change="updateValue"/>
          <label :for="`${dataGroup}_${index}`">{{ option }}</label>
        </flex>
      </flex>
    </template>


    <template v-if="type === 'switch'">
      <div class="toggle-btn" :style="[ inputValue ? `background: var(--${switchColor});` : '']"
           :class="`${inputValue ? 'active' : ''} ${size ? size : ''} `" @click.prevent="toggleSwitch">
        <span :style="`border-color: var(--light);`"></span>
      </div>
    </template>


    <template v-if="validationError">
      <p class="form-error tx-12 tx-danger">{{ validationError }}</p>
    </template>

  </div>
</template>

<script>
import Picker from 'vue-datepicker-next';

export default {
  components: {Picker},
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

    value: {},

    options: {
      type: Array,
      default: () => []
    },

    required: {
      type: Boolean,
      default: false
    },


    // switch
    switchColor: {
      type: String,
      default: "primary"
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


    minTextareaHeight: {
      type: Number,
    },

  },
  data() {
    return {
      validationError: '',
      showPassword: false,
      inputValue: this.value,
      showNumberArrows: false,
      textareaHeight: this.minTextareaHeight
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


    toggleSwitch() {
      this.inputValue = !this.inputValue
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
