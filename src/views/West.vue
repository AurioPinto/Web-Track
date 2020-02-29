<template>

  <div class="default">
    <West></West>
  </div>
</template>

<script>
import West from '../components/west'
export default {
  name: 'detail',
  components: {West, West},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .default{
    background-color: #fff;
    min-height: 100vh;
  }
</style>
