<script>
import axios from 'axios';
import SingleCharacter from './SingleCharacter.vue';
import {store , fetchCharacters } from '../store';

export default {
    components: { SingleCharacter},
    data() {
        return {
           store,
           ajaxError: "",
        }  
    },
    created(){
        this.store.loading = true;
        fetchCharacters();
    }
}
</script>
<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-4 py-5">
        <div class="col" v-for="(singleCharacter, i) in store.charatersList" :key="i">
            <SingleCharacter :character="singleCharacter"></SingleCharacter>
        </div>
    </div>
    </div>
</template>

<style scoped>
 

</style>