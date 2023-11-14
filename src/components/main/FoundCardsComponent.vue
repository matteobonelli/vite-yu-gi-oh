<template>
    <div class="yugioh-secondary p-4">
        <h4 class="text-light">Found {{ store.cardsList.length }} cards</h4>
    </div>
</template>

<script>
import { store } from '../../data/store'
export default {
    name: 'FoundCardsComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.yugioh-secondary {
    background-color: $secondary_color ;
}
</style>