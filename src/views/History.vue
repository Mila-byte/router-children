<template>
  <v-container>
    <v-row class="mt-15">
      <v-col md="4">
        <v-toolbar>
          <v-btn @click="navigate('first')">
            First
          </v-btn>
          <v-btn @click="navigate('second')">
            Second
          </v-btn>
          <v-btn @click="navigate('third')">
            To other
          </v-btn>
        </v-toolbar>
        <router-view></router-view>
      </v-col>
      <v-col md="4">
        <v-card v-if="ready" max-width="600">
          <v-list two-line>
            <v-list-item-group
              active-class="pink--text"
            >
              <template v-for="(member, propName) in members">
                <v-list-item :key="propName" @click="getMemberInfo(propName)">
                  <v-list-item-content>
                    {{ member.name }}
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col md="4">
        <h2 v-if="currentUserId">Form</h2>
        <UserProfile
          v-if="currentUserId"
          :userId="currentUserId"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import UserProfile from '@/components/home/UserProfile.vue'

export default {
  name: 'History',
  components: {
    UserProfile
  },
  data: () => ({
    members: null,
    ready: false,
    currentUserId: null
  }),
  computed: {
    ...mapState(['greetings', 'users'])
  },
  methods: {
    getMemberInfo(userId) {
      this.currentUserId = userId
    },
    navigate(value) {
      this.$router.push({ name: 'child', params: { child: value } })
    }
  },
  watch: {
    users: {
      deep: true,
      immediate: true,
      handler(value) {
        if (!value) return
        this.members = value
        this.ready = true
      }
    }
  }
}
</script>
