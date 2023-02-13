<template>

  <p>{{ currentSlide }}</p>
  <p>{{ slidesCount }}</p>

  <div class="carousel">
    <div class="carousel-wrapper" ref="carouselWrapper" :style="{ transform: 'translateX(' + (-100 * currentSlide) + '%)' }">
      <slot></slot>
    </div>
    <div class="carousel-nav">
      <button @click="prevSlide">&lt;</button>
      <button @click="nextSlide">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slidesCount: 0
    };
  },
  mounted() {
    this.slidesCount = this.$refs.carouselWrapper.children.length
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

<style>
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s;
}
</style>
