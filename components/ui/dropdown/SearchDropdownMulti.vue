<template>
  <div class="dropdown search-dropdown" v-if="loading">
    <div class="dropdown-btn gap-5 d-flex align-items-center"><i class="ri-loader-5-line spin tx-20"></i>
      {{ $t('Loading') }}...
    </div>
  </div>

  <div v-else class="dropdown search-dropdown" ref="dropdownElement" :class="{'shown': dropdownOpen}">
    <a href="#" class="dropdown-btn justify-content-between d-flex align-items-center" @click.prevent="toggleDropdown">

      <span v-if="selectedItems.length">

        <span class="selected-items">
          <template v-if="selectedItems.length <= itemsLimit ">

          <span @click="removeSelectedItem(i)" class="selected-item" v-for="(selectedItem, i) in selectedItems">
              {{ selectedItem.name }}  <i class="ri-close-circle-fill"></i>
          </span>

          </template>

          <template v-else>

            <span @click="removeSelectedItem(i)" class="selected-item"
                  v-for="(selectedItem, i) in selectedItems.slice(0,itemsLimit)">
              {{ selectedItem.name }}  <i class="ri-close-circle-fill"></i></span>

            <span class="selected-item">+{{ selectedItems.length - itemsLimit }}</span>

          </template>

        </span>


      </span>

      <span v-else>{{ placeholder }}</span>

      <i class="toggle-arrow ri-arrow-down-s-line tx-16" v-if="toggleArrow"></i>

    </a>

    <a href="#" v-if="selectedItems.length > 0 && clearable" @click.prevent="clear" class="dropdown-clear"> <i
        class="ri-close-line"></i> </a>


    <transition name="slide-fade">
      <div v-if="dropdownOpen" class="dropdown-menu shadow">


        <div class="dropdown-searchbar">
          <div class="search">
            <i class="ft-search ri-search-line"></i>
            <input ref="name" placeholder="Search" v-model.trim="searchQuery"/>
          </div>
        </div>
        <!-- / dropdown search box -->


        <vue-custom-scrollbar class="dropdown-scroll">
          <div v-if="filteredItems.length > 0">
            <a href="#" class="menu-item d-flex" v-for="item in filteredItems"
               :class="{'selected': selectedItems.includes(item)}"
               :key="item" @click.prevent="selectItem(item)">
              <slot name="item">
                <i v-if="item.icon" :class="item.icon" class="menu-item-icon tx-20"></i>
                {{ item.name }}
              </slot>
            </a>
          </div>
          <div class="tx-center pd-5" v-else>
            <no-results :tx-size="14" :size="80" :msg="$t('No matching results found for your query')"></no-results>
          </div>

        </vue-custom-scrollbar>
        <!-- / dropdown items -->

      </div>
    </transition>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar/src/vue-scrollbar.vue'
import {ref, computed, watchEffect} from "vue";
import {onClickOutside, useFocus, useMagicKeys, useToggle} from "@vueuse/core";

export default {
  name: "SearchDropdownMulti",
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
    itemsLimit: {
      type: Number,
      required: true,
      default: 3
    },
    placeholder: {
      type: String
    },
    toggleArrow: {
      type: Boolean
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },


  setup(props, {emit}) {

    const dropdownElement = ref(null)
    const selectedItems = ref([])
    const searchQuery = ref('')

    const name = ref()
    const {focused} = useFocus(name, {initialValue: true})

    const [dropdownOpen, toggleDropdown] = useToggle()
    const {Escape} = useMagicKeys()


    const filteredItems = computed({
      get() {
        return props.items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      }
    })

    const clear = () => {
      selectedItems.value = []
    }

    const selectItem = (item) => {

      if (selectedItems.value.includes(item)) {
        selectedItems.value.splice(selectedItems.value.indexOf(item), 1)
      } else {
        selectedItems.value.push(item);
        emit('update:modelValue', selectedItems.value);
      }

    }


    const removeSelectedItem = (index) => {
      selectedItems.value.splice(index, 1)
      console.log(index)
    }

    watchEffect(() => {
      if (Escape.value)
        dropdownOpen.value = false
    })

    onClickOutside(dropdownElement, () => dropdownOpen.value = false)


    return {
      selectItem,
      removeSelectedItem,
      selectedItems,
      dropdownOpen,
      clear,
      toggleDropdown,
      searchQuery,
      name,
      focused,
      dropdownElement,
      filteredItems
    }
  },


};
</script>


