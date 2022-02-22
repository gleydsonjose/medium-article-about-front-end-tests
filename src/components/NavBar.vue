<template>
  <nav class="navbar">
    <router-link class="navbar__item" :to="{ name: 'page-1' }"
      >Page 1</router-link
    >
    <router-link class="navbar__item" :to="{ name: 'page-2' }"
      >Page 2</router-link
    >
    <router-link class="navbar__item" :to="{ name: 'page-3' }"
      >Page 3</router-link
    >
    <router-link class="navbar__item" :to="{ name: 'page-4' }"
      >Page 4</router-link
    >
    <router-link class="navbar__item" :to="{ name: 'page-5' }"
      >Page 5</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
}

.navbar__item {
  text-decoration: none;
  padding: 12px 20px;
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
  background: transparent;
  transition: background 0.3s ease-out, color 0.3s ease-out;
}

.navbar__item:hover {
  background: #2c3e50;
  color: #fff;
  transition: background 0.3s ease-in, color 0.3s ease-in;
}

.navbar__item:hover:first-child {
  border-radius: 5px 0 0 5px;
}

.navbar__item:hover:last-child {
  border-radius: 0 5px 5px 0;
}

.router-link-active {
  background-color: #2c3e50;
  color: #fff;
}

.router-link-active:first-child {
  border-radius: 5px 0 0 5px;
}

.router-link-active:last-child {
  border-radius: 0 5px 5px 0;
}
</style>
