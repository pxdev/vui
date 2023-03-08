<template>
  <div class="dropdown search-dropdown" v-if="loading">
    <div class="dropdown-btn gap-5 d-flex align-items-center"><i class="ri-loader-5-line spin tx-20"></i>Loading...
    </div>
  </div>
  <div v-else class="dropdown search-dropdown" ref="dropdownElement" :class="{'shown': dropdownOpen}">

    <a href="#" class="dropdown-btn justify-content-between d-flex align-items-center" @click.prevent="toggleDropdown">
      <span>{{ selectedItem ? selectedItem : placeholder }}</span>
      <svg class="toggle-arrow" v-if="toggleArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
      </svg>
    </a>


    <a href="#" v-if="selectedItem && clearable" @click.prevent="clear" class="dropdown-clear"> <i class="ri-close-line"></i> </a>

    <!-- / dropdown header -->
    <div v-if="dropdownOpen" class="dropdown-menu shadow">


      <vue-custom-scrollbar class="dropdown-scroll" :settings="scrollSettings">
        <slot name="dropdown">
          <div v-if="items">
            <a href="#" v-if="items" class="menu-item d-flex"
               v-for="item in items"
               :class="{'active': selectedItem === item.name}"
               :key="item" @click.prevent="selectItem(item)">
              <slot name="item">
                <i v-if="item.icon" :class="item.icon" class="menu-item-icon tx-20"></i>
                {{ item.name }}
              </slot>
            </a>
            <div class="tx-center pd-5" v-else>
              Nothing Found
            </div>
          </div>
        </slot>
      </vue-custom-scrollbar>
      <!-- / dropdown items -->
    </div>

  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar/src/vue-scrollbar.vue'
import {ref, onMounted, onBeforeUnmount} from 'vue'

export default {
  name: "Dropdown",
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
    const selectedItem = ref('')
    const dropdownOpen = ref(false)


    const scrollSettings = {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false,
      wheelSpeed: 1,
      swipeEasing: true
    }

    const clear = () => {
      selectedItem.value = ""
    }

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    }
    const selectItem = (item) => {
      if (props.items.length > 0) {
        selectedItem.value = item.name;
        dropdownOpen.value = false;
        emit('update:modelValue', item.name);
      }
    }

    const handleClickOutside = (e) => {
        if (!dropdownElement.value.contains(e.target) && dropdownOpen) {
          dropdownOpen.value = false;
        }
    }

    onMounted(()=>{
      document.addEventListener("click", handleClickOutside);
    })

    onBeforeUnmount(()=> {
      document.removeEventListener("click", handleClickOutside);
    })


    return {
      selectedItem, dropdownOpen, scrollSettings, clear, toggleDropdown, selectItem, dropdownElement
    }
  },


};
</script>


