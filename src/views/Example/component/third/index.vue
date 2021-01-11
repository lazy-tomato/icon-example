<template>
  <div class="third">
    <h2>3.iconfont如何使用</h2>
    <h4>3.1 使用Unicode</h4>
    <i class="iconfont">&#xe602;</i>
    <i class="iconfont">&#xe603;</i>
    <i class="iconfont">&#xe604;</i>
    <i class="iconfont">&#xe607;</i>
    <i class="iconfont">&#xe608;</i>
    <i class="iconfont">&#xe60e;</i>
    <i class="iconfont">&#xe60f;</i>
    <i class="iconfont">&#xe610;</i>

    <h4>3.2使用font-class</h4>
    <i class="iconfont icon-shengdantubiao-01"></i>
    <i class="iconfont icon-shengdantubiao-02"></i>
    <i class="iconfont icon-shengdantubiao-03"></i>
    <i class="iconfont icon-shengdantubiao-06"></i>
    <i class="iconfont icon-shengdantubiao-07"></i>
    <i class="iconfont icon-shengdantubiao-12"></i>
    <i class="iconfont icon-shengdantubiao-13"></i>
    <i class="iconfont icon-shengdantubiao-14"></i>

    <h4>3.3使用symbol</h4>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdantubiao-01"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdantubiao-02"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdantubiao-03"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdantubiao-06"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdantubiao-07"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdantubiao-12"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdantubiao-13"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdantubiao-14"></use>
    </svg>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.third {
  color: #fff;
  min-height: 100%;
  height: auto;
  text-align: center;
}
h4 {
  padding: 60px 0 10px;
  border-bottom: 1px solid #21262d;
}

.iconfont{
  font-size: 40px;
}
</style>