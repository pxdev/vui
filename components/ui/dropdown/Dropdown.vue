<template>

  <div class="dropdown search-dropdown" v-if="loading">
    <div class="dropdown-btn gap-5 d-flex align-items-center"><i class="ri-loader-5-line spin tx-20"></i>
      {{ $t('Loading') }}...
    </div>
  </div>


  <div v-else class="dropdown search-dropdown tx-pointer" ref="dropdownElement" :class="{'shown': dropdownOpen}">

    <a href="#" class="dropdown-btn justify-content-between d-flex align-items-center"
       @click.prevent="toggleDropdown()">
      <span>{{ selectedItem ? selectedItem : placeholder }}</span>
      <i class="toggle-arrow ri-arrow-down-s-line tx-16" v-if="toggleArrow"></i>
    </a>
    <a href="#" v-if="selectedItem && clearable" @click.prevent="clear" class="dropdown-clear"> <i
        class="ri-close-line"></i> </a>

    <transition name="slide-fade">

      <div v-if="dropdownOpen" class="dropdown-menu shadow">

        <div class="dropdown-searchbar" v-if="searchable">
          <div class="search">
            <i class="ft-search ri-search-line"></i>
            <input ref="name" placeholder="Search" v-model.trim="searchQuery"/>
          </div>
        </div>
        <!-- / dropdown search box -->

        <vue-custom-scrollbar class="dropdown-scroll">

          <div v-if="dataItems.length > 0">
            <a href="#" v-if="items" class="menu-item d-flex" v-for="item in dataItems"
               :class="{'active': selectedItem === item.name}"
               :key="item" @click.prevent="selectItem(item)">
              <slot name="item">
                <i v-if="item.icon" :class="item.icon" class="menu-item-icon tx-20"></i>
                {{ item.name }}
              </slot>
            </a>

          </div>
          <div class="tx-center pd-5" v-else>
            <no-results :tx-size="14" :size="80" msg="No matching results found for your query"></no-results>
          </div>


        </vue-custom-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar/src/vue-scrollbar.vue'

import {ref, computed} from 'vue'

import {useToggle, onClickOutside, useMagicKeys, useFocus} from '@vueuse/core'

export default {
  components: {
    vueCustomScrollbar
  },
  emits: ['update:modelValue'],
  name: "Dropdown",
  props: {
    modelValue: null,
    loading: {
      type: Boolean,
    },
    items: {
      type: Array,
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
    },
    searchable: {
      type: Boolean,
      default: false
    }

  },

  setup: function (props, {emit}) {

    const dropdownElement = ref(null)
    const selectedItem = ref('')
    const searchQuery = ref('')

    const name = ref()
    const {focused} = useFocus(name, {initialValue: true})

    const [dropdownOpen, toggleDropdown] = useToggle()
    const {Escape} = useMagicKeys()

    const dataItems = computed({
      get() {
        if (props.searchable) {
          return props.items.filter(item =>
              item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
          )
        } else {
          return props.items
        }
      }
    })


    const clear = () => {
      selectedItem.value = ""
    }


    const selectItem = (item) => {
      if (props.items.length > 0) {
        selectedItem.value = item.name;
        dropdownOpen.value = false
        emit('update:modelValue', item.name);
      }
    }


    watchEffect(() => {
      if (Escape.value)
        dropdownOpen.value = false
    })

    onClickOutside(dropdownElement, () => dropdownOpen.value = false)

    return {
      selectedItem,
      dropdownOpen,
      clear,
      toggleDropdown,
      selectItem,
      dropdownElement,
      dataItems,
      searchQuery,
      name,
      focused
    }
  },


};
</script>


