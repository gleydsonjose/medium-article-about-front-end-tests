<template>
  <section class="page-5">
    <Card />
  </section>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Page5",
  components: {
    Card,
  },
};
</script>

<style scoped>
.page-5 {
  margin-top: 60px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
