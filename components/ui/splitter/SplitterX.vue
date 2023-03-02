<template>
   <div class="splitter-container splitter-x">
    <div :class="{'is-resizing' : isResizing }" class="splitter-pane left-pane d-flex align-items-center" tabindex="-1"
         :style="{ flexBasis: leftPaneWidth + '%' }">
      <slot name="left"></slot>
    </div>
    <div :class="{'is-resizing' : isResizing }" class="splitter-gutter" @mousedown="startResize" tabindex="-1">
      <div class="splitter-handle"></div>
    </div>
    <div :class="{'is-resizing' : isResizing }" class="splitter-pane right-pane d-flex align-items-center"
         :style="{ flexBasis: rightPaneWidth + '%' }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitterX",

  props: {
    leftColumnSize: {
      type: Number,
      default: 50
    },
    rightColumnSize: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      leftPaneWidth: this.leftColumnSize,
      rightPaneWidth: this.rightColumnSize,
      startX: 0,
      isResizing: false
    }
  },
  methods: {
    startResize(e) {
      this.startX = e.clientX
      document.addEventListener('mousemove', this.resize)
      document.addEventListener('mouseup', this.stopResize)
      this.isResizing = true
    },
    resize(e) {


      const delta = e.clientX - this.startX

      let total = this.leftPaneWidth + this.rightPaneWidth

      this.leftPaneWidth += delta / total * 100 / 15
      this.rightPaneWidth -= delta / total * 100 / 15
      this.startX = e.clientX
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

<style>







</style>
