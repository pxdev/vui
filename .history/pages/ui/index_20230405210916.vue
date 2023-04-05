<template>
  <div>


    <flex class="header op-9 pd-20 bg-primary tx-light shadow" position="sticky" style="top: 0; z-index: 100">
      <div class="container d-flex align-items-center justify-content-between">
        <h3><router-link class="tx-light" to="/ui">Vue Starter Ui Kit</router-link></h3>
        <flex>
          <theme-switcher></theme-switcher>
          <language-switcher></language-switcher>
        </flex>
      </div>

    </flex>


    <section class="container d-flex align-items-start gap-30 pd-y-50">

      <div class="card" style="min-width: 290px; position: sticky; top: 100px">
        <div class="ui-nav">
          <h3>Form Components</h3>
          <ul>
            <li><a href="#Forms">Forms</a></li>
            <li><a href="#Dropdown">Dropdown</a></li>
            <li><a href="#Buttons">Buttons</a></li>
          </ul>
        </div>

        <div class="ui-nav">
          <h3>Ui Components</h3>
          <ul>
            <li><a href="#Modals">Modals</a></li>
            <li><a href="#Alerts">Alerts</a></li>
            <li><a href="#Avatars">Avatars</a></li>
            <li><a href="#Splitter">Splitter</a></li>
            <li><a href="#Tabs">Tabs</a></li>

          </ul>
        </div>

        <div class="ui-nav">
          <h3>Core</h3>
          <ul>
            <li><a href="#Grid">Grids</a></li>
          </ul>
        </div>


      </div>
      <div class="ui-content flex-fill bd-l">

        <div id="Forms" class="card pd-20 mg-20 gap-20">
          <ContentDoc class="content-doc" path="/ui/forms" />
          <grid>
            <grid-col md="6">
              <div class="bd mg-b-25 pd-30 rounded">
                <form-input-text v-for="n in sizes" :key="n" class="mg-b-15" :label="`Input Text ${n.name}`"
                  v-model="inputValue" :size="n.name" @update:modelValue="updateInputValue"></form-input-text>
              </div>

              <div class="bd mg-b-25 pd-30 rounded">
                <form-check v-for="n in sizes" class="mg-b-15" :key="n" :label="`Input Check ${n.name}`"
                  v-model="formSwitch" :size="n.name" @update:modelValue="updateInputValue"></form-check>
              </div>
              <div class="bd mg-b-25 pd-30 rounded">
                <form-switch v-for="n in sizes" :key="n" :label="`Toggle Switch ${n.name}`" class="mg-b-15"
                  switch-color="primary" v-model="formSwitch" :size="n.name"
                  @update:modelValue="updateInputValue"></form-switch>
              </div>
              <div class="bd mg-b-25 pd-30 rounded">
                <form-input-number v-for="n in sizes" :key="n" class="mg-b-15" :label="`Input Number ${n.name}`"
                  v-model="rangeValue" :size="n.name" @update:modelValue="updateInputValue"></form-input-number>
              </div>


            </grid-col>
            <grid-col md="6">
              <div class="bd mg-b-25 pd-30 rounded">
                <form-input-password v-for="n in sizes" :key="n" class="mg-b-15" :label="`Input Password ${n.name}`"
                  v-model="inputValue" :size="n.name" @update:modelValue="updateInputValue"></form-input-password>
              </div>
              <div class="bd mg-b-25 pd-30 rounded">
                <form-textarea class="mg-b-15" adjust-to-text v-model="inputValue" label="Adjust to text Textarea"
                  placeholder="Enter your value" @update:modelValue="updateInputValue"></form-textarea>
                <form-textarea v-for="n in sizes" class="mg-b-15" :key="n" :label="`Input Text ${n.name}`"
                  v-model="rangeValue" :size="n.name" @update:modelValue="updateInputValue"></form-textarea>
              </div>
              <div class="bd mg-b-25 pd-30 rounded">
                <form-range class="mg-b-15" range-percentage range-color="primary" v-model="rangeValue"
                  @update:modelValue="updateInputValue"></form-range>
              </div>
            </grid-col>
          </grid>
        </div>
        <div id="Dropdown" class="card pd-20 mg-20 gap-20">
          <ContentDoc class="content-doc" path="/ui/dropdown" />
          <grid class="mg-b-30">
            <grid-col :md="4" class="form-group flex-fill">
              <label>Normal Dropdown</label>
              <dropdown v-model="selected" class="form-dropdown lg" :toggle-arrow="true"
                placeholder="Dropdown Placeholder" :items="links"></dropdown>
            </grid-col>
            <grid-col :md="4" class="form-group flex-fill">
              <label>Normal Dropdown With Search</label>
              <dropdown v-model="selected" class="form-dropdown lg" :toggle-arrow="true" :searchable="true"
                placeholder="Dropdown Placeholder" :items="links"></dropdown>
            </grid-col>
            <grid-col :md="4" class="form-group flex-fill">
              <label>Normal Dropdown With Search</label>
              <dropdown v-model="selected" class="form-dropdown lg" :loading="true" :toggle-arrow="true"
                :searchable="true" placeholder="Dropdown Placeholder" :items="links"></dropdown>
            </grid-col>
            <grid-col :md="4" class="form-group flex-fill">
              <label>Multi Select Dropdown</label>
              <search-dropdown-multi class="form-dropdown lg" :toggle-arrow="true" placeholder="Dropdown Placeholder"
                :items="links" :items-limit="2"></search-dropdown-multi>
            </grid-col>
            <grid-col :md="4" class="form-group flex-fill">
              <label>Multi Select Dropdown</label>
              <search-dropdown-multi class="form-dropdown lg" :toggle-arrow="true" :searchable="true"
                placeholder="Dropdown Placeholder" :items="links" :items-limit="2"></search-dropdown-multi>
            </grid-col>
            <grid-col :md="4" class="form-group flex-fill">
              <label>Multi Select Dropdown Loading</label>
              <search-dropdown-multi class="form-dropdown lg" :toggle-arrow="true" :searchable="true" :loading="true"
                placeholder="Dropdown Placeholder" :items="links" :items-limit="2"></search-dropdown-multi>
            </grid-col>
          </grid>
        </div>
        <div id="Buttons" class="card pd-20 mg-20 gap-20">
          <ContentDoc class="content-doc" path="/ui/buttons" />
          <div class="d-flex gap-10 mg-b-30 align-items-center demo-buttons flex-wrap" v-for="btn in buttons"
            :key="btn + '_btn'">
            <btn :color="btn.name" size="lg">{{ btn.name }} large</btn>
            <btn :color="btn.name" size="lg" icon="ri-download-line tx-20">{{ btn.name }} with icon
            </btn>
            <btn :color="btn.name">{{ btn.name }} normal</btn>
            <btn :color="btn.name + '-outline'">{{ btn.name }} outline</btn>
            <btn :color="btn.name" :loading="true">{{ btn.name }} loading</btn>
            <btn disabled="disabled" :type="btn.name">{{ btn.name }} disabled</btn>
          </div>

        </div>
        <!-- / form components -->

        <div id="Modals" class="card pd-20 mg-20 gap-20">
          <ContentDoc class="content-doc" path="/ui/modals" />
          <flex gap="10">
            <btn color="primary" @click="modal2 = true">Show Modal</btn>
            <btn color="danger-outline" @click="modal1 = true">Delete Modal</btn>

          </flex>
          <modal v-model="modal1">
            <delete-modal record="Users"></delete-modal>
            <div class="d-flex gap-15 justify-content-center">
              <btn color="primary-outline" size="lg" class="pd-x-40" @click="modal1 = false">No</btn>
              <btn color="danger" size="lg" class="pd-x-40" @click="modal1 = false">Yes, Delete</btn>
            </div>
          </modal>
          <modal title="test" v-model="modal2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries
          </modal>
        </div>
        <div id="Alerts" class="card pd-20 mg-20 gap-20">

          <ContentDoc class="content-doc" path="/ui/alerts" />

          <alert color="info" icon="ri ri-alert-line">Sorry you don't have a permission</alert>
          <alert color="warning" icon="ri ri-alert-line">Sorry you don't have a permission</alert>
          <alert color="danger" icon="ri ri-alert-line">Sorry you don't have a permission</alert>

        </div>
        <div id="Avatars" class="card pd-20 mg-20 gap-20">
          <ContentDoc class="content-doc" path="/ui/avatars" />

          <div class="d-flex">
            <div class="flex-fill">
              <avatar-group>
                <avatar class="rounded-circle" size="50" src="https://api.dicebear.com/5.x/personas/svg?seed=5"></avatar>
                <avatar class="rounded-circle" size="50" src="https://api.dicebear.com/5.x/personas/svg?seed=6"></avatar>
                <avatar class="rounded-circle" size="50" src="https://api.dicebear.com/5.x/personas/svg?seed=7"></avatar>
                <avatar class="rounded-circle" size="50" src="https://api.dicebear.com/5.x/personas/svg?seed=8"></avatar>
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
        <div id="Splitter" class="card pd-20 mg-20 gap-20">
          <ContentDoc class="content-doc" path="/ui/splitters" />
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
        <div id="Tabs" class="card pd-20 mg-20 gap-20">


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

        <!-- / Ui components -->

        <div id="Grid" class="card pd-50 gap-20 mg-b-30">
          <ContentDoc class="content-doc" path="/ui/grid" />
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
        <!-- / Core components -->

      </div>
    </section>




  </div>
