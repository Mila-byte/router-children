<template>
    <v-container class="pt-15">
      <v-card
          max-width="600"
          class="pt-15"
      >
        <UserProperty
            v-for="(propValue, propName) in userSchema"
            :key="propName"
            :userId="userId"
            :propName="propName"
            :propValue="propValue"
        />
      </v-card>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { userSchema } from '@/configs/userSchema'
import UserProperty from '@/components/UserProperty.vue'

export default {
  name: 'UserProfile',
  components: {
    UserProperty
  },
  props: ['userId'],
  data: () => ({
    userSchema: userSchema
  }),
  computed: {
    ...mapState(['users']),

    user: {
      get () {
        return this.users[this.userId]
      },
      set (value) {
        Object.keys(this.userSchema).forEach((key) => {
          value[key] && this.updateUser({
            userId: this.userId,
            propName: key,
            value: value[key]
          })
        })
      }
    }
  }
}
</script>
