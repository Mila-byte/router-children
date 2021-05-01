<template>
  <v-main class="main" :style="{ background: color }"></v-main>
</template>

<script>
export default {
  name: 'Clild',
  props: ['child'],
  computed: {
    color() {
      return this.child === 'first'
        ? 'red'
        : this.child === 'second'
        ? 'blue'
        : 'green'
    }
  }
}
</script>

<style lang="scss">
.main {
  width: 300px;
  height: 300px;
}
</style>
