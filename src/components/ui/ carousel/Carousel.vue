<template>

  <div class="carousel" ref="carousel">



    <div class="carousel-wrap" :style="`width: ${carouselClientWidth}px`">
      <div class="carousel-pane"
           :style="{ gap : gap+'px',  transform: 'translateX(' + ((-eachSlideWidth) * currentSlide) + 'px', width: (eachSlideWidth * slidesCount)  + 'px' }">
        <flex class="slide" v-for="(slide, index) in slides" :style="`width: ${eachSlideWidth}px`">
          <slot name="slide" v-bind="slide">{{ index + 1 }}</slot>
        </flex>
      </div>
    </div>

    <flex fill content="center" items="center" class="carousel-nav mg-t-10" gap="15">
      <btn icon="ri-arrow-left-s-line" @click.prevent="prevSlide"></btn>
      <div class="slider-counter">
        <p><span class="count-current">{{ currentSlide + 1 }}</span><span class="count-separator">/</span><span
            class="count-total">{{ slidesCount }}</span></p>
      </div>
      <btn icon="ri-arrow-right-s-line" @click.prevent="nextSlide"></btn>
    </flex>




  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
    },
    slideWidth: {
      type: Number,
    },
    gap: {
      type: Number,
    },
  },
  data() {
    return {
      carouselClientWidth: 0,
      currentSlide: 0,
      slidesCount: 0,
      eachSlideWidth: 0
    };
  },

  mounted() {
    this.slidesCount = this.slides.length
    this.carouselClientWidth = this.$refs.carousel.clientWidth
    this.slideWidth ? this.eachSlideWidth = this.slideWidth : this.eachSlideWidth = this.carouselClientWidth

  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.slidesCount - 1) {
        this.currentSlide = -1;
      }
      this.currentSlide++;
    },
    prevSlide() {
      if (this.currentSlide === 0) {
        return
      }
      this.currentSlide--;
    }
  }

};
</script>

