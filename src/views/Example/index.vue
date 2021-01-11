<template>
  <div class="example">
    <div class="nav">
      <el-menu
        :default-active="$route.path"
        background-color="#0d1117"
        v-for="(item) in routes"
        :key="item.title"
        router
      >
        <el-menu-item :index="$router.options.routes[2].path + '/'+ item.path">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </el-menu>
     
    </div>
    <router-view class="center" />
  </div>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes[2].children;
    },
  },
};
</script>

<style scoped>
.example {
  width: 100%;
  height: 100%;
}
.nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 320px;
  background-color: #0d1117;
  border-right: 1px solid #21262d;
  overflow-y: auto;
}

.nav  .el-menu{
  border: none;
}

.center {
  width: 100%;
  height: 100%;
  padding-left: 320px;
  background-color: #06090f;
}
</style>
