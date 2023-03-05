<template>
  <transition name="slide-fade">
    <div
        v-show="visible"
        v-bind="$attrs"
        :id="name"
        class="modal"
        role="dialog"
        aria-modal="true"
        :aria-hidden="visible ? 'false' : 'true'"
        :aria-labelledby="`${name}-header`"
    >

      <div v-show="visible" ref="modalRef" class="modal-dialog">
        <div class="modal-content">
          <div v-if="$slots.header" :id="`${name}-header`"
               class="modal-header modal-header d-flex justify-content-between align-items-center">
            <h3>
              <slot name="header"/>
            </h3>
            <a href="#" v-if="showClose"
               aria-hidden="true"
               :aria-label="closeAriaLabel"
               @click="hide"
               class="close-btn"> &#x2715; </a>

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

    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, ref, toRef, watch} from 'vue';

export default defineComponent({
  props: {
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    closeAriaLabel: {
      type: String,
      default: 'Close'
    },
    color: {
      type: String,
      default: undefined
    },

    disabled: {
      type: Boolean,
      default: false
    },

    hideOnClickOutside: {
      type: Boolean,
      default: true
    },

    name: {
      type: String,

    },

    showClose: {
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: undefined
    },

    modelValue: {
      type: Boolean,
      default: false
    },

  },
  emits: [
    'update:modelValue'
  ],

  setup(props, {emit}) {

    const visible = ref(props.modelValue);

    const closeOnPressEscape = toRef(props, 'closeOnPressEscape');
    watch(
        () => props.modelValue,
        (value) => {
          if (value) {
            show();
          } else {
            hide();
          }
        }
    );

    function show() {
      if (props.disabled) {
        return;
      }
      visible.value = true;
      emit('update:modelValue', true);

    }

    function hide() {
      if (props.disabled) {
        return;
      }
      visible.value = false;
      emit('update:modelValue', false);

    }

    function onClickOutside() {
      if (!props.hideOnClickOutside) {
        return;
      }
      hide();
    }

    return {
      visible,
      hide
    };
  }
});
</script>


