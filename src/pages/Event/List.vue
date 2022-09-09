<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <PaginationBar :page="page" :totalPages="totalPages" />
  </div>
</template>

<script>
import EventCard from '@/pages/Event/components/EventCard.vue'
import PaginationBar from '@/components/PaginationBar.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
    PaginationBar
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
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
