<template>
  <teleport to="body">
  <transition name="slide-fade">
    <div
        v-if="visible"
        v-bind="$attrs"
        :id="name"
        class="modal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`${name}-header`"
    >

      <div v-show="visible" class="modal-dialog" :class="size">
        <div class="modal-content">

          <div v-if="title" class="modal-header d-flex justify-content-between align-items-center">
            <slot name="modal-header">
              <h3 >{{ title }} <span class="op-7" v-if="subtitle">{{ subtitle }}</span></h3>
            </slot>
            <a href="#" @click.prevent="hide" class="close-btn"> &#x2715; </a>
          </div>

          <div v-if="$slots.default" class="modal-body">
            <!-- @slot default Slot for modal body content -->
            <slot/>
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <!-- @slot footer Slot for modal footer content -->
            <slot name="footer"/>
          </div>
        </div>
      </div>

      <div v-if="visible" class="close-layer" @click.prevent="hide"></div>
    </div>
  </transition>
  <transition name="fade">
    <div v-show="visible" v-if="!disableBackDrop" class="modal-backdrop"></div>
  </transition>
  </teleport>
</template>

<script>
import {ref, watch} from 'vue';

export default {
  emits: [
    'update:modelValue'
  ],
  props: {
    disableBackDrop: {
      type: Boolean,
    },

    name: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    showClose: {
      type: Boolean,
      default: true
    },

    size: {
      type: String,
    },

    modelValue: {
      type: Boolean,
      default: false
    },

  },
  setup(props, {emit}) {

    const visible = ref(props.modelValue);

    watch(() => props.modelValue, (value) => {
      value ? show() : hide()
    })

    function show() {
      visible.value = true;
      emit('update:modelValue', true);
    }

    function hide() {
      visible.value = false;
      emit('update:modelValue', false);
    }

    return {visible, hide}
  }
};
</script>


