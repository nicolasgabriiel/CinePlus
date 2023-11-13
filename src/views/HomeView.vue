<template>
  <HeaderComponent/>
  <MainComponent/>
  <FooterComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  }
});
</script>
