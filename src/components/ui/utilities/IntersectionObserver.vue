<template>
  <div ref="observer">

<!--    <IntersectionObserver :handler="onIntersect" :options="{threshold: [0, 0.5, 1.0]}">-->
<!--      <p>This element will be observed for intersections</p>-->
<!--    </IntersectionObserver>-->


    <slot />
  </div>
</template>

<script>
export default {
  name: 'IntersectionObserver',
  props: {
    handler: {
      type: Function,
      required: true
    },
    options: {
      type: Object,
      default: () => ({ threshold: [0, 0.5, 1.0] })
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handler, this.options);
    this.observer.observe(this.$refs.observer);
  },
  beforeDestroy() {
    this.observer.disconnect();
  }
};
</script>
