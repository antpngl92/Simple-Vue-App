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
  beforeRouteEnter(to, from, next) {
    const page = parseInt(to.query.page) || 1 // <---- 2 events per page, and current page
    EventService.getEvents(2, page)
      .then(response => {
        next(comp => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
          comp.totalPages = Math.ceil(comp.totalEvents / 2)
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(to) {
    const page = parseInt(to.query.page) || 1
    return EventService.getEvents(2, page)
      .then(response => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
        this.totalPages = Math.ceil(this.totalEvents / 2)
      })
      .catch(() => {
        return { name: 'NetworkError' }
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
