<template>

  <div>

    <demo></demo>


    <div class="header pd-20 tx-light" style="background: linear-gradient(to right, #01a7ff, #6d74ed)">
      <div class="container d-flex align-items-center justify-content-between">
        <router-link to="/ui" class="tx-16 tx-light">Vue Starter Ui Kit</router-link>
        <flex>
          <theme-switcher></theme-switcher>
          <language-switcher></language-switcher>
        </flex>
      </div>

    </div>


    <section class="container d-flex align-items-start gap-30 pd-y-50">

      <div class="ui-nav card" style="min-width: 290px; position: sticky; top: 0">
        <ul class="tabbed-nav">
          <li><a class="pd-5 d-flex" href="#DatePicker">Forms</a></li>
          <li><a class="pd-5 d-flex" href="#Modals">Modals</a></li>

          <li><a class="pd-5 d-flex" href="#Tables">Tables</a></li>
          <li><a class="pd-5 d-flex" href="#Buttons">Buttons</a></li>
          <li><a class="pd-5 d-flex" href="#Dropdown">Dropdown</a></li>
          <li><a class="pd-5 d-flex" href="#Avatars">Avatars</a></li>
          <li><a class="pd-5 d-flex" href="#Grid">Grid</a></li>
          <li><a class="pd-5 d-flex" href="#Autocomplete">Autocomplete</a></li>
          <li><a class="pd-5 d-flex" href="#Splitter">Splitter</a></li>
          <li><a class="pd-5 d-flex" href="#Tabs">Tabs</a></li>
        </ul>
      </div>
      <div class="ui-content flex-fill bd-l">


        <div id="Dropdown" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Dropdown </h2>

          <doc-code title="component name">
            &lt;dropdown&gt;
          </doc-code>

          <grid class="mg-b-30">
            <grid-col :md="6" class="form-group flex-fill">
              <label>Normal Dropdown</label>
              <dropdown
                  v-model="selected"
                  :loading="true"
                  class="form-dropdown lg"
                  :toggle-arrow="true"
                  :searchable="true"
                  placeholder="Dropdown Placeholder"
                  :items="links"
              ></dropdown>

            </grid-col>
            <grid-col :md="6" class="form-group flex-fill">
              <label>Select Dropdown Loading</label>
              <search-dropdown-multi class="form-dropdown lg"
                                     :toggle-arrow="true"
                                     :searchable="true"
                                     placeholder="Dropdown Placeholder"
                                     :items="links"
                                     :items-limit="2"
              ></search-dropdown-multi>

            </grid-col>
          </grid>


        </div>



        <button @click="modalVisible = true">Show Modal</button>
        <modal title="test" size="" v-model="modalVisible">test</modal>


      </div>
    </section>


  </div>

</template>

<script>
import {ref, reactive} from 'vue';
import DocCode from "~/components/ui/docs/DocCode.vue";

definePageMeta({layout: 'ui'})
export default {
  name: "index",
  components: {DocCode},

  setup() {

    const modalVisible = ref(false);

    const selected = ref("");


    const links = reactive(
        [
          {name: 'Ahmed', icon: 'ri-map-pin-line'},
          {name: 'Ali', icon: 'ri-rocket-line'},
          {name: 'Omar', icon: 'ri-user-add-line'},
          {name: 'Fatima', icon: 'ri-gallery-upload-line'},
          {name: 'Mohamed', icon: 'ri-user-add-line'},
          {name: 'Hassan', icon: 'ri-user-add-line'},
          {name: 'Sami', icon: 'ri-user-add-line'},
          {name: 'Sara', icon: 'ri-headphone-line'},
          {name: 'Salma', icon: 'ri-user-add-line'},
        ]
    );

    return {
      modalVisible, links, selected,
    }
  }


}
</script>

<style scoped>

</style>
