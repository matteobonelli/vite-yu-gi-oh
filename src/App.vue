<template>
  <LoadingScreen v-if="loaded === true" />
  <div v-else>
    <HeaderComponent />
    <main class="py-5">
      <SelectComponent @archetype-selector="getArchetype" />
      <MainComponent />
    </main>
  </div>
</template>

<script>
import SelectComponent from './components/SelectComponent.vue';
import LoadingScreen from './components/LoadingScreen.vue'
import MainComponent from './components/MainComponent.vue';
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    LoadingScreen,
    SelectComponent
  },
  data() {
    return {
      loaded: true,
      store,
      params: {
        num: 50,
        offset: 0,
      },
    }
  },
  methods: {
    getArchetype(value) {
      if (value) {
        this.params.archetype = value
      } else {
        this.params.archetype = null
      }
      this.getCards()

    },
    getCards() {
      axios.get(store.apiUrl + store.endPointApi, { params: this.params }).then((resp) => {
        store.cardsList = resp.data.data
      })
    },

  },
  created() {
    function getCardsURL() {
      return axios.get(store.apiUrl + store.endPointApi, { params: { num: 50, offset: 0 } });
    }

    function getArchetypesURL() {
      return axios.get(store.archetypesUrl);
    }

    Promise.all([getCardsURL(), getArchetypesURL()])
      .then(function (results) {
        store.cardsList = results[0].data.data
        store.archetypesList = results[1].data
        // console.log(store.cardsList)
        // console.log(store.archetypesList)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.loaded = false
      });
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

main {
  background-color: $primary_color ;
}
</style>