import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPointApi: 'cardinfo.php?num=39&offset=0',
    cardsList: []
})