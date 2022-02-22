<template>
  <section class="page-1">
    <Alert v-if="alert.isOpen" />
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Alert from "@/components/Alert.vue";

export default {
  name: "Page1",
  components: {
    Alert,
  },
  computed: {
    ...mapState(["alert"]),
  },
  methods: {
    ...mapActions(["openAlert"]),
  },
  mounted() {
    this.openAlert({
      type: "success",
      message: "Mensagem enviada com sucesso",
      useIcon: true,
    });
  },
};
</script>

<style scoped>
.page-1 {
  margin-top: 60px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
