<template>
    <div class="digital">
      <app></app>
    </div>
</template>

<script>
import app from '../components/app'
export default {
  name: 'app2',
  components: {app},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .digital{
    background-color: #fff;
    min-height: 100vh;
  }
</style>
