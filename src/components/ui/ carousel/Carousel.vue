<template>

  {{slideSize}}


  <div class="carousel">
    <div class="carousel-wrapper" ref="carouselWrapper" :style="{ gap:gapSize + 'px',  transform: 'translateX(' + ((-slideSize - gapSize) * currentSlide) + 'px' }">
      <slot></slot>
    </div>
    <div class="slider-counter">
      <p><span class="count-current">{{currentSlide + 1}}</span><span class="count-separator">/</span><span class="count-total">{{ slidesCount }}</span></p>
    </div>

    <div class="carousel-nav">
      <btn icon="ri-arrow-left-s-line" @click="prevSlide"></btn>
      <btn icon="ri-arrow-right-s-line" @click="nextSlide"></btn>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    gapSize: {
      type: Number,
    },
    stepSize: {
      type: Number,
    },
  },

    data() {
    return {
      currentSlide: 0,
      slidesCount: 0,
      slideSize : 0

    };
  },
  mounted() {
    this.stepSize ? this.slideSize = this.stepSize : this.slideSize = this.$refs.carouselWrapper.clientWidth
    this.slidesCount = this.$refs.carouselWrapper.children.length;
   },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.slidesCount - 1) {
        return;
      }
      this.currentSlide++;
    },
    prevSlide() {
      if (this.currentSlide === 0) {
        return;
      }
      this.currentSlide--;
    }
  }
};
</script>


