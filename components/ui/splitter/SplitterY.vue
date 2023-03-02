<template>
   <div class="splitter-container splitter-y" :style='`height: ${initHeight}px`'>
    <div :class="{'is-resizing' : isResizing }" class="splitter-pane left-pane d-flex align-items-center" tabindex="-1"
         :style="{ flexBasis: topPaneHeight + '%' }">
      <slot name="left"></slot>
    </div>
    <div :class="{'is-resizing' : isResizing }" class="splitter-gutter" @mousedown="startResize" tabindex="-1">
      <div class="splitter-handle"></div>
    </div>
    <div :class="{'is-resizing' : isResizing }" class="splitter-pane right-pane d-flex align-items-center"
         :style="{ flexBasis: bottomPaneHeight + '%' }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitterY",

  props: {
    topColumnSize: {
      type: Number,
      default: 50
    },

    initHeight: {
      type: Number,
     },


    bottomColumnSize: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      topPaneHeight: this.topColumnSize,
      bottomPaneHeight: this.bottomColumnSize,
      startY: 0,
      isResizing: false,
      resizeFactor : null
    }
  },
  mounted() {
    this.resizeFactor = this.initHeight / 70
  },
  methods: {
    startResize(e) {
      this.startY = e.clientY
      document.addEventListener('mousemove', this.resize)
      document.addEventListener('mouseup', this.stopResize)
      this.isResizing = true
    },
    resize(e) {

      const delta = e.clientY - this.startY

      let total = this.topPaneHeight + this.bottomPaneHeight

      this.topPaneHeight += delta / total * 100 / this.resizeFactor
      this.bottomPaneHeight -= delta / total * 100 / this.resizeFactor
      this.startY = e.clientY
      this.isResizing = true

    },
    stopResize() {
      document.removeEventListener('mousemove', this.resize)
      document.removeEventListener('mouseup', this.stopResize)
      this.isResizing = false
    }
  }
}
</script>


