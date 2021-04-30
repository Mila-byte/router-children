<template>
  <v-container class="pt-15">
    <v-navigation-drawer permanent app width="240">
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title class="text-left" @click="toRouteHomeMenu(item)">
              <v-icon>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          title: "User Profile",
          icon: "mdi-account-heart-outline",
          route: "profile",
        },
        {
          title: "Gallery",
          icon: "mdi-camera-party-mode",
          route: "gallery",
        },
        {
          title: "Blog",
          icon: "mdi-post",
          route: "blog",
        },
      ],
    };
  },
  computed: {
    greetings() {
      return this.$store.state.greetings;
    },
  },
  methods: {
    toRouteHomeMenu(item) {
      this.$route.name !== item.route && this.$router.push({ name: item.route });
    },
  },
};
</script>
