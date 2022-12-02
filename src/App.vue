<template>
  <div id="app">
    <Nav></Nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: { Nav },
};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
