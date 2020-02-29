<template>
  <div class="apple">
    <ios></ios>
  </div>
</template>

<script>
import ios from '../components/ios'
export default {
  name: 'ios12',
  components: {ios},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .apple{
    background-color: #00263C;
    min-height: 100vh;
  }
</style>
