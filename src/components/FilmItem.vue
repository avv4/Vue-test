<template>
  <router-link class="film-item" :to="{ name: 'Film', params: { id: item.episode_id, fetchUrl: item.url } }">
    <h5>{{ item.title }}</h5>
    <p>Producer: {{ item.producer }}</p>
    <p>Episode: {{ item.episode_id }}</p>
  </router-link>
</template>

<script>

import { mapActions } from "vuex"

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },
}

</script>

<style lang="scss">
  .film-item {
    margin: 20px;
    background-color: #eee;
    color: #111;
    text-decoration: none;
    flex-basis: calc(50% - 40px);

    &:hover {
      background-color: #dedfdf;
    }
    
    h5 {
      font-size: 24px;
    }
  }
</style>