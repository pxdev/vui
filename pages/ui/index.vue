<template>

  <div>

    <demo></demo>

     <theme-switcher></theme-switcher>


    <btn @click="toggleLocales">Toggle</btn>

    <button  @click="modalVisible = true">Show Modal</button>
    <modal title="test" size="" v-model="modalVisible">test</modal>


    <dropdown
        v-model="selected"
        class="form-dropdown lg"
        :toggle-arrow="true"
        placeholder="Dropdown Placeholder"
        :items="links"
    ></dropdown>


  </div>

</template>

<script>
import {ref, reactive} from 'vue';
import { useI18n } from 'vue-i18n'

definePageMeta({layout: 'ui'})
export default {
  name: "index",

  setup() {

    const { t, locale, availableLocales } = useI18n()

    const toggleLocales = () => {
      const locales = availableLocales
      console.log(locale.value)
      locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }

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
      modalVisible, links, selected, toggleLocales, t
    }
  }


}
</script>

<style scoped>

</style>
