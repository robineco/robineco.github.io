<template>
  <section id="experience">
    <p class="section-title mb-6" data-cursor-hover>My Experience 🛠️</p>
    <p class="experience-intro">
      Through my studies, various internships and my work, I have been able to work with many different technologies and have a broad knowledge of them.
    </p>
    <div class="mt-4">
      <CategorySection name="Languages" :technology="languages" />
      <CategorySection name="Frontend" :technology="frontend" />
      <CategorySection name="Backend" :technology="backend" />
      <CategorySection name="DevOps" :technology="devops" />
      <CategorySection name="Monitoring" :technology="monitoring" />
      <CategorySection name="Tools" :technology="tools" />
      <CategorySection name="Self Hosted" :technology="host" />
      <CategorySection name="Embedded Systems" :technology="embedded" />
    </div>
    <v-divider class="mt-4 mb-4" />
  </section>
</template>

<script>
import CategorySection from '@/components/helpers/CategorySection';
export default {
  name: "ExperienceSection",
  components: { CategorySection },
  data: () => ({
    languages: [
        'https://img.shields.io/static/v1?style=for-the-badge&message=Java&color=007396&logo=Java&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Ruby&color=3776AB&logo=Ruby&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Python&color=3776AB&logo=Python&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label='
    ],
    frontend: [
        'https://img.shields.io/static/v1?style=for-the-badge&message=Vue.js&color=222222&logo=Vue.js&logoColor=4FC08D&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Vuetify&color=1867C0&logo=Vuetify&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Bootstrap&color=7952B3&logo=Bootstrap&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=ESLint&color=4B32C3&logo=ESLint&logoColor=FFFFFF&label=',
    ],
    backend: [
        'https://img.shields.io/static/v1?style=for-the-badge&message=Spring+Boot&color=6DB33F&logo=Spring+Boot&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Express&color=000000&logo=Express&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=JSON+Web+Tokens&color=000000&logo=JSON+Web+Tokens&logoColor=FFFFFF&label=',
    ],
    devops: [
      'https://img.shields.io/static/v1?style=for-the-badge&message=Azure+DevOps&color=0078D7&logo=Azure+DevOps&logoColor=FFFFFF&label=',
      'https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=',
      'https://img.shields.io/static/v1?style=for-the-badge&message=Amazon+AWS&color=232F3E&logo=Amazon+AWS&logoColor=FFFFFF&label=',
      'https://img.shields.io/static/v1?style=for-the-badge&message=Docker&color=2496ED&logo=Docker&logoColor=FFFFFF&label=',
      'https://img.shields.io/static/v1?style=for-the-badge&message=Jenkins&color=2496ED&logo=Jenkins&logoColor=FFFFFF&label=',
      'https://img.shields.io/static/v1?style=for-the-badge&message=Azure+Pipelines&color=2560E0&logo=Azure+Pipelines&logoColor=FFFFFF&label=',
      'https://img.shields.io/static/v1?style=for-the-badge&message=SonarCloud&color=F3702A&logo=SonarCloud&logoColor=FFFFFF&label='
    ],
    monitoring: [
        'https://img.shields.io/static/v1?style=for-the-badge&message=grafana&color=222222&logo=grafana&logoColor=4FC08D&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=prometheus&color=222222&logo=prometheus&logoColor=4FC08D&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=influxdb&color=222222&logo=influxdb&logoColor=4FC08D&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=postgresql&color=222222&logo=postgresql&logoColor=4FC08D&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=alerting&color=222222&logo=alerting&logoColor=4FC08D&label=',
    ],
    tools: [
        'https://img.shields.io/static/v1?style=for-the-badge&message=JetBrains&color=000000&logo=JetBrains&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Visual+Studio+Code&color=007ACC&logo=Visual+Studio+Code&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Git&color=F05032&logo=Git&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Confluence&color=172B4D&logo=Confluence&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Jira&color=0052CC&logo=Jira&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Bitbucket&color=0052CC&logo=Bitbucket&logoColor=FFFFFF&label=',
    ],
    host: [
        'https://img.shields.io/static/v1?style=for-the-badge&message=OVH&color=123F6D&logo=OVH&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=NGINX&color=009639&logo=NGINX&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Let%E2%80%99s+Encrypt&color=003A70&logo=Let%E2%80%99s+Encrypt&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Bitwarden&color=175DDC&logo=Bitwarden&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Nextcloud&color=0082C9&logo=Nextcloud&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=WireGuard&color=88171A&logo=WireGuard&logoColor=FFFFFF&label=',
    ],
    embedded: [
        'https://img.shields.io/static/v1?style=for-the-badge&message=Raspberry+Pi&color=A22846&logo=Raspberry+Pi&logoColor=FFFFFF&label=',
        'https://img.shields.io/static/v1?style=for-the-badge&message=Arduino&color=00979D&logo=Arduino&logoColor=FFFFFF&label=',
    ]
  }),
}
</script>

<style scoped lang="scss">
#experience {
  width: 100%;
  margin-top: 20vh;
  .section-title {
    font-size: 32px;
    font-weight: 700;
    color: #F5D579;
  }
  .experience-intro {
    font-size: 20px;
  }
}
</style>
