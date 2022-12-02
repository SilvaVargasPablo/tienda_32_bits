<template>
  <div class="container mt-4">
    <div class="alert alert-primary">
      Cantidad de juegos con stock: {{ juegoStock.length }}
    </div>

    <tablaVentas :lista="juegoStock"></tablaVentas>
  </div>
</template>

<script>
import tablaVentas from "../components/tableVentas";

export default {
  computed: {
    juegoStock() {
      return this.$store.getters.filtrarStock;
    },
  },

  components: {
    tablaVentas,
  },
};
</script>

