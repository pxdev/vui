<template>
  <div>

    <flex position="sticky" class="header card shadow" style="top: 0; z-index: 10">
      <div class="container d-flex align-items-center justify-content-between">
        <router-link to="/ui" class="tx-16">Vue Starter Ui Kit</router-link>
        <theme-switcher></theme-switcher>
      </div>

    </flex>

    <section class="container d-flex align-items-start gap-30 pd-y-50">

      <div class="ui-nav card" style="min-width: 290px; position: sticky; top: 0">
        <ul class="tabbed-nav">

          <li><a class="pd-5 d-flex" href="#Carousel">Carousel</a></li>
          <li><a class="pd-5 d-flex" href="#Forms">Forms</a></li>
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
      <div class="ui-content">

        <div id="Carousel" class="card pd-50 gap-20 mg-b-30">
          <h3 >Carousel</h3>

        <carousel>
          <flex v-for="n in 10" :key="n" class="slide" style="width: 100%; flex-shrink: 0">
            <img style="width: 100%;" src="https://cdn.openai.com/API/images/guides/image_variation_output.webp" />
          </flex>
        </carousel>

        </div>

        <div id="Forms" class="card pd-50 gap-20 mg-b-30">

          <flex items="center" content="between" class="mg-b-20">
            <h3 >Input Fields</h3>
            <div>
              <dropdown
                  v-model="formStyle"
                  class=" lg"
                  :clearable="false"
                  :toggle-arrow="true"
                  placeholder="Form Style"
                  :items="formStyles"
              ></dropdown>
            </div>
          </flex>

          <grid>
            <grid-col :md="6" class="mg-b-20">

              <form-input :form-style="formStyle" size="sm" class="mg-b-20" required type="text" label="Form input text" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="password" label="Form input password" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="date" label="Form input date" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="date-range"  label="Form input date range" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="date" date-type="month" label="Form input date month" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="date" date-type="year" label="Form input date year" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="date" date-type="time" label="Form input date year" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="number" label="Form input number" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="textarea" label="Form textarea" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

            </grid-col>
            <grid-col :md="6" class="mg-b-20">

              <form-input :form-style="formStyle" range-percentage label="Form range percentage" class="mg-b-20" type="range" range-color="primary" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" range-percentage label="Form range percentage" class="mg-b-20" type="range" range-color="danger" :value="inputValue"
                          placeholder="Enter your value" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="radio" orient="horizontal" data-group="R1"
                          label="Form Check horizontal" :options="inputOptions" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="radio" orient="vertical" data-group="R2"
                          label="Form Check vertical" :options="inputOptions" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" size="lg" class="mg-b-20" type="checkbox" orient="vertical" data-group="c1"
                          label="Form Check vertical" :options="inputOptions" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" label="Form input switch normal" switch-color="danger" size="" type="switch" class="mg-b-20" :value="checkValue" @update:value="updateInputValue"/>
              <form-input :form-style="formStyle" label="Form input switch large" switch-color="danger" size="lg" type="switch" class="mg-b-20" :value="checkValue" @update:value="updateInputValue"/>

              <form-input :form-style="formStyle" label="Form input switch small" switch-color="primary" size="sm" type="switch" class="mg-b-20" :value="checkValue" @update:value="updateInputValue"/>


            </grid-col>
          </grid>

        </div>

        <div id="Modals" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Modals</h2>

          <modal id="confirm" size="sm">
            <delete-confirm record="Profile"></delete-confirm>
          </modal>


          <modal id="normal-modal" title="Basic Modal" subtitle="This is the content of the modal">
            <p>This is the content of the modal</p>
          </modal>

          <modal size="sm" id="sm-modal" title="Small Modal" subtitle="This is the content of the modal">
            <p>This is the content of the modal</p>
          </modal>

          <modal size="lg" id="lg-modal" title="Large Modal" subtitle="This is the content of the modal">
            <p>This is the content of the modal</p>
          </modal>


          <grid class="mg-b-30">

            <grid-col :md="4">
              <p class="mg-b-15">Delete Confirm Modal Example with the default size</p>
              <btn class="btn-danger" @click="openModal('confirm')">Delete Record</btn>
            </grid-col>


          </grid>


          <grid>
            <grid-col :md="4">
              <p class="mg-b-15">Small Modal Example with the default size</p>
              <btn class="btn-primary" @click="openModal('sm-modal')">Open Small Modal</btn>
            </grid-col>

            <grid-col :md="4">
              <p class="mg-b-15">Basic Modal Example with the default size</p>
              <btn class="btn-primary" @click="openModal('normal-modal')">Open Basic Modal</btn>
            </grid-col>
            <grid-col :md="4">
              <p class="mg-b-15">large Modal Example with the default size</p>
              <btn class="btn-primary" @click="openModal('lg-modal')">Open large Modal</btn>
            </grid-col>
          </grid>


        </div>

        <div id="Tables" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Tables</h2>

          <data-table :data="table" :headers="tableHeaders" :loading="isLoading" :export="true" :theme="TableTheme">
            <template #search>
              <btn type="primary" size="lg" icon="ri-add-line tx-18">New Data</btn>
            </template>
            <template #entry="entry">
              <td>
                <div class="d-flex gap-10 align-items-center">
                  <avatar class="rounded-circle" size="50" :src="entry.avatar"></avatar>
                  {{ entry.name }}
                </div>
              </td>
              <td>{{ entry.age }}</td>
              <td>{{ entry.location }}</td>
              <td>
                <btn icon="ri-edit-line tx-18"></btn>
                <btn icon="ri-delete-bin-line tx-18"></btn>
              </td>
            </template>
          </data-table>

          <ui-api name="data-table">
            <template #item>
              <tr>
                <td>:loading</td>
                <td>
                  <span class="tx-danger">true || false</span>
                  <btn @clicked="setLoading" class="btn-default-outline sm mg-x-15">Set Loading</btn>
                </td>
                <td>Boolean</td>
              </tr>
              <tr>
                <td>:records-per-page</td>
                <td>
                  Default <span class="tx-danger">8</span>
                </td>
                <td>Number</td>
              </tr>
              <tr>
                <td>:theme</td>
                <td>
                  <span class="tx-danger">zebra || border</span>
                  <btn @clicked="setRandomTable" class="btn-default-outline sm mg-x-15">Current Theme
                    {{ TableTheme }}
                  </btn>
                </td>
                <td>String</td>
              </tr>
              <tr>
                <td>:show-pagination</td>
                <td>
                  Default <span class="tx-danger">True</span>
                </td>
                <td>Boolean</td>
              </tr>
              <tr>
                <td>:show-total-records</td>
                <td>
                  Default <span class="tx-danger">True</span>
                </td>
                <td>Boolean</td>
              </tr>

              <tr>
                <td>:searchable</td>
                <td>
                  <span class="tx-danger">true || false</span>
                </td>
                <td>Boolean</td>
              </tr>

              <tr>
                <td>:data</td>
                <td>Array of Data <br> <span class="tx-danger">{name: 'Ahmed Amin', age: 36, location: 'Riyadh'},</span>
                </td>
                <td>Array</td>
              </tr>
              <tr>
                <td>:headers</td>
                <td>Array of headers <br> <span class="tx-danger">{text: 'Name', value: 'name', sortable: true}</span>
                </td>
                <td>Array</td>
              </tr>

              <tr>
                <td>:export</td>
                <td><span class="tx-danger">true || false</span></td>
                <td>Boolean</td>
              </tr>
            </template>
          </ui-api>

        </div>


        <div id="Buttons" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Buttons</h2>
          <div class="d-flex gap-10 mg-b-30 align-items-center demo-buttons flex-wrap" v-for="btn in buttons"
               :key="btn+'_btn'">
            <btn :type="btn.name" size="lg" class="lg">{{ btn.name }} large</btn>
            <btn :type="btn.name" size="lg" icon="ri-download-line tx-20">{{ btn.name }} with icon
            </btn>
            <btn :type="btn.name">{{ btn.name }} normal</btn>
            <btn :type="btn.name+'-outline'">{{ btn.name }} outline</btn>
            <btn :type="btn.name" :loading="true">{{ btn.name }} loading</btn>
            <btn disabled="disabled" :type="btn.name">{{ btn.name }} disabled</btn>
          </div>
        </div>

        <div id="Dropdown" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Dropdown </h2>
          <grid class="mg-b-30">
            <grid-col :md="6" class="form-group flex-fill">
              <label>Select Dropdown</label>
              <dropdown
                  v-model="selected"
                  class="form-dropdown lg"
                  :toggle-arrow="true"
                  placeholder="Dropdown Placeholder"
                  :items="links"
              ></dropdown>
            </grid-col>
            <grid-col :md="6" class="form-group flex-fill">
              <label>Select Dropdown Loading</label>
              <dropdown
                  v-model="selected"
                  class="form-dropdown lg"
                  :toggle-arrow="true"
                  placeholder="Dropdown Placeholder"
                  :items="links"
                  :loading="true"
              ></dropdown>
            </grid-col>
          </grid>
          <grid class="mg-b-30">
            <grid-col :md="6" class="form-group flex-fill">
              <label>Select Dropdown With Search</label>
              <search-dropdown
                  v-model="selected"
                  class="form-dropdown lg"
                  :toggle-arrow="true"
                  placeholder="Dropdown Placeholder"
                  :items="links"
              ></search-dropdown>
            </grid-col>
            <grid-col :md="6" class="form-group flex-fill">
              <label>Multi Select Dropdown With Search</label>
              <search-dropdown-multi
                  class="form-dropdown lg"
                  v-model="multiSelected"
                  :items-limit="2"
                  :toggle-arrow="true"
                  placeholder="Dropdown Placeholder"
                  :items="links"
              ></search-dropdown-multi>
            </grid-col>
          </grid>
          <grid class="mg-b-30">
            <grid-col :md="6" class="form-group flex-fill">
              <label>Select Dropdown With Search</label>
              <search-dropdown
                  v-model="selected"
                  class="form-dropdown"
                  :toggle-arrow="true"
                  placeholder="Dropdown Placeholder"
                  :items="links"
              ></search-dropdown>
            </grid-col>
            <grid-col :md="6" class="form-group flex-fill">
              <label>Multi Select Dropdown With Search</label>
              <search-dropdown-multi
                  class="form-dropdown"
                  v-model="multiSelected"
                  :items-limit="2"
                  :toggle-arrow="true"
                  placeholder="Dropdown Placeholder"
                  :items="links"
              ></search-dropdown-multi>
            </grid-col>
          </grid>
        </div>

        <div id="Avatars" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Avatars</h2>

          <div class="d-flex">
            <div class="flex-fill">
              <avatar-group>
                <avatar class="rounded-circle" size="50"
                        src="https://api.dicebear.com/5.x/personas/svg?seed=5"></avatar>
                <avatar class="rounded-circle" size="50"
                        src="https://api.dicebear.com/5.x/personas/svg?seed=6"></avatar>
                <avatar class="rounded-circle" size="50"
                        src="https://api.dicebear.com/5.x/personas/svg?seed=7"></avatar>
                <avatar class="rounded-circle" size="50"
                        src="https://api.dicebear.com/5.x/personas/svg?seed=8"></avatar>
                <avatar class="rounded-circle" size="50" title="+3"></avatar>
              </avatar-group>
            </div>
            <div class="flex-fill d-flex align-items-center gap-20">
              <avatar class="rounded" size="80" src="https://api.dicebear.com/5.x/personas/svg?seed=5"></avatar>
              <avatar class="rounded" size="80" title="AA"></avatar>
              <avatar class="rounded" size="50" src="https://api.dicebear.com/5.x/personas/svg?seed=7"></avatar>
              <avatar class="rounded" size="50" title="AA"></avatar>
              <avatar class="rounded-circle" size="50" title="AA"></avatar>
              <avatar class="rounded-circle" size="50" icon="ri-user-line"></avatar>
            </div>

          </div>
        </div>

        <div id="Grid" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Grid</h2>
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

        <div id="Autocomplete" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Autocomplete</h2>
          <div class="form-group">
            <label>Autocomplete Input</label>
            <autocomplete-input :endpoint="'https://jsonplaceholder.typicode.com/users'"
                                size="lg" :placeholder="'Search for your item'"></autocomplete-input>
          </div>
        </div>

        <div id="Splitter" class="card pd-50 gap-20 mg-b-30">

          <h2 class="mg-b-30">Splitter</h2>
          <splitter-x class="bd rounded mg-b-30" :left-column-size="30" :right-column-size="70">
            <template #left>
              <div class="pd-20">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration
                in
                some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                going
                to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarr
              </div>
            </template>
            <template #right>
              <splitter-y class="bd rounded" :top-column-size="30" :bottom-column-size="70" :init-height="500">
                <template #left>
                  <div class="pd-20">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in
                    some form, by injected humour, or randomised words which don't look even slightly believable. If you
                    are
                    going
                    to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarr
                  </div>
                </template>
                <template #right>
                  <div class="pd-20">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in
                    some form, by injected humour, or randomised words which don't look even slightly believable. If you
                    are
                    going
                    to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarr
                  </div>
                </template>
              </splitter-y>
            </template>
          </splitter-x>
        </div>

        <div id="Tabs" class="card pd-50 gap-20 mg-b-30">
          <h2 class="mg-b-30">Tabs</h2>
          <tabs class="mg-b-30" size="sm" :model="items" v-model:activeIndex="activeIndex">
            <tab-content :tab-index="0" :active-tab="activeIndex" class="">
              <h4>There are many variations</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="1" :active-tab="activeIndex" class="">
              <h4>Variations of passages</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="2" :active-tab="activeIndex" class="">
              <h4>Passages of Lorem</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="3" :active-tab="activeIndex" class="">
              <h4>Alteration in some form</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="4" :active-tab="activeIndex" class="">
              <h4>Lorem Ipsum available</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text

            </tab-content>
          </tabs>
          <tabs class="mg-b-30" size="md" :model="items" v-model:activeIndex="activeIndex">
            <tab-content :tab-index="0" :active-tab="activeIndex" class="">
              <h4>There are many variations</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="1" :active-tab="activeIndex" class="">
              <h4>Variations of passages</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="2" :active-tab="activeIndex" class="">
              <h4>Passages of Lorem</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="3" :active-tab="activeIndex" class="">
              <h4>Alteration in some form</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="4" :active-tab="activeIndex" class="">
              <h4>Lorem Ipsum available</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text

            </tab-content>
          </tabs>
          <tabs class="mg-b-30" size="lg" :model="items" v-model:activeIndex="activeIndex">
            <tab-content :tab-index="0" :active-tab="activeIndex" class="">
              <h4>There are many variations</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="1" :active-tab="activeIndex" class="">
              <h4>Variations of passages</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="2" :active-tab="activeIndex" class="">
              <h4>Passages of Lorem</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="3" :active-tab="activeIndex" class="">
              <h4>Alteration in some form</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="4" :active-tab="activeIndex" class="">
              <h4>Lorem Ipsum available</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text

            </tab-content>
          </tabs>
          <tabs class="mg-b-30" size="md" variant="horizontal" :model="items" v-model:activeIndex="activeIndex">
            <tab-content :tab-index="0" :active-tab="activeIndex" class="">
              <h4>There are many variations</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="1" :active-tab="activeIndex" class="">
              <h4>Variations of passages</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="2" :active-tab="activeIndex" class="">
              <h4>Passages of Lorem</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="3" :active-tab="activeIndex" class="">
              <h4>Alteration in some form</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="4" :active-tab="activeIndex" class="">
              <h4>Lorem Ipsum available</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text

            </tab-content>
          </tabs>
          <tabs class="mg-b-30" size="md" variant="horizontal reverse" :model="items" v-model:activeIndex="activeIndex">
            <tab-content :tab-index="0" :active-tab="activeIndex" class="">
              <h4>There are many variations</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="1" :active-tab="activeIndex" class="">
              <h4>Variations of passages</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="2" :active-tab="activeIndex" class="">
              <h4>Passages of Lorem</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="3" :active-tab="activeIndex" class="">
              <h4>Alteration in some form</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text
            </tab-content>
            <tab-content :tab-index="4" :active-tab="activeIndex" class="">
              <h4>Lorem Ipsum available</h4>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle
              of
              text

            </tab-content>
          </tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import {openModal, closeModal} from '@/components/ui/modal/modal';
