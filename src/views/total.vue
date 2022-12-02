<template>
  <div class="container mt-4">
    <div class="alert alert-primary">VISTA TOTAL</div>
    <tablaTotal :lista="listaTotal"></tablaTotal>
  </div>
</template>

<script>
import tablaTotal from "../components/tableTotal";

export default {
  components: {
    tablaTotal,
  },
  computed: {
    listaTotal() {
      return this.$store.state.ventas;
    },
  },
};
</script>

<style>
</style>