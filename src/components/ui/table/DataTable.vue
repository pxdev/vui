<template>
  <div class="table-component">
    <loading v-if="loading"/>
    <div class="d-flex flex-wrap align-items-center justify-content-between mg-b-30 gap-15">
      <div class="search-bar d-flex flex-fill gap-10">
        <div class="form-group flex-fill pre-input" v-if="this.searchable">
          <i class="ri-search-line pre-icon"></i>
          <input type="text" class="form-control lg" v-model="searchKey" placeholder="Search"/>
        </div>
      </div>

      <btn type="btn-default-outline" size="lg" icon="ri-download-2-line tx-18" v-if="this.export"
                @clicked="exportToCsv">Export to CSV
      </btn>

      <slot name="search"></slot>
    </div>

    <div v-if="filteredData.length">
      <table class="table data-table" :class="theme">
        <thead>
        <tr>
          <th v-for="header in headers" :key="header.text">
            <div class="d-flex table-header gap-10" v-if="header.sortable === true" @click="sort(header.value)">
              <span class="header-text">{{ header.text }}</span>
              <span v-if="sortKey === header.value" class="d-flex align-items-center sort-arrow">
              <template v-if="sortOrders[header.value] === 1"> <i class="ri-sort-asc"></i> </template>
              <template v-else> <i class="ri-sort-desc"></i> </template>
            </span>
            </div>
            <div class="d-flex table-header gap-10" v-else>
              <span class="header-text">{{ header.text }}</span>
            </div>

          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in displayedRecords">
          <slot name="entry" v-bind="row"></slot>
        </tr>
        </tbody>
      </table>
      <div class="table-footer pd-15 bd-t d-flex justify-content-between">

        <p v-if="showTotalRecords" class="tx-12 op-8">Total Records: <span
            class="tx-danger tx-medium">{{ filteredData.length }}</span></p>

        <pagination v-if="showPagination" :current-page="currentPage" :total-pages="totalPages"
                    @update:current-page="updateCurrentPage"/>

      </div>
    </div>

    <no-results v-else-if="!filteredData.length && searchKey.length > 0" :tx-size="14" :size="160" msg="No matching results found for your query"></no-results>

    <no-results v-else-if="!filteredData.length && !searchKey.length"  :tx-size="14" :size="160" msg="No Records Add yet, "></no-results>


  </div>
</template>

<script>

export default {
  props: {

    recordsPerPage: {
      type: Number,
      default: 8
    },

    loading: {
      type: Boolean,
      default: false
    },

    showTotalRecords: {
      type: Boolean,
      default: true
    },

    showPagination: {
      type: Boolean,
      default: true
    },


    searchable: {
      type: Boolean,
      default: true
    },

    theme: {
      type: String,
      default: null,
    },

    data: {
      type: Array,
      default: null,
      required: true
    },
    headers: {
      type: Array,
      default: null,
      required: true
    },
    export: {
      type: Boolean,
    },

  },

  data() {
    return {
      currentPage: 1,
      searchKey: '',
      sortKey: '',
      sortOrders: {}
    }
  },
  computed: {

    filteredData() {
      this.currentPage = 1
      let data = this.data
      let searchKey = this.searchKey.toLowerCase()
      if (searchKey) {
        data = data.filter(row => {
          return Object.keys(row).some(key => {
            return String(row[key]).toLowerCase().indexOf(searchKey) > -1
          })
        })
      }
      let sortKey = this.sortKey
      let order = this.sortOrders[sortKey] || 1
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }


      return data
    },

    totalPages() {
      return Math.ceil(this.filteredData.length / this.recordsPerPage);
    },


    displayedRecords() {
      const startIndex = (this.currentPage - 1) * this.recordsPerPage;
      return this.filteredData.slice(startIndex, startIndex + this.recordsPerPage);
    }


  }
  ,
  methods: {

    updateCurrentPage(newPage) {
      this.currentPage = newPage;
    },

    exportToCsv() {
      const headerRow = this.headers.map(header => header.text).join(',');
      const dataRows = this.data.map(row => this.headers.map(header => row[header.value]).join(',')).join('\n');
      const csvContent = `${headerRow}\n${dataRows}`;
      const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "table.csv");
      link.click();
    },

    sort(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1 || 1
    }

  }
}
</script>
