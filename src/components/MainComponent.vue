<template>
    <div class="p-5 bg-light container ">
        <FoundCardsComponent />
        <div class="row row-cols-md-5  ">
            <CardPrinter v-for="card in store.cardsList" :image="card.card_images[0].image_url" :name="card.name"
                :archetype="card.archetype" :key="card.id" />
        </div>


    </div>
</template>

<script>
import FoundCardsComponent from './main/FoundCardsComponent.vue'
import CardPrinter from './main/CardPrinter.vue';
import { store } from '../data/store'
export default {
    name: 'MainComponent',
    components: {
        CardPrinter,
        FoundCardsComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>