<template>
  <div>
    <table class="table table-striped mt-4">
      <thead>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
      </thead>
      <tbody>
        <tr v-for="(juego, index) in lista" :key="index">
          <td>
            {{ juego.codigo }}
          </td>
          <td>
            {{ juego.nombre }}
          </td>
          <td>
            {{ juego.stock }}
          </td>
          <td>${{ juego.precio }}</td>
          <td>
            <button @click="vender(juego)" class="btn btn-primary">
              Vender
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["lista"],

  methods: {
    vender(juego) {
      this.$store.dispatch("venderJuego", juego);
      setTimeout(() => {
        alert("Venta procesada");
      }, 3000);
    },
  },
};
</script>

<style scoped>
td {
  font-weight: bold;
  color: #000;
  font-size: 20px;
}
</style>