<template>

  <div class="default">
    <UserInfo></UserInfo>
  </div>
</template>

<script>
import UserInfo from '../components/UserInfo'

export default {
  name: 'detail',
  components: {UserInfo},
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
