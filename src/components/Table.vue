<template>
  <div>
    <table class="table">
      <thead>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
      </thead>
      <tbody>
        <tr
          :style="`background: ${juego.color}`"
          v-for="(juego, index) in lista"
          :key="index"
        >
          <td>
            {{ juego.codigo }}
          </td>
          <td>
            {{ juego.nombre }}
          </td>
          <td>
            {{ juego.stock }}
          </td>
          <td>
            {{ juego.precio }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["lista"],
};
</script>

<style scoped>
td {
  font-weight: bold;
  color: rgb(25, 24, 24);
  font-size: 20px;
}
</style>