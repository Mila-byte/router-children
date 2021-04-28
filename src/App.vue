<template>
  <v-app>
      <!-- <header>
          <v-card class="overflow-hidden"> -->
      <v-app-bar
          app
          absolute
          color="primary"
          dark
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-btn
            v-for="(item, index) in options"
            :key="index"
            dark
            @click="$router.push({ name: item })"
        >{{ item }}</v-btn>
      </v-app-bar>
      <!-- </v-card> -->
      <!-- <MainMenu
        :items="options"
        :selected.sync="selected"
      /> -->
      <!-- </header> -->
      <main>
        <router-view></router-view>
      </main>
      <footer></footer>
      <error-popup
          :error.sync="opened"
          :errorMessage="errorMessage"
          v-if="opened"
      />
  </v-app>

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  // components: {
  //   MainMenu: () => import('@/components/MainMenu.vue')
  // },

  data: () => ({
    options: ['home', 'history', 'news'],
    selected: undefined
  }),

  computed: {
    ...mapState(['error', 'errorMessage']),
    opened: {
      get () {
        return this.error
      },
      set (value) {
        this.update({
          error: value,
          errorMessage: ''
        })
      }
    }
  },

  watch: {
    selected (val) {
      this.$router.push({ name: val })
    }
  },

  methods: {
    ...mapActions({
      getData: 'GET_DATA'
    }),

    ...mapMutations({
      update: 'SET_ERROR'
    })
  },

  created () {
    this.getData()
  }
}
</script>

<style>
* {
  outline: none;
  user-select: none;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
