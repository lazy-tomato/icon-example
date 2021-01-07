  
<template>
  <div class="not-find">
    <div class="text">
      <h4>404 您访问的页面不存在</h4>
      <p>请检查您输入的地址是否正确，或者点击下面的按钮返回首页</p>
      <el-button class="back-button" type="primary" round size="medium" @click="toBack">
        返回首页
      </el-button>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "notFind",
  methods:{
    toBack(){
       this.$router.push({
        path: "/",
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.not-find {
  width: 100%;
  min-height: 100%;
  background-color: rgb(253, 238, 232);
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    margin-right: 40px;
    width: 300px;
    p {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      margin-bottom: 30px;
    }
    h4 {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      margin-bottom: 10px;
    }
    .back-button {
      border: none;
      background-color: pink;
    }
  }

  ul {
    width: 244px;
    height: 200px;
    overflow: hidden;

    li {
      float: left;
      width: 20px;
      height: 20px;
      margin-right: 4px;
      margin-top: 60px;
      background-color: green;
      border-radius: 10px;
    }

    li:last-child {
      margin-right: 0;
    }

    li:nth-child(1) {
      background-color: #f62e74;
      animation: mylove1 4s infinite 0.15s;
    }

    li:nth-child(2) {
      background-color: #f45330;
      animation: mylove2 4s infinite 0.3s;
    }

    li:nth-child(3) {
      background-color: #ffc883;
      animation: mylove3 4s infinite 0.45s;
    }

    li:nth-child(4) {
      background-color: #30d268;
      animation: mylove4 4s infinite 0.6s;
    }

    li:nth-child(5) {
      background-color: red;
      animation: mylove5 4s infinite 0.75s;
    }

    li:nth-child(6) {
      background-color: #784697;
      animation: mylove4 4s infinite 0.9s;
    }

    li:nth-child(7) {
      background-color: #f3f62e;
      animation: mylove3 4s infinite 1.05s;
    }

    li:nth-child(8) {
      background-color: #2ecef6;
      animation: mylove2 4s infinite 1.2s;
    }

    li:nth-child(9) {
      background-color: #f62e74;
      animation: mylove1 4s infinite 1.35s;
    }

    @keyframes mylove1 {
      0% {
        height: 20px;
      }

      30%,
      50% {
        height: 50px;
        transform: translateY(-20px);
      }

      75%,
      100% {
        height: 20px;
        transform: translateY(0px);
      }
    }

    @keyframes mylove2 {
      0% {
        height: 20px;
      }

      30%,
      50% {
        height: 90px;
        transform: translateY(-35px);
      }

      75%,
      100% {
        height: 20px;
        transform: translateY(0px);
      }
    }

    @keyframes mylove3 {
      0% {
        height: 20px;
      }

      30%,
      50% {
        height: 120px;
        transform: translateY(-45px);
      }

      75%,
      100% {
        height: 20px;
        transform: translateY(0px);
      }
    }

    @keyframes mylove4 {
      0% {
        height: 20px;
      }

      30%,
      50% {
        height: 140px;
        transform: translateY(-35px);
      }

      75%,
      100% {
        height: 20px;
        transform: translateY(0px);
      }
    }

    @keyframes mylove5 {
      0% {
        height: 20px;
      }

      30%,
      50% {
        height: 140px;
        transform: translateY(-15px);
      }

      75%,
      100% {
        height: 20px;
        transform: translateY(0px);
      }
    }
  }
}
</style>
