<script>
export default {
    props:{
        
        character:{
            /**
             * @property {number} id
             * @property {string} firstName
             * @property {string} lastName
             * @property {string} fullName
             * @property {string} title
             * @property {string} family
             * @property {string} image
             * @property {string} imageUrl
             */
            type: Object,
            required: true,
        }
    }
}
</script>
<template>
    <div class="card border-0">
        <img :src="character.imageUrl" class="card-img-top" :alt="character.lastName">
        <div class="card-body d-flex flex-column align-item-center justify-content-start">
            <h5 class="card-title">{{character.firstName}} {{character.lastName}}</h5>
            <h6 class="card-text">{{character.title}}</h6>
            <small>{{character.family}}</small>
        </div>
    </div>
</template>

<style lang="scss">
    .card-img, .card-img-bottom, .card-img-top {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    }

    .card{
        height: 100%;
        transition: all .3s;
        &:hover{
            opacity: .8;
            transform: scale(1.05);
        }
    }
</style>