<template>
  <div class="forward">
      <nio></nio>
  </div>
</template>

<script>
import nio from '../components/nio'
export default {
  name: 'nio1',
  components: {nio},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .forward{
    background-color: #fff;
    min-height: 100vh;
  }
</style>
