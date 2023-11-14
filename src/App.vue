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
        num: 39,
        offset: 0,
      }
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
      const url = store.apiUrl + store.endPointApi
      axios.get(url, { params: this.params }).then((resp) => {
        store.cardsList = resp.data.data
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.loaded = false
      })
    },
    getArchetypes() {
      axios.get(store.archetypesUrl).then((resp) => {
        store.archetypesList = resp.data
      })
    }

  },
  created() {
    this.getCards()
    this.getArchetypes()
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

main {
  background-color: $primary_color ;
}
</style>