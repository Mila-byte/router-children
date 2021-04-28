<template>
  <table>
    <tbody>
      <tr>
        <td
          v-for="(item, index) in options"
          :key="index"
        >
          <p
            v-if="testRoute(item)"
            @click="clickHandler(item)"
          >
            {{ item }}
          </p>
        </td>
        <td>
          <button @click="showError"></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'MainMenu',
    props: ['items', 'selected'],
    computed: {
      // greetings () {
      //   return this.$store.state.greetings
      // },
      ...mapState(['greetings']),
      options () {
        return this.items.concat([this.greetings])
      }
    },
    methods: {
      ...mapMutations({
        changeGreetings: 'CHANGE_GREETINGS',
        setError: 'SET_ERROR'
      }),

      showError () {
        this.setError({
          error: true,
          errorMessage: 'error is true'
        })
      },

      testRoute (item) {
        return this.$route.name !== item
      },

      clickHandler (item) {
        if (item === this.greetings) {
          this.changeGreetings(Math.random())
        } else {
          this.$route.name !== item && this.$emit('update:selected', item)
        }
      }
    }
  }
</script>

<style scoped>
  td {
    border: 1px solid #777;
    padding: 8px 16px;
  }
</style>
