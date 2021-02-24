<template>
  <v-container>
    <v-row class="about-row">
      <v-col
        cols="12" md="4" sm="12" xs="12"
        class="avatar-col text-center">
        <v-avatar
          class="profile-avatar"
          :size="!isMobile ? 250 : 150">
          <v-img
            :src="require('@/assets/about/profile.jpg')"
          />
        </v-avatar>
        <div class="link-section">
          <div v-for="(link, index) in links" :key="index">
            <v-btn
              class="link-button"
              color="primary"
              elevation="2"
              @click="() => redirectToPage(link.path)"
            >
              <v-icon dark left>{{ link.icon }}</v-icon>
              {{ link.name }}
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12" md="8" sm="12" xs="12"
        class="tab-col"
      >
        <v-tabs>
          <v-tab @click="() => switchTab(0)">Programming</v-tab>
          <v-tab @click="() => switchTab(1)">Resume</v-tab>
        </v-tabs>
        <div class="tab-content">
          <ProgrammingTab v-if="activeTab === 0" />
          <ResumeTab v-if="activeTab === 1" />
        </div>
      </v-col>
      <v-divider class="divider" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ProgrammingTab from '@/components/about/tabs/ProgrammingTab.vue';
import ResumeTab from '@/components/about/tabs/ResumeTab.vue';
import introduction from '@/assets/about/introduction';

export default Vue.extend({
  name: 'AboutView',
  components: {
    ProgrammingTab,
    ResumeTab,
  },
  data: () => ({
    title: 'About Page',
    activeTab: 0,
    links: introduction.links,
  }),
  methods: {
    switchTab(tab: number) {
      this.activeTab = tab;
    },
    redirectToPage(link: string) {
      window.location.href = link;
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 980;
    },
  },
});
</script>

<style lang="css" scoped>
.about-row {
  margin-top: 3%;
}
.divider {
  position: absolute;
  width: 65%;
  margin-left: 10%;
  margin-top: 5%;
}
.profile-avatar {
  margin-top: 5%;
  z-index: 2;
}
.tab-content {
  margin-top: 5%;
  width: 100%;
  text-align: left;
}
.link-section {
  margin-top: 5%;
}
.link-button {
  margin-bottom: 10px;
}
@media screen and (max-width: 1200px) {
  .divider {
    visibility: hidden;
  }
  .tab-content {
    text-align: center;
  }
}
</style>
