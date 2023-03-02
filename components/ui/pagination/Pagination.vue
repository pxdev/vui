<template>
  <div>
    <ul  class="pagination">
      <li class="pagination-prev-nav"><a href="#" @click.prevent="prevPage" :class="{'disabled' : currentPageProp === 1}" > <i class="ri-arrow-left-s-line tx-16"></i> </a></li>
      <li class="pagination-page-nav" :class="{ active: page === currentPage  }" v-for="page in pageNumbers" :key="page"> <a href="#" @click.prevent="goToPage(page)" >{{ page }}</a></li>
      <li class="pagination-next-nav"><a href="#" @click.prevent="nextPage" :class="{'disabled' : currentPageProp === totalPagesProp}"> <i class="ri-arrow-right-s-line tx-16"></i> </a></li>
    </ul>

  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPageProp: this.currentPage,
      totalPagesProp: this.totalPages,
    };
  },
  computed: {
    pageNumbers() {
      if (this.totalPages <= 10) {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
      }
      let start = this.currentPage - 5;
      let end = this.currentPage + 4;
      if (start < 1) {
        end -= start - 1;
        start = 1;
      }
      if (end > this.totalPages) {
        start -= end - this.totalPages;
        end = this.totalPages;
      }
      start = Math.max(start, 1);
      end = Math.min(end, this.totalPages);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);

    }
  },
  methods: {
    prevPage() {
      if (this.currentPageProp > 1) {
        this.currentPageProp--;
        this.$emit("update:currentPage", this.currentPageProp);
      }
    },
    nextPage() {
      if (this.currentPageProp < this.totalPagesProp) {
        this.currentPageProp++;
        this.$emit("update:currentPage", this.currentPageProp);
      }
    },
    goToPage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.$emit('update:currentPage', page);
    }
  }
};
</script>


