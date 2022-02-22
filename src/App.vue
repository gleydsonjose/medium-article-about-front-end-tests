<template>
  <section id="app-body">
    <NavBar />

    <main id="main">
      <router-view />
    </main>
  </section>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app-body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
}

#main {
  width: 454px;
}
</style>
