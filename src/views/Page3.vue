<template>
  <section class="page-3">
    <SearchBar
      placeholder="Faça uma buscas por algo aqui"
      :max-length="100"
      :search-value.sync="searchValue"
      :validations.sync="searchBarValidations"
    />
  </section>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Page3",
  components: {
    SearchBar,
  },
  data: () => ({
    searchValue: "",
    searchBarValidations: {
      charactersLength: true,
    },
  }),
};
</script>

<style scoped>
.page-3 {
  margin-top: 60px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