import Dropdown from "@/components/ui/dropdown/Dropdown.vue";


export default {
  name: "index",
  components: {Dropdown},

  data() {

    return {
      formStyle: '',

      inputValue: '',
      checkValue: false,
      inputOptions: ['Option 1', 'Option 2', 'Option 3'],


      dateValue: null,
      dateRangeValue: ['2020-12-11', '2020-12-12'],

      isLoading: false,

      table: [
        {
          name: 'Ahmed Amin',
          age: 36,
          location: 'Riyadh',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bella'
        },
        {
          name: 'Omar Ahmed',
          age: 4,
          location: 'Jeddah',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Annie'
        },
        {
          name: 'Fatima Hassan',
          age: 28,
          location: 'Paris',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bandit'
        },
        {
          name: 'Ahmed Amin',
          age: 36,
          location: 'Riyadh',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bella'
        },
        {
          name: 'Omar Ahmed',
          age: 4,
          location: 'Jeddah',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Annie'
        },
        {
          name: 'Fatima Hassan',
          age: 28,
          location: 'Paris',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bandit'
        },
        {
          name: 'Ahmed Amin',
          age: 36,
          location: 'Riyadh',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bella'
        },
        {
          name: 'Omar Ahmed',
          age: 4,
          location: 'Jeddah',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Annie'
        },
        {
          name: 'Fatima Hassan',
          age: 28,
          location: 'Paris',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bandit'
        },
        {
          name: 'Ahmed Amin',
          age: 36,
          location: 'Riyadh',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bella'
        },
        {
          name: 'Omar Ahmed',
          age: 4,
          location: 'Jeddah',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Annie'
        },
        {
          name: 'Fatima Hassan',
          age: 28,
          location: 'Paris',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bandit'
        },
        {
          name: 'Ahmed Amin',
          age: 36,
          location: 'Riyadh',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bella'
        },
        {
          name: 'Omar Ahmed',
          age: 4,
          location: 'Jeddah',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Annie'
        },
        {
          name: 'Fatima Hassan',
          age: 28,
          location: 'Paris',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bandit'
        },
        {
          name: 'Ahmed Amin',
          age: 36,
          location: 'Riyadh',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bella'
        },
        {
          name: 'Omar Ahmed',
          age: 4,
          location: 'Jeddah',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Annie'
        },
        {
          name: 'Fatima Hassan',
          age: 28,
          location: 'Paris',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bandit'
        },
        {
          name: 'Ahmed Amin',
          age: 36,
          location: 'Riyadh',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bella'
        },
        {
          name: 'Fatima Hassan',
          age: 28,
          location: 'Paris',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bandit'
        },
        {
          name: 'Ahmed Amin',
          age: 36,
          location: 'Riyadh',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bella'
        },
        {
          name: 'Omar Ahmed',
          age: 4,
          location: 'Jeddah',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Annie'
        },
        {
          name: 'Fatima Hassan',
          age: 28,
          location: 'Paris',
          avatar: 'https://api.dicebear.com/5.x/personas/svg?seed=Bandit'
        },
      ],
      tableHeaders: [
        {text: 'Name', value: 'name', sortable: true},
        {text: 'Age', value: 'age', sortable: true},
        {text: 'Location', value: 'location', sortable: true},
        {text: 'Actions', value: 'Actions', sortable: false}
      ],
      isOpen: false,
      activeIndex: 0,
      selected: null,
      multiSelected: null,


      formStyles: [
        {name: 'normal'},
        {name: 'underline'},
        {name: 'floating-label'},
       ],

      links: [
        {name: 'Ahmed', icon: 'ri-map-pin-line'},
        {name: 'Ali', icon: 'ri-rocket-line'},
        {name: 'Omar', icon: 'ri-user-add-line'},
        {name: 'Fatima', icon: 'ri-gallery-upload-line'},
        {name: 'Mohamed', icon: 'ri-user-add-line'},
        {name: 'Hassan', icon: 'ri-user-add-line'},
        {name: 'Sami', icon: 'ri-user-add-line'},
        {name: 'Sara', icon: 'ri-headphone-line'},
        {name: 'Salma', icon: 'ri-user-add-line'},
      ],
      items: [
        {label: 'Home', icon: 'ri-mail-send-line'},
        {label: 'Calendar', icon: 'ri-calendar-2-line'},
        {label: 'Edit', icon: 'ri-edit-line'},
        {label: 'Documentation', icon: 'ri-mail-send-line'},
        {label: 'Settings', icon: 'ri-settings-3-line'}
      ],
      buttons: [
        {name: "default"},
        {name: "primary"},
        {name: "secondary"},
        {name: "warning"},
        {name: "success"},
        {name: "info"},
        {name: "danger"},
        {name: "gray"},
      ],
      tableThemes: ['zebra', 'border', 'border dark-header '],
      TableTheme: "zebra",

    }
  },

  methods: {
    openModal,
    closeModal,


    setLoading() {
      this.isLoading = !this.isLoading
    },

    setRandomTable() {
      this.TableTheme = this.tableThemes[Math.floor(Math.random() * this.tableThemes.length)];
    },

    updateInputValue(newValue) {
      console.log(newValue)
    }
  },


}
</script>

<style scoped>
.demo-buttons .btn {
  min-width: 200px;
}
</style>
