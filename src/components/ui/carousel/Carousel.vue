<template>
  {{slidesCount}}
  <div class="carousel">
    <div class="carousel-wrapper" :style="{ transform: 'translateX(' + (-100 * currentSlide) + '%)' }">
      <slot></slot>
    </div>
    <button class="carousel-nav" @click="prevSlide">&lt;</button>
    <button class="carousel-nav" @click="nextSlide">&gt;</button>
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
    console.log(this.$slots.default)
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.slidesCount - 1) {
        return;
      }
      this.currentSlide += 1;
    },
    prevSlide() {
      if (this.currentSlide === 0) {
        return;
      }
      this.currentSlide -= 1;
    }
  }
};
</script>

<style>
.carousel {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: none;
  font-size: 30px;
  cursor: pointer;
}

.carousel-nav:hover {
  background-color: #ccc;
}

.carousel-nav:first-of-type {
  left: 0;
}

.carousel-nav:last-of-type {
  right: 0;
}


</style>
