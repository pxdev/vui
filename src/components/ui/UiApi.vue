<template>
  <div class="pd-y-30">
    <div class="mg-b-20">
      <h2 class="mg-b-5">API</h2>
      <p>component name : <span class="tx-danger">&lt;{{ name }}&gt;</span></p>
    </div>

    <table class="data-table border dark-header">
      <tr>
        <th>
          <div class="d-flex table-header ">Property</div>
        </th>
        <th>
          <div class="d-flex table-header ">Description</div>
        </th>
        <th>
          <div class="d-flex table-header ">Type</div>
        </th>
      </tr>

      <slot name="item"></slot>

    </table>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: ['name']


}
</script>
