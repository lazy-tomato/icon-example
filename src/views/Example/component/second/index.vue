<template>
  <div class="second">
    <h2>2.CSS-Sprite如何使用</h2>
    <h4>2.1 通过css的background-position属性，对包含很多小图片的Sprite图片进行展示</h4>
    <div class="second-icon">
      <div
        :style="{ backgroundImage: 'url(' + icon + ')' }"
        class="icon icon-one"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + icon + ')' }"
        class="icon icon-two"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + icon + ')' }"
        class="icon icon-three"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + icon + ')' }"
        class="icon icon-four"
      ></div>
    </div>
    <div>
      <h4>2.2 通过css的background-position属性，配合CSS动画,实现动态的小人(好像有些像素的小游戏，主角的移动就是用这个做的，不过哪个是用监听按键事件，切换不同的精灵图实现的)</h4>
      <div
        :style="{ backgroundImage: 'url(' + snowman + ')' }"
        class="snowman"
      ></div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      icon: require("@/assets/images/iconSprite.png"),
      snowman: require("@/assets/images/snowmanSprite.jpg"),
    };
  },
};
</script>

<style scoped>
.second {
  color: #fff;
  min-height: 100%;
  height: auto;
  text-align: center;
}
h4 {
  padding: 60px 0 10px;
  border-bottom: 1px solid #21262d;
}

.second-icon {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  width: 40px;
  height: 40px;
  /* 是否重复 no-repeat 不重复 */
  background-repeat: no-repeat;
}

.icon-one {
  /* 背景定位，可以通过百分比去设置 */
  background-position: 5% 4%;
}

.icon-two {
  /* 背景定位，可以通过px去设置 */
  background-position: -22px -78px;
}

.icon-three {
  /* 背景定位，可以通过top right center left bottom去设置 */
  background-position: center -139px;
}

.icon-four {
  /* 当然也可以组合使用 */
  background-position: 20% -205px;
}

/* 配合css动画可以实现动态的小人 */
.snowman {
  margin: 0 auto;
  width: 122px;
  height: 180px;
  animation: walk 1s steps(4) infinite;
}

@keyframes walk {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -486px;
  }
}
</style>