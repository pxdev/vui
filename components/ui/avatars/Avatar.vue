<template>
  <div class="avatar d-flex justify-content-center align-items-center"
       :style="{height: size+'px', width: size+'px', backgroundImage: `url('${src}')`}">

    <span v-if="title" class="flex-fill avatar-text" :style="{ fontSize: size/3 +'px'}">{{ title }}</span>

    <i v-if="icon" class="avatar-ico" :class="icon" :style="{ fontSize: size/3 +'px'}"></i>

  </div>
</template>

<script>

export default {
  name: "Avatar",
  props: {
    size: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },

  }


}
</script>

<style scoped>

</style>
