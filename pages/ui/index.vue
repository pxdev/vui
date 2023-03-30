<template>

  <va-navbar
      color="#282F69"
      style="height: 100px;"
  >
    <template #left>
      <va-navbar-item class="logo">
        LOGO
      </va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>Dashboard</va-navbar-item>
      <va-navbar-item>Reports</va-navbar-item>
      <va-navbar-item>Users</va-navbar-item>
      <va-navbar-item>
        <va-icon name="mdi-magnify" />
      </va-navbar-item>
      <va-navbar-item>
        <va-icon name="mdi-account-circle-outline" />
      </va-navbar-item>
    </template>
  </va-navbar>

</template>

<script>


definePageMeta({layout: 'ui'})
export default {
  name: "index",

  setup() {


  }


}
</script>

<style scoped>

</style>
