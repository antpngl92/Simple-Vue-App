<template>
  <div v-if="event">
    <p>Register for the event</p>
  </div>
</template>

<script>
export default {
  props: ['event']
}
</script>
