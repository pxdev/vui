<template>
  <div>

    <ClientOnly>
      <btn @click="(e) => toggleDark()">
        <span class="ri-sun-fill" v-if="isDark"></span>
        <span class="ri-moon-fill" v-else ></span>
      </btn>
    </ClientOnly>

  </div>
</template>

<script>


export default {

}
</script>


