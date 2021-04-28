<template>
  <v-text-field
    :label="propName"
    :placeholder="propName"
    v-model="property"
    outlined
    class="mx-8 my-2"
  />
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'UserProperty',
  props: ['userId', 'propName', 'propValue'],
  computed: {
    property: {
      get () {
        return this.propValue
      },
      set (value) {
        this.updateUserProp({
          userId: this.userId,
          propName: this.propName,
          value
        })
      }
    }
  },
  methods: {
    ...mapMutations({
      updateUserProp: 'CHANGE_USER'
    })
  }
}
</script>
