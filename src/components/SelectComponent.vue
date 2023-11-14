<template>
    <div class="container mb-4">
        <select name="" id="" v-model="archetype" @change="$emit('ArchetypeSelector', archetype)">
            <option value="">All</option>
            <option value="-Eyes Dragon">-Eyes Dragon</option>
            <option value="A.I.">A.I.</option>
            <option value="ABC">ABC</option>
            <option value="Abyss Actor">Abyss Actor</option>
            <option value="Abyss Script">Abyss Script</option>
            <option value="Abyss-">Abyss-</option>
            <option value="Adamancipator">Adamancipator</option>
            <option value="Advanced Crystal Beast">Advanced Crystal Beast</option>
            <option value="Adventurer Token">Adventurer Token</option>
            <option value="Aesir">Aesir</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            archetype: ''
        }
    }
}
</script>

<style lang="scss" scoped></style>