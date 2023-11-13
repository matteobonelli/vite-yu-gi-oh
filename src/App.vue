<template>
  <HeaderComponent />
  <main>
    <MainComponent />
  </main>
</template>

<script>
import MainComponent from './components/MainComponent.vue';
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      const url = store.apiUrl + store.endPointApi
      axios.get(url).then((resp) => {
        store.cardsList = resp.data.data
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