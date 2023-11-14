import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPointApi: 'cardinfo.php',
    archetypesUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardsList: [],
    archetypesList: []
})