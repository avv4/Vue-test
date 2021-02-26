<template>
  <div v-if="!loadingState" class="film-list">
    <FilmItem v-for="(item, index) in getFilteredFilms" :item="item" :key="index"/>
    <div v-if="!getFilteredFilms.length" class="empty-list">Фильмов не найдено</div>
  </div>
  <div v-else class="loader"></div>
</template>

<script>

import {mapGetters, mapActions} from "vuex"
import FilmItem from "@/components/FilmItem"

export default {
  components: {
    FilmItem
  },

  data() {
    return {
      loadingState: true,
    }
  },

  computed: {
    ...mapGetters(['getAllFilms', 'getFilteredFilms'])
  },

  methods: {
    ...mapActions(['fetchFilms'])
  },

  async mounted() {
    this.fetchFilms().then(() => {
      this.loadingState = false
    })
  }
}
</script>

<style lang="scss">
  .film-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 900px;
    max-width: 100%;
    margin: 0 auto;

    .empty-list {
      text-align: center;
      width: 100%;
      margin-top: 50px;
      opacity: .5;
    }
  }
</style>