<template>
  <button class="btn gap-5"
          :class="`${color ? 'btn-' + color : ''}
                   ${size ?  size : ''}
                   ${rounded ? 'btn-rounded' : ''}`" :disabled="disabled" @click.prevent="handleClick">

    <span class="btn-loading gap-5" v-if="loading"><i class="ri-loader-5-line spin tx-20"></i></span>

    <i class="btn-icon" v-if="icon" :class="icon"></i>

    <span class="btn-tx" v-if="$slots.default"><slot/></span>

    <span class="btn-ink" :class="{'btn-ink-active': rippleActive}" :style="`left: ${rippleLeft}px; top: ${rippleTop}px; width: ${rippleWidth}px; height: ${rippleWidth}px; margin-left: -${rippleWidth / 2}px; margin-top: -${rippleWidth / 2}px  `"></span>
  </button>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'Btn',
  props: {
    disabled : {
      type: String,
    },
    color: {
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

  setup(props, {emit}){

    const rippleActive = ref( false)
    const rippleTop = ref( 0)
    const rippleLeft = ref( 0)
    const rippleWidth = ref( null)
    const rippleHeight = ref( null)


    const handleClick = (event)=> {

      emit('clicked');

      const button = event.target.getBoundingClientRect();
      const x = event.clientX - button.left;
      const y = event.clientY - button.top;

      rippleWidth.value = button.width;

      rippleTop.value = y;
      rippleLeft.value = x;
      rippleActive.value = true

      setTimeout(() => {
        rippleTop.value = 0;
        rippleLeft.value = 0;
        rippleActive.value = false
      }, 500);

    }


    return {
      handleClick, rippleActive, rippleTop, rippleLeft, rippleWidth, rippleHeight
    }

  },



};
</script>

