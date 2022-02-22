<template>
  <section class="page-2">
    <Button text="Salvar" type="success" use-icon @click="clickEvent" />
  </section>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Page2",
  components: {
    Button,
  },
  methods: {
    clickEvent() {
      window.alert("Sucesso!");
    },
  },
};
</script>

<style scoped>
.page-2 {
  margin-top: 60px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
