<template>
    <div class="tool">
      <top></top>
    </div>
</template>

<script>
import top from '../components/top'
export default {
  name: 'top5',
  components: {top},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .tool{
    background-color: #fff;
    min-height: 100vh;
  }
</style>
