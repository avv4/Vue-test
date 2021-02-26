<template>
  <div v-if="!loadingState" class="film">
    <h5>Title: {{ getCurrentFilm.title }}</h5>
    <p>Producer: {{ getCurrentFilm.producer }}</p>
    <p>Director: {{ getCurrentFilm.director }}</p>
    <br>
    <p class="film-text">{{ getCurrentFilm.opening_crawl }}</p>
  </div>
  <div v-else class="loader"></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  props: ['id', 'fetchUrl'],
  data() {
    return {
      loadingState: true,
    }
  },
  computed: {
    ...mapGetters(['getCurrentFilm'])
  },
  methods: {
    ...mapActions(['loadFilm'])
  },

  created() {
    this.loadFilm(this.fetchUrl).then(()=>{
      this.loadingState = false
    })
  },
}
</script>

<style lang="scss">
  .film {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #eee;
    margin-top: 50px;
  }
</style>