<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'app'
})
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Agbalumo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app{
    font-family: 'Open Sans';
    font-size: 12px;
  }


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