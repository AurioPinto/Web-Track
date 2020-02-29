<template>
  <div class="default">
    <branch></branch>
  </div>
</template>

<script>
import branch from '../components/branch'
export default {
  name: 'branch1',
  components: {branch},
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
