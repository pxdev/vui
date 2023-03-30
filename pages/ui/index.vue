<template>

  <div>


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

      <div class="card" style="min-width: 290px; position: sticky; top: 0">
        <div class="ui-nav">
          <h3>Core</h3>
          <ul>
            <li><a href="#Grid">Grid System</a></li>
            <li><a href="#Typography">Typography</a></li>
           </ul>
        </div>
      </div>
      <div class="ui-content flex-fill bd-l">

        <div id="Grid" class="card pd-50 gap-20 mg-b-30">

          <h2 class="mg-b-30">Grid System</h2>

          <p>Create basic grid layout using columns.</p>

          <doc-code>
            &ltgrid&gt <br>
            &nbsp; &ltgrid-col :md="6"&gt&lt/grid-col&gt<br>
            &lt/grid&gt
          </doc-code>

          <grid>
            <grid-col :md="6">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-6</div>
            </grid-col>
            <grid-col :md="6">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-6</div>
            </grid-col>
            <grid-col :md="7">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-7</div>
            </grid-col>
            <grid-col :md="5">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-5</div>
            </grid-col>
            <grid-col :md="8">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-8</div>
            </grid-col>
            <grid-col :md="4">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-4</div>
            </grid-col>
            <grid-col :md="9">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-9</div>
            </grid-col>
            <grid-col :md="3">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-3</div>
            </grid-col>
            <grid-col :md="10">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-10</div>
            </grid-col>
            <grid-col :md="2">
              <div class="bg-gray pd-5 tx-center mg-b-20">col-2</div>
            </grid-col>
          </grid>
        </div>
        <div id="Typography" class="card pd-50 gap-20 mg-b-30">

          <h2 class="mg-b-30">Typography</h2>


        </div>


        <div id="Forms" class="card pd-20 mg-20 gap-20">
          <h2 class="mg-b-30">Forms</h2>
          <grid class="mg-b-30">
            <grid-col :md="12">
              <h3 class="mg-b-20">Range Sliders</h3>
            </grid-col>
            <grid-col :md="6">
              <form-input range-percentage class="mg-b-20" type="range" range-color="primary" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
            </grid-col>
            <grid-col :md="6">
              <form-input range-percentage class="mg-b-20" type="range" range-color="secondary" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
            </grid-col>
            <grid-col :md="6">
              <form-input range-percentage class="mg-b-20" type="range" range-color="danger" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
            </grid-col>
            <grid-col :md="6">
              <form-input range-percentage class="mg-b-20" type="range" range-color="warning" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
            </grid-col>
            <grid-col :md="6">
              <form-input range-percentage class="mg-b-20" type="range" range-color="info" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
            </grid-col>
            <grid-col :md="6">
              <form-input range-percentage class="mg-b-20" type="range" range-color="success" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
            </grid-col>
          </grid>
          <grid>
            <grid-col :md="6" class="mg-b-20">
              <h3 class="mg-b-20">Input Fields</h3>
              <form-input size="sm" class="mg-b-20" required type="text" label="Form input text" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
              <form-input size="lg" class="mg-b-20" type="password" label="Form input number" :value="inputValue"
                          placeholder="Enter your password" @update:value="updateInputValue"/>
              <form-input size="sm" class="mg-b-20" type="number" label="Form input number" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
              <form-input size="lg" class="mg-b-20" type="textarea" label="Form textarea" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>
              <form-input size="lg" class="mg-b-20" type="radio" orient="horizontal" data-group="R1"
                          label="Form Check horizontal" :options="inputOptions" @update:value="updateInputValue"/>
              <form-input size="lg" class="mg-b-20" type="radio" orient="vertical" data-group="R2"
                          label="Form Check vertical" :options="inputOptions" @update:value="updateInputValue"/>
              <form-input size="lg" class="mg-b-20" type="checkbox" orient="vertical" data-group="c1"
                          label="Form Check vertical" :options="inputOptions" @update:value="updateInputValue"/>

            </grid-col>

          </grid>
        </div>


        <div id="Dropdown" class="card pd-20 mg-20 gap-20">
          <h2 class="mg-b-30">Dropdown </h2>
          <grid class="mg-b-30">
            <grid-col :md="6" class="form-group flex-fill">
              <label>Normal Dropdown</label>
              <dropdown
                  v-model="selected"
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


        <div id="Modals" class="card pd-20 mg-20 gap-20">
          <h2 class="mg-b-30">Modals</h2>
          <btn color="primary" @click="modalVisible = true">Show Modal</btn>
          <modal title="test" size="" v-model="modalVisible">test</modal>
        </div>
        <div id="Buttons" class="card pd-20 mg-20 gap-20">
          <h2 class="mg-b-30">Buttons</h2>

          <div class="d-flex gap-10 mg-b-30 align-items-center demo-buttons flex-wrap" v-for="btn in buttons"
               :key="btn+'_btn'">
            <btn :color="btn.name" size="lg" class="lg">{{ btn.name }} large</btn>
            <btn :color="btn.name" size="lg" icon="ri-download-line tx-20">{{ btn.name }} with icon
            </btn>
            <btn :color="btn.name">{{ btn.name }} normal</btn>
            <btn :color="btn.name+'-outline'">{{ btn.name }} outline</btn>
            <btn :color="btn.name" :loading="true">{{ btn.name }} loading</btn>
            <btn disabled="disabled" :type="btn.name">{{ btn.name }} disabled</btn>
          </div>

        </div>


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
  components: { DocCode},

  setup() {

    const modalVisible = ref(false);

    const selected = ref("");
    const inputValue = ref("");
    const inputOptions = reactive(['Option 1', 'Option 2', 'Option 3']);
    const dateValue = ref(null);

    const dateRangeValue = ref('');
    const isLoading = ref(false);


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

    const buttons = reactive(
        [
          {name: "default"},
          {name: "primary"},
          {name: "secondary"},
          {name: "warning"},
          {name: "success"},
          {name: "info"},
          {name: "danger"},
          {name: "gray"},
        ],
    )


    const updateInputValue = (newValue) => {
      console.log(newValue)
    }


    return {
      updateInputValue,
      modalVisible, links, selected, buttons, inputValue, inputOptions, dateValue, dateRangeValue, isLoading
    }
  }


}
</script>

<style scoped>
.btn {
  min-width: 200px;
}
</style>
