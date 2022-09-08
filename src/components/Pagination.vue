<template>
  <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      :class="{ hidden: page == 1 }"
      >&#60; Previous</router-link
    >
    <div class="page-numbers">
      <router-link
        v-for="(p, index) in this.totalPages"
        :to="{ name: 'EventList', query: { page: p } }"
        :key="index"
        >{{ p }}
      </router-link>
    </div>

    <router-link
      id="page-next"
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
      :class="{ hidden: !hasNextPage }"
      >Next &#62;</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  computed: {
    hasNextPage() {
      return this.page < this.totalPages
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  padding: 3px;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
.page-numbers {
  display: flex;
  gap: 10px;
}

.hidden {
  visibility: hidden;
}
</style>
