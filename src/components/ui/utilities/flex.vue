<template>
  <div
      class="d-flex"
      :class="`
      ${gap ? 'gap-' + gap : ''}
      ${bg ? 'bg-' + bg : ''}
      ${position ? 'position-' + position : ''}
      ${direction ? 'flex-' + direction : ''}
      ${wrap ? 'flex-wrap' : ''}
      ${fill ? 'flex-fill' : ''}
      ${shrink ? 'flex-shrink-' + shrink : ''}
      ${content ? 'justify-content-' + content : ''}
      ${items ? 'align-items-' + items : ''}
        `"
      :style="`width:${width}`"
  >
    <slot/>
  </div>
</template>
<script>
export default {
  name: "flex",
  props: {
    bg: {
      type: String,
    },
    position: {
      type: String,
    },
    direction: {
      type: String,
      default: 'row',
    },
    content: {
      type: String,
     },
    items: {
      type: String,
     },
    wrap: {
      type: Boolean,
      default: false,
    },
    shrink: {
      type: String,
     },
    fill: {
      type: Boolean,
      default: false,
    },
    gap: {
      type: String,
     },
    width: {
      type: String,
      default: ''
    },
  }
}
</script>

