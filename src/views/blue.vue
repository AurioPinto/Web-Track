<template>
    <div class="sky">
<blue></blue>
</div>
</template>

<script>
import blue from '../components/blue'
export default {
  name: 'blue6',
  components: {blue},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .sky {
    background-color:#F6F6F6;
    height:100%;
    box-sizing: border-box;
    padding: 152px 25px 88px;
    display: flex;
  }
</style>
