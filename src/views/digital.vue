<template>
    <div class="model">
      <digital></digital>
    </div>
</template>

<script>
import digital from '../components/digital'
export default {
  name: 'digital3',
  components: {digital},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .model{
    background-color: #fff;
    min-height: 100vh;
  }
</style>
