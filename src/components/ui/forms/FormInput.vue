<template>
  <div>
    <template v-if="type === 'text' || type === 'password'">
      <div class="form-group">
        <label v-if="label">{{ label }}</label>

        <div v-if="type === 'text'" >
          <input :type="type" :placeholder="placeholder" class="form-control" :class="size" :value="inputValue" @input="updateValue"/>
        </div>

        <flex position="relative" v-if="type === 'password'" >
          <input :type="showPassword ? 'text' : 'password' " :placeholder="placeholder" class="form-control" :class="size" :value="inputValue" @input="updateValue"/>
          <flex class="show-password" position="absolute">
            <btn type="default" :icon="showPassword ? 'ri-eye-line tx-16 ' :  'ri-eye-off-line tx-16 op-5' " @click.prevent="togglePasswordVisibility"></btn>
          </flex>
        </flex>

      </div>
    </template>
    <template v-if="type === 'textarea'">
      <div class="form-group">
        <label v-if="label">{{ label }}</label>
        <textarea :placeholder="placeholder" class="form-textarea" :class="size" :value="inputValue" @input="updateValue"/>
      </div>
    </template>
    <template v-if="type === 'number'">
      <input
          type="number"
          :value="inputValue"
          @input="updateValue"
      />
    </template>
    <template v-if="type === 'range'">
      <input
          type="range"
          :value="inputValue"
          @input="updateValue"
      />
    </template>
    <template v-if="type === 'radio'">
      <template v-for="(option, index) in options">
        <input
            :id="'option-' + index"
            type="radio"
            :value="option"
            :checked="value === option"
            @change="updateValue"
        />
        <label :for="'option-' + index">{{ option }}</label>
      </template>
    </template>
    <template v-if="type === 'checkbox'">
      <input
          type="checkbox"
          :checked="inputValue"
          @change="updateValue"
      />
    </template>
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
import Flex from "@/components/ui/utilities/flex.vue";

export default {
  components: {Flex},
  props: {
    type: {
      type: String,
      required: true
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
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      validationError: '',
      showPassword: false,
      inputValue: this.value
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
    }

  }
};
</script>
