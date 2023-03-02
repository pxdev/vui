<template>
  <button class="btn gap-5" :class="`

  ${type ? 'btn-' + type : ''}
  ${size ?  size : ''}
  ${rounded ? 'btn-rounded' : ''}
  `"
          type="button" :disabled="disabled" @click.prevent="handleClick">

    <span class="btn-loading gap-5" v-if="loading"><i class="ri-loader-5-line spin tx-20"></i></span>

    <i class="btn-icon" v-if="icon" :class="icon"></i>

    <span class="btn-tx" v-if="$slots.default"><slot/></span>

    <span class="btn-ink" :class="{'btn-ink-active': rippleActive}"
          :style="`left: ${rippleLeft}px; top: ${rippleTop}px; width: ${rippleWidth}px; height: ${rippleWidth}px; margin-left: -${rippleWidth / 2}px; margin-top: -${rippleWidth / 2}px  `"></span>

  </button>
</template>

<script>

export default {
  name: 'Btn',
  props: {
    type: {
      type: String,
    },
    size: {
      type: String,
    },
    rounded: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: String,
      default: null
    },

    loading: {
      type: Boolean,
      default: false
    },

  },
  data() {
    return {
      rippleActive: false,
      rippleTop: 0,
      rippleLeft: 0,
      rippleWidth: null,
      rippleHeight: null,
    }
  },

  methods: {
    handleClick(event) {
      this.$emit('clicked');

      const button = event.target.getBoundingClientRect();
      const x = event.clientX - button.left;
      const y = event.clientY - button.top;

      this.rippleWidth = button.width;

      this.rippleTop = y;
      this.rippleLeft = x;
      this.rippleActive = true

      setTimeout(() => {
        this.rippleTop = 0;
        this.rippleLeft = 0;
        this.rippleActive = false
      }, 500);

    }
  },

  computed: {
    disabled() {
      return this.$attrs.disabled;
    },
  },

};
</script>

