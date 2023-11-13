<template>
  <LoadingScreen v-if="loaded === true" />
  <div v-show="loaded === false">
    <HeaderComponent />
    <main class="py-5">
      <MainComponent />
    </main>
  </div>
</template>

<script>
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
    LoadingScreen
  },
  data() {
    return {
      loaded: true,
      store
    }
  },
  methods: {
    getCards() {
      const url = store.apiUrl + store.endPointApi
      axios.get(url).then((resp) => {
        store.cardsList = resp.data.data
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.loaded = false
      })
    }
  },
  created() {
    this.getCards()
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

main {
  background-color: $primary_color ;
}
</style>