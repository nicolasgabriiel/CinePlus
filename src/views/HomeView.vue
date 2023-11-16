<template>
  <HeaderComponent/>
  <MainComponent/>
  <FilterComponent/>
  <FooterComponent/>
</template>

<script lang="ts">
import 'normalize.css';
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FilterComponent
  }
});
</script>
