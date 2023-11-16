<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'app-vue'
})
</script>

<style>
/* reset.css ou reset.scss */

/* Box-sizing reset */
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

/* Remove margens e preenchimentos padrão */
body, h1, h2, h3, h4, h5, h6, p, figure {
  margin: 0;
  padding: 0;
}

/* Normalização de fonte e tamanho */
body, button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
}

/* Remova a decoração do link */
a {
  text-decoration: none;
}

/* Limpar lista não ordenada */
ul {
  list-style: none;
}
</style>