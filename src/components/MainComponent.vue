<template>
    <div class="p-5 bg-light container ">
        <div class="yugioh-secondary p-4">
            <h4 class="text-light">Found {{ store.cardsList.length }} cards</h4>
        </div>
        <div class="row row-cols-md-5  ">
            <CardPrinter v-for="card in store.cardsList" :image="card.card_images[0].image_url" :name="card.name"
                :archetype="card.archetype" />
        </div>


    </div>
</template>

<script>
import CardPrinter from './main/CardPrinter.vue';
import { store } from '../data/store'
export default {
    name: 'MainComponent',
    components: {
        CardPrinter
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.yugioh-secondary {
    background-color: $secondary_color ;
}
</style>