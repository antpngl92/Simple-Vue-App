<template>
  <div v-if="event">
    <p>Edit the event</p>
  </div>
</template>

<script>
export default {
  props: ['event'],
  data() {
    return {
      unsavedChanges: false
    }
  },
  beforeRouteLeave() {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false
      }
    }
  }
}
</script>
