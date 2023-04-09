<template>
  <div class="splitter-container splitter-y" :style="`height: ${initHeight}px`">
    <div
      :class="{ 'is-resizing': isResizing }"
      class="splitter-pane left-pane d-flex align-items-center"
      tabindex="-1"
      :style="{ flexBasis: topPaneHeight + '%' }"
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
      :style="{ flexBasis: bottomPaneHeight + '%' }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'SplitterY',

  props: {
    topColumnSize: {
      type: Number,
      default: 50
    },
    initHeight: {
      type: Number
    },
    bottomColumnSize: {
      type: Number,
      default: 50
    }
  },

  setup(props) {
    const topPaneHeight = ref(props.topColumnSize);
    const bottomPaneHeight = ref(props.bottomColumnSize);
    const startY = ref(0);
    const isResizing = ref(false);
    const resizeFactor = ref(null);

    onMounted(() => {
      resizeFactor.value = (props.initHeight / 70);
    });

    function startResize(e) {
      startY.value = e.clientY;
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResize);
      isResizing.value = true;
    }

    function resize(e) {
      const delta = e.clientY - startY.value;
      let total = topPaneHeight.value + bottomPaneHeight.value;

      topPaneHeight.value += ((delta / total) * 100) / resizeFactor.value;
      bottomPaneHeight.value -= ((delta / total) * 100) / resizeFactor.value;
      startY.value = e.clientY;
      isResizing.value = true;
    }

    function stopResize() {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
      isResizing.value = false;
    }

    return {
      topPaneHeight,
      bottomPaneHeight,
      startResize,
      isResizing
    };
  }
}
</script>
