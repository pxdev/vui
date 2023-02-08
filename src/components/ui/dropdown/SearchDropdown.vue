<template>
  <div class="dropdown search-dropdown" v-if="loading">
    <div class="dropdown-btn gap-5 d-flex align-items-center"> <i class="ri-loader-5-line spin tx-20"></i>Loading...</div>
  </div>
  <div v-else  class="dropdown search-dropdown" ref="searchDropdown" :class="{'shown': dropdownOpen}">

    <a href="#" class="dropdown-btn justify-content-between d-flex align-items-center" @click.prevent="toggleDropdown">
      <span>{{ selectedItem ? selectedItem : placeholder }}</span>
      <svg class="toggle-arrow" v-if="toggleArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
      </svg>
    </a>

    <a href="#" v-if="selectedItem" @click.prevent="clear" class="dropdown-clear"> <i class="ri-close-line"></i> </a>


    <!-- / dropdown header -->
    <div v-if="dropdownOpen" class="dropdown-menu shadow">

      <div class="search">
        <i class="ft-search ri-search-line"></i>
        <input ref="name" placeholder="Search" v-model.trim="searchQuery"/>
      </div>
      <!-- / dropdown search box -->

      <vue-custom-scrollbar class="dropdown-scroll" :settings="scrollSettings">

        <a href="#" v-if="filteredItems.length > 0" class="menu-item d-flex"
           v-for="item in filteredItems"
           :class="{'active': selectedItem === item.name}"
           :key="item" @click.prevent="selectItem(item)">
          <slot name="item">
            <i v-if="item.icon" :class="item.icon" class="menu-item-icon tx-20"></i>
            {{ item.name }}
          </slot>
        </a>

        <div class="tx-center pd-5" v-else>
          <no-results :tx-size="14" :size="80" msg="No matching results found for your query"></no-results>
        </div>

      </vue-custom-scrollbar>
      <!-- / dropdown items -->

    </div>

  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar/src/vue-scrollbar.vue'

export default {
  name: "SearchDropdown",
  emits: ['update:modelValue'],
  components: {
    vueCustomScrollbar
  },
  props: {
    modelValue: null,
    loading: {
      type: Boolean,
     },
    items: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String
    },
    toggleArrow: {
      type: Boolean
    }
  },
  data() {
    return {
      selectedItem: "",
      searchQuery: "",
      dropdownOpen: false,

      scrollSettings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
        wheelSpeed: 1,
        swipeEasing: true
      }

    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    clear() {
      this.selectedItem = ""
    },

    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
      this.$nextTick(() => {
        if (this.dropdownOpen) {
          this.$refs.name.focus();
        }
      });
    },
    selectItem(item) {
      this.selectedItem = item.name;
      this.dropdownOpen = false;
      this.$emit('update:modelValue', item.name);
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownOpen = false;
      }
    }
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },

};
</script>


