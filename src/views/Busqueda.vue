<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-auto">
          <label for="search" class="form-label">Buscar:</label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            v-model="id"
            id="search"
            class="form-control"
            name="search"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6">
          <p>
            Cantidad de juegos: <strong>{{ juegosTotal }}</strong>
          </p>
        </div>
        <div class="col-6">
          <p>
            Stock total: <strong>{{ stockTotal }}</strong>
          </p>
        </div>

        <Table :lista="listaJuegos"></Table>
      </div>
    </div>
  </div>
</template>
<script>
import Table from "../components/Table.vue";
export default {
  components: { Table },
  data() {
    return {
      id: "",
    };
  },
  computed: {
    stockTotal() {
      return this.$store.getters.stockTotal;
    },
    juegosTotal() {
      return this.$store.getters.juegosTotal;
    },
    listaJuegos() {
      if (this.id === "") {
        return this.$store.state.juegos;
      } else {
        return this.$store.getters.filtrarJuegos(this.id);
      }
    },
  },
};
</script>
