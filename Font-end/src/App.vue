<script>
import AppHeader from "@/components/Header.vue";
export default {
  components: {
    AppHeader,
  },
}
</script>
<template>

  <div id="app">
    <AppHeader />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>