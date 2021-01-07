<template>
  <div id="home">
    <h2 class="title">Welcome to visit</h2>

    <div class="center">
      <el-button type="primary" size="medium" @click="toExample"
        >开始查看</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    toExample() {
      this.$router.push({
        path: "/example/first",
      });
    },
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  background-color: #0d1117;
}
.title {
  padding-top: 300px;
  color: #c9d1d9;
  text-align: center;
  font-size: 30px;
}

.center {
  padding-top: 100px;
  text-align: center;
}
</style>
