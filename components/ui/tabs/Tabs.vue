<template>

  <nav ref="tabs" class="data-tabs" :class="[ size, variant]">
    <ul ref="nav" class="tabbed-nav">
      <li :class="{'active': i === d_activeIndex}" v-for="(item, i) of model" :key="item+i+'_key'">
        <a ref="navLinks" href="#" class="nav-link" @click.prevent="onItemClick(i, $event)">
          <i :class="item.icon"></i>
          <span class="nav-text">{{ item.label }}</span>
        </a>
      </li>
      <li v-if="variant === 'horizontal' || variant === 'horizontal reverse' " class="tabs-line" :style="`top:${linePosition}px; height: ${lineHeight}px`"></li>
      <li v-else class="tabs-line" :style="`left:${linePosition}px; width: ${lineWidth}px`"></li>
    </ul>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: "Tabs",
  emits: ['update:activeIndex'],
  props: {
    model: {
      type: Array,
      default: null
    },
    activeIndex: {
      type: Number,
      default: 0
    },

    variant: {
      type: String,
      default: null
    },

    size: {
      type: String,
      default: null
    },


  },
  data() {
    return {
      d_activeIndex: this.activeIndex,
      linePosition: null,
      lineWidth: null,
      lineHeight: null,
    };
  },
  watch: {

    activeIndex(newValue) {
      this.d_activeIndex = newValue;
    }

  },

  mounted() {
    this.$refs.navLinks[this.activeIndex].click()
  },

  methods: {

    onItemClick(index, e) {
      this.$emit('update:activeIndex', index);


      const target = e.target;

      const parentRect = this.$refs.tabs.getBoundingClientRect();

      if (this.variant === 'horizontal' || this.variant === 'horizontal reverse') {
        const itemRect = target.getBoundingClientRect();
        const lineHeight = target.getBoundingClientRect().height;
        this.linePosition = (itemRect.y - parentRect.y)
        this.lineHeight = lineHeight

      } else {
        const itemRect = target.getBoundingClientRect();
        const itemWidth = target.getBoundingClientRect().width;
        this.linePosition = (itemRect.x - parentRect.x)
        this.lineWidth = itemWidth
      }


    },


  },


};
</script>
