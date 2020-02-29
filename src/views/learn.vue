<template>
    <div class="major">
      <learn></learn>
    </div>
</template>

<script>
  import learn from '../components/learn'
  export default {
    name: 'learn211',
    components: {learn},
    data: function () {
      return {
      }
    }
  }
</script>

<style scoped>
  .major {
    background-color: #fff;
    min-height: 100vh;
  }
</style>
