<template>
  <v-main>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item
          class="text-left"
          v-for="(item, id) in videos"
          :key="id"
          @click="routeToVideo(id)"
        >
          <v-list-item-content>
            <v-list-item-title @click="routeToVideo(id)">
              {{ item }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <router-view></router-view>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Blog',
  computed: {
    ...mapState(['videos'])
  },
  methods: {
    routeToVideo(id) {
      if (this.$route.params.id === id) return
      this.$router.push({ name: 'videos', params: { id } }).catch(() => console.log('not authorized'))
    }
  }
}
</script>
