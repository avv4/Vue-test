<template>
  <div class="home">
    <SearchBar/>
    <Sortings/>
    <FilmList/>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar"
import Sortings from "@/components/Sortings"
import FilmList from "@/components/FilmList"

export default {
  components: {
    SearchBar, Sortings, FilmList
  }
}

</script>

<style lang="scss">
  .home {
    padding: 20px 0;
  }
</style>