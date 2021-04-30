<template>
  <v-container class="pt-15">
    <v-navigation-drawer permanent app width="240">
      <v-list dense nav>
        <v-list-item class="text-left" v-for="item in options" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title @click="toRouteNewsMenu(item)">
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
  name: "News",
  data() {
    return {
      options: [
        {
          title: "Smartphone",
          icon: "mdi-cellphone",
          route: "smartphone",
        },
        {
          title: "Web Development",
          icon: "mdi-developer-board",
          route: "web-development",
        },
        {
          title: "Webpack News",
          icon: "mdi-webpack",
          route: "webpack-news",
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
    toRouteNewsMenu(item) {
      this.$route.name !== item.route &&
        this.$router.push({ name: item.route });
    },
  },
};
</script>
