<template>
  <section class="page-4">
    <Footer />
  </section>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Page4",
  components: {
    Footer,
  },
};
</script>

<style scoped>
.page-4 {
  margin-top: 60px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
