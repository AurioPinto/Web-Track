<template>
  <div class="event">
    <active></active>
  </div>
</template>

<script>
  import active from '../components/active'
  export default {
    name: 'active130',
    components: {active},
    data: function () {
      return {
      }
    }
  }
</script>

<style scoped>
.event{
  background-color: #ffffff;
  min-height: 100vh;

}
</style>
