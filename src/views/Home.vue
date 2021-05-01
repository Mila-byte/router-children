<template>
  <v-main class="pt-15">
    <v-row>
      <v-navigation-drawer permanent app width="240">
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title
                class="text-left"
                @click="toRouteHomeMenu(item)"
              >
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-col cols="12" md="8" lg="7" xl="5">
        <v-toolbar>
          <v-btn @click="navigateTo('first')">
            To First
          </v-btn>
          <v-btn @click="navigateTo('second')">
            To Second
          </v-btn>
          <v-btn @click="navigateTo('other')">
            To Other
          </v-btn>
        </v-toolbar>
        <component :is="currentComponent" />
      </v-col>
    </v-row>
    <router-view></router-view>
  </v-main>
</template>
<script>
import First from '@/components/First.vue'
import Second from '@/components/Second.vue'
import Third from '@/components/Third.vue'
export default {
  name: 'Home',
  data() {
    return {
      currentComponent: null,
      items: [
        {
          title: 'User Profile',
          icon: 'mdi-account-heart-outline',
          route: 'profile'
        },
        {
          title: 'Gallery',
          icon: 'mdi-camera-party-mode',
          route: 'gallery'
        },
        {
          title: 'Blog',
          icon: 'mdi-post',
          route: 'blog'
        }
      ]
    }
  },
  computed: {
    greetings() {
      return this.$store.state.greetings
    }
  },
  methods: {
    toRouteHomeMenu(item) {
      this.$route.name !== item.route && this.$router.push({ name: item.route })
    },
    navigateTo(param) {
      this.currentComponent =
        param === 'first' ? First : param === 'second' ? Second : Third
    }
  }
}
</script>
