<template>
  <div>
    <div class="first">
      <img width="65" height="60" src="../assets/images/today.png" alt />
    </div>
    <div class="a"></div>
  </div>
</template>

<script>
export default {
  name: "atom",
  data() {
    return {
      user: {
        name: "atom"
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/active");
    }, 3000);
  }
};
</script>

<style scoped>
.first {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
