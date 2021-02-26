<template>
  <div class="sortings">
    <div class="sort-by-name">
      <label for="sort-by-name-select">Сортировка: </label>
      <select id="sort-by-name-select" v-model="$store.state.films.selectedValue">
        <option value="desk">По алфавиту</option>
        <option value="ask">В обратном порядке</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {

  computed: {
    ...mapGetters(['getFilteredFilms']),
    selectedValue: {
      get() {
        return this.$store.state.selectedValue
      },

      set(val) {
        this.$store.commit('updateSelectByName', val)
      }
    }
  },
}
</script>

<style>
  .sortings {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 15px 0;
  }
</style>