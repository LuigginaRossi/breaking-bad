<script>
  import TheHeader from './components/TheHeader.vue';
  import Filter from './components/Filter.vue';
  import CharactersList from './components/CharactersList.vue';
  export default{
    components: { TheHeader, Filter, CharactersList }
  }


</script>

<template>
  <div class="bg-body">
    <TheHeader></TheHeader>
    <Filter></Filter>
    <CharactersList></CharactersList>
  </div> 
</template>

<style lang="scss">
@use "./style/general.scss" as * ;

  .bg-body{
    background-image: url("./assets/bg.jfif"); 
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .card{
    --bs-card-bg: #fff;
  }
</style>
