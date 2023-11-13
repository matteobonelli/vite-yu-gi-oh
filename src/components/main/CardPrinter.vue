<template>
    <div class="col-12 col-md-2 mb-3 ">
        <img :src="image" :alt="name">
        <div class="text-center p-2">
            <h4 class="text-light mb-3">{{ name }}</h4>
            <h5>{{ archetype }}</h5>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CardPrinter',
    props: {
        image: String,
        name: String,
        archetype: String

    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.text-center {
    background-color: $primary_color;
    height: 150px;
}

img {
    width: 100%;
}
</style>