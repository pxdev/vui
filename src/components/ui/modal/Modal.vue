<template>
  <transition name="slide-fade">
    <div class="modal" v-if="show">
      <div class="modal-dialog" :class="size">
        <div class="modal-content">

          <div v-if="title" class="modal-header d-flex justify-content-between align-items-center">
            <slot name="modal-header">
              <h3 >{{ title }} <span class="op-7" v-if="subtitle">{{ subtitle }}</span></h3>
            </slot>
            <a href="#" @click.prevent="close" class="close-btn"> &#x2715; </a>
          </div>

          <div class="modal-body">
            <slot/>
          </div>


        </div>
      </div>
      <div v-show="show" class="close-layer" @click.prevent="close"></div>
    </div>
  </transition>

  <transition name="fade">

  <div v-show="show" v-if="!disableBackDrop" class="modal-backdrop"></div>
  </transition>

</template>

<script>
export default {
  name: "Modal",
  props: {
    id: {
      type: String,
      required: true
    },
    size: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    disableBackDrop: {
      type: Boolean,
    },
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    close() {
      this.show = false
    },

    EscapeKeyHandler(event) {
      if (event.key === 'Escape') {
        this.show = false
      }
    }

  },
  mounted() {
    window[`openModal_${this.id}`] = () => {
      this.show = true;
      window.addEventListener('keydown', this.EscapeKeyHandler);
    };
    window[`closeModal_${this.id}`] = () => {
      this.show = false;
      window.removeEventListener('keydown', this.EscapeKeyHandler);
    };
  }

};
</script>


