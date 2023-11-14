<template>
    <div class="container mb-4">
        <select name="arch-selector" id="arch-selector" v-model="text" @change="$emit('ArchetypeSelector', text)">
            <option value="">All</option>
            <option v-for="archetype in store.archetypesList" :value="archetype.archetype_name">{{ archetype.archetype_name
            }}</option>
        </select>
    </div>
</template>

<script>
import { store } from '../data/store'
export default {
    data() {
        return {
            store,
            text: ''
        }
    }
}
</script>

<style lang="scss" scoped>
select {
    width: 150px;
    height: 35px;
    border-color: rgba($color: #000000, $alpha: 0.3);
}
</style>