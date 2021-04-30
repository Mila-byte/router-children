<template>
  <v-app>
    <v-app-bar app absolute color="blue-grey">
      <v-btn
        v-for="(item, index) in options"
        :key="index"
        class="ma-2"
        @click="toRouteMenu(item)"
        >{{ item }}
      </v-btn>
    </v-app-bar>
    <main>
      <router-view></router-view>
    </main>
    <error-popup
      :error.sync="opened"
      :errorMessage="errorMessage"
      v-if="opened"
    />
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  data: () => ({
    options: ["home", "history", "news"],
    selected: undefined,
  }),

  computed: {
    ...mapState(["error", "errorMessage"]),
    opened: {
      get() {
        return this.error;
      },
      set(value) {
        this.update({
          error: value,
          errorMessage: "",
        });
      },
    },
  },

  watch: {
    selected(val) {
      this.$router.push({ name: val });
    },
  },

  methods: {
    ...mapActions({
      getData: "GET_DATA",
    }),

    ...mapMutations({
      update: "SET_ERROR",
    }),
    toRouteMenu(item) {
      this.$route.name !== item && this.$router.push({ name: item });
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style>
* {
  outline: none;
  user-select: none;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
