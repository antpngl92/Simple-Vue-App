<template>
  <flashMessage />
  <navigation />
</template>

<script>
import navigation from '@/components/Navigation.vue'
import flashMessage from '@/components/FlashMessage.vue'

export default {
  components: {
    navigation,
    flashMessage
  }
}
</script>
