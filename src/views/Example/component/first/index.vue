<template>
  <div class="first">
    <h2>1.初次接触:直接引入本地图片</h2>
    <div>
      <h4>1.1 引入本地图片</h4>
      <img src="@/assets/images/jacket.png" alt="上衣" />
      <!-- 下面这种用法也可以    `@` 就等于 `/src` -->
      <!-- <img src="../../../../assets/images/jacket.png" alt="上衣" /> -->

      <h4>1.2 引入在线链接</h4>
      <img
        src="https://upload.jianshu.io/users/upload_avatars/13278218/60803b63-0f9d-490e-9c41-1511c56025d4?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
        alt="上衣"
      />

      <h4>1.3 require形式使用</h4>
      <img :src="imageShorts" alt="短裤" />

      <h4>1.4 import形式使用</h4>
      <img :src="socks" alt="袜子" />

      <h4>1.5 for循环遍历使用</h4>
      <div v-for="item in imagesList" :key="item.url">
        <img :src="item.url" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import socks from "@/assets/images/socks.png";
export default {
  data() {
    return {
      imageShorts: require("@/assets/images/shorts.png"),
      socks: socks,
      imagesList: [
        { url: "@/assets/images/jacket.png" },
        { url: "../../../../assets/images/socks.png" },
        {
          url:
            "https://upload.jianshu.io/users/upload_avatars/13278218/60803b63-0f9d-490e-9c41-1511c56025d4?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
        },
        { url: require("@/assets/images/shorts.png") },
        { url: socks },
      ],
    };
  },
};
</script>

<style scoped>
.first {
  color: #fff;
  min-height: 100%;
  height: auto;
  text-align: center;
}
h4 {
  padding: 60px 0 10px;
  border-bottom: 1px solid #21262d;
}
img {
  width: 100px;
  height: 100px;
}
</style>