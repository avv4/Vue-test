<template>
  <div id="app">
    <MainHeader/>
    <main class="main">
      <router-view/>
    </main>
    <MainFooter/>
  </div>
</template>

<script>
  import MainHeader from "@/components/MainHeader";
  import MainFooter from "@/components/MainFooter";

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainFooter
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .main {
      flex: 1 0 auto
    }
  }
</style>
