<template>
  <div class="search-bar">
    <form>
      <label for="search">Поиск: </label>
      <input id="search" type="text" v-model="searchText">
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['getFilteredFilms']),
    searchText: {
      get() {
        return this.$store.state.searchText
      },
      set(val) {
        this.$store.commit('updateSearchText', val)
      }
    },

  },
}
</script>

<style lang="scss">
  .search-bar {
    margin: 20px 0;
  }
</style>