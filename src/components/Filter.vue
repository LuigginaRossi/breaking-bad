<script>
export default {
    
}
</script>
<template>
    <div class="container">
        <label for="character" class="text-light"></label>
        <input list="options" id="characters" name="character" placeholder="Search:">
    
        <datalist id="options">
            <option value="Chocolate"></option>
            <option value="Coconut"></option>
            <option value="Mint"></option>
            <option value="Strawberry"></option>
            <option value="Vanilla"></option>
        </datalist>
    </div>
</template>

<style scoped>
    input{
        background-color: transparent;
        width: 100%;
        border-radius: 20px;
        padding: .3rem .5rem;
    }
</style>