<template>
  <div class="error">
    <button @click="close">x</button>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorPopUp',

  props: ['error', 'errorMessage'],

  methods: {
    close () {
      this.$emit('update:error', false)
    }
  }
}
</script>

<style scoped>
  .error {
    width: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #777;
    background: #fbfbfb;
    border-radius: 8px;
    padding: 8px;
  }

  button {
    position: absolute;
    top: 4px;
    right: 4px;
  }
</style>
