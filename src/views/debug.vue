<template>
  <div class="okay">
    <debug></debug>
  </div>
</template>

<script>
import debug from "../components/debug";
export default {
  name: "debug90",
  components: { debug },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.okay {
  background-color: #fff;
  min-height: 100vh;
}
</style>
