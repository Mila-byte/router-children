<template>
  <v-container>
    <v-card v-if="ready" max-width="600" class="mx-auto">
      <v-btn
        v-for="(member, propName) in members"
        :key="propName"
        @click="getMemberInfo(propName)"
      >
        {{ member.name }}
      </v-btn>
    </v-card>
    <UserProfile v-if="currentUserId" :userId="currentUserId" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "@/components/home/UserProfile.vue";

export default {
  name: "History",
  components: {
    UserProfile,
  },
  data: () => ({
    members: null,
    ready: false,
    currentUserId: null,
  }),
  computed: {
    ...mapState(["greetings", "users"]),
  },
  methods: {
    getMemberInfo(userId) {
      console.log(userId);
      this.currentUserId = userId;
    },
  },
  watch: {
    users: {
      deep: true,
      immediate: true,
      handler(value) {
        if (!value) return;
        this.members = value;
        this.ready = true;
      },
    },
  },
  mounted() {
    console.log(this.users);
  },
};
</script>
