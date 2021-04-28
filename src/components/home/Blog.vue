<template>
  <v-main>
    <v-list>
      <v-list-item-group
          color="primary"
      >
        <v-list-item
            v-for="(item, i) in videos"
            :key="i"
            @click="routeToVideo(i)"
        >
          <v-list-item-content>
            <v-list-item-title @click="routeToVideo(i)">
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
  name: "Blog",
  computed: {
    ...mapState(['videos'])
  },
  methods: {
    routeToVideo (id) {
      this.$route.params.id !== id && this.$router.push({ name: 'videos', params: { id } })
    }
  }
}
</script>

<style scoped>
</style>
