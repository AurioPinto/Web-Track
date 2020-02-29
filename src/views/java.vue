<template>
    <div class="python">
      <java></java>
    </div>
</template>

<script>
  import java from '../components/java'
  export default {
    name: 'java311',
    components: {java},
    data: function () {
      return {
      }
    }
  }
</script>

<style scoped>
  .python {
    background-color: #fff;
    min-height: 100vh;
  }
</style>