</template>

<script>
import { ref, reactive } from 'vue';

definePageMeta({ layout: 'ui' })
export default {
  name: "index",

  setup() {


    const modal1 = ref(false);
    const modal2 = ref(false);
    const modal3 = ref(false);
    const modal4 = ref(false);

    const selected = ref("");
    const activeIndex = ref(0);
    const inputValue = ref("");
    const rangeValue = ref();

    const inputOptions = reactive(['Option 1', 'Option 2', 'Option 3']);

    const dateValue = ref(null);

    const dateRangeValue = ref('');
    const isLoading = ref(false);


    const formSwitch = ref(false);


    const links = reactive(
      [
        { name: 'Ahmed', icon: 'ri-map-pin-line' },
        { name: 'Ali', icon: 'ri-rocket-line' },
        { name: 'Omar', icon: 'ri-user-add-line' },
        { name: 'Fatima', icon: 'ri-gallery-upload-line' },
        { name: 'Mohamed', icon: 'ri-user-add-line' },
        { name: 'Hassan', icon: 'ri-user-add-line' },
        { name: 'Sami', icon: 'ri-user-add-line' },
        { name: 'Sara', icon: 'ri-headphone-line' },
        { name: 'Salma', icon: 'ri-user-add-line' },
      ]
    );

    const sizes = reactive(
      [
        { name: 'sm' },
        { name: 'md' },
        { name: 'lg' },
      ]
    );


    const buttons = reactive(
      [
        { name: "default" },
        { name: "primary" },
        { name: "secondary" },
        { name: "warning" },
        { name: "success" },
        { name: "info" },
        { name: "danger" },
        { name: "gray" },
      ],
    )


    const items = reactive(
      [
        { label: 'Home', icon: 'ri-mail-send-line' },
        { label: 'Calendar', icon: 'ri-calendar-2-line' },
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Documentation', icon: 'ri-mail-send-line' },
        { label: 'Settings', icon: 'ri-settings-3-line' }
      ]
    )


    const updateInputValue = (newValue) => {
      console.log(newValue)
    }


    return {
      updateInputValue,
      rangeValue,
      sizes,
      formSwitch,
      modal1,
      modal2,
      modal3,
      modal4,
      links,
      selected,
      buttons,
      inputValue,
      inputOptions,
      dateValue,
      dateRangeValue,
      isLoading,
      items,
      activeIndex
    }
  }


}
</script>

<style scoped>
.btn {
  min-width: 200px;
}
</style>
