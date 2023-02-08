<template>
  <div class="dropdown">

    <input class="form-control" :class="[size]" v-model="searchValue" @input="search" :placeholder="placeholder" :disabled="disabled" />

     <div v-if="searchResults.length && isOpen === true" class="dropdown-menu shadow">
      <vue-custom-scrollbar class="dropdown-scroll" :settings="scrollSettings">
        <a href="#" class="menu-item"  v-for="result in searchResults" :key="result" @click.prevent="setSelectedValue(result)">{{ result.name }}</a>
      </vue-custom-scrollbar>
    </div>

    <div class="dropdown-menu shadow" v-if="searchValue.length > 0 && searchResults.length === 0 ">
      <div class="tx-center pd-5">
        <no-results :tx-size="14" :size="80" msg="No matching results found for your query"></no-results>
      </div>
    </div>

    <div class="dropdown-menu shadow" v-if="error ">
      <div class="tx-center pd-5"> Something went Wrong</div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import vueCustomScrollbar from 'vue-custom-scrollbar/src/vue-scrollbar.vue'

export default {
  name: "AutocompleteInput",
  components: {
    vueCustomScrollbar
  },

  props: {

    size: {
      type: String,
     },

    placeholder: {
      type: String,
      default: 'Search...',
    },

    endpoint: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      isLoading: true,
      searchValue: '',
      searchResults: [],
      error: null,


      data: [],

      scrollSettings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
        wheelSpeed: 1,
        swipeEasing: true
      }

    }
  },
  methods: {
    async search() {
      if (!this.searchValue) {
        this.searchResults = [];
        this.isOpen = false

        return;

      }
      this.error = null;
      try {
        const results = await this.fetchSearchResults(this.searchValue);
        this.searchResults = results;
      } catch (error) {
        this.error = error.message;
        console.error(error);
      }
    },
    async fetchSearchResults(searchValue) {
      try {
        this.isOpen = true
        const response = await axios.get(this.endpoint);
        this.data = response.data;
        return this.data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
      } catch (error) {
        throw error;
      }
    },
    setSelectedValue(result) {
      this.searchValue = result.name;
      this.$emit('select', result);
      this.isOpen = false

    },
  },
};
</script>

