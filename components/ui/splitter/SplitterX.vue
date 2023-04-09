<template>
  <div class="splitter-container splitter-x">
    <div
      :class="{ 'is-resizing': isResizing }"
      class="splitter-pane left-pane d-flex align-items-center"
      tabindex="-1"
      :style="{ flexBasis: leftPaneWidth + '%' }"
    >
      <slot name="left"></slot>
    </div>
    <div
      :class="{ 'is-resizing': isResizing }"
      class="splitter-gutter"
      @mousedown="startResize"
      tabindex="-1"
    >
      <div class="splitter-handle"></div>
    </div>
    <div
      :class="{ 'is-resizing': isResizing }"
      class="splitter-pane right-pane d-flex align-items-center"
      :style="{ flexBasis: rightPaneWidth + '%' }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'

export default {
  name: 'SplitterX',

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

  setup(props) {
    const leftPaneWidth = ref(props.leftColumnSize)
    const rightPaneWidth = ref(props.rightColumnSize)
    const startX = ref(0)
    const isResizing = ref(false)

    const startResize = (e) => {
      startX.value = e.clientX
      document.addEventListener('mousemove', resize)
      document.addEventListener('mouseup', stopResize)
      isResizing.value = true
    }

    const resize = (e) => {
      const delta = e.clientX - startX.value

      let total = leftPaneWidth.value + rightPaneWidth.value

      leftPaneWidth.value += ((delta / total) * 100) / 15
      rightPaneWidth.value -= ((delta / total) * 100) / 15
      startX.value = e.clientX
      isResizing.value = true
    }

    const stopResize = () => {
      document.removeEventListener('mousemove', resize)
      document.removeEventListener('mouseup', stopResize)
      isResizing.value = false
    }

    return {
      leftPaneWidth,
      rightPaneWidth,
      startX,
      isResizing,
      startResize,
      resize,
      stopResize
    }
  }
}
</script>

<style></style>
