<template>
  <div>
    <div class="card-body">
      <button
        v-if="canGoToPreviousPage"
        @click="currentPageChanged(-1)"
        class="btn btn-ligh"
      >
        Previous page
      </button>
      <div>Current page: {{ currentPage }}</div>
      <button
        v-if="canGoToNextPage"
        @click="currentPageChanged(1)"
        class="btn btn-ligh"
      >
        Next page
      </button>
    </div>
  </div>
</template>
<script>
const PAGE_SIZE = 2;
export default {
  name: "PaginationButtons",
  props: {
    numOfItems: Number,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    canGoToPreviousPage() {
      return this.currentPage > 1;
    },
    canGoToNextPage() {
      return this.currentPage * PAGE_SIZE < this.numOfItems;
    },
  },
  methods: {
    currentPageChanged(step) {
      this.currentPage = this.currentPage + step;
      this.$emit("current-page-changed", this.currentPage);
    },
  },
};
</script>
<style scoped></style>
