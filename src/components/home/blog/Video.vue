<template>
  <v-main class="pa-4">
      <iframe
          width="100%"
          height="800"
          :src="src"
      ></iframe>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Video',
  props: ['id'],
  computed: {
    ...mapState(['videos']),
    src() {
      return `https://www.youtube.com/embed/${this.id}`
    }
  }
}
</script>
