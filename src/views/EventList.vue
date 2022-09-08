<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

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
          :class="{ 'active-pagination-page': this.page == p }"
          >{{ p }}</router-link
        >
      </div>

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        :class="{ hidden: !hasNextPage }"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
      totalPages: 0
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page) // <---- 2 events per page, and current page
        .then(response => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
          this.totalPages = Math.ceil(this.totalEvents / 2)
        })
        .catch(error => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      return this.page < this.totalPages
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
.active-pagination-page {
  background: #2c3e50;
  opacity: 60%;
  color: white !important;
  border-radius: 300px;
}
</style>
