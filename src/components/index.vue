<template>
  <div id="index">
    <!-- 中文版 -->
    <div v-if="this.$store.state.Language=='Chinese'">
      <!-- 轮播图 -->
      <div class="zsb_carousel">
        <template>
          <el-carousel indicator-position="outside">
            <el-carousel-item>
              <img src="../../static/images/cn-bag01.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../static/images/cn-hd01.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../static/images/cn-bag01.jpg" alt="">
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <!-- 广告 -->
      <div class="zsb_adv">
        <div class="w">
          <ul class="clearfix">
            <li>
              <a href="http://www.zsb.cc" target="_blank">
                <img src="../../static/images/zsb-gg-01.png" alt="">
              </a>
            </li>
            <li>
              <a href="http://www.zsb.cn" target="_blank">
                <img src="../../static/images/zsb-gg-02.png" alt="">
              </a>
            </li>
            <li>
              <a href="http://www.zsb.net" target="_blank">
                <img src="../../static/images/zsb-gg-03.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 英文版 -->
    <div v-if="this.$store.state.Language=='English'">
      <!-- 轮播图 -->
      <div class="zsb_carousel">
        <template>
          <el-carousel indicator-position="outside">
            <el-carousel-item>
              <img src="../../static/images/en-bag01.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../static/images/en-hd01.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../static/images/en-bag01.jpg" alt="">
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <!-- 广告 -->
      <div class="zsb_adv">
        <div class="w">
          <ul class="clearfix">
            <li>
              <a href="http://www.zsb.cc" target="_blank">
                <img src="../../static/images/en-zsb-gg-01.png" alt="">
              </a>
            </li>
            <li>
              <a href="http://www.zsb.cn" target="_blank">
                <img src="../../static/images/en-zsb-gg-02.png" alt="">
              </a>
            </li>
            <li>
              <a href="http://www.zsb.net" target="_blank">
                <img src="../../static/images/en-zsb-gg-03.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 繁体版 -->
    <div v-if="this.$store.state.Language=='Complex'">
      <!-- 轮播图 -->
      <div class="zsb_carousel">
        <template>
          <el-carousel indicator-position="outside">
            <el-carousel-item>
              <img src="../../static/images/ft-bag01.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../static/images/ft-hd01.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../static/images/ft-bag01.jpg" alt="">
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <!-- 广告 -->
      <div class="zsb_adv">
        <div class="w">
          <ul class="clearfix">
            <li>
              <a href="http://www.zsb.cc" target="_blank">
                <img src="../../static/images/zsb-gg-ft-01.png" alt="">
              </a>
            </li>
            <li>
              <a href="http://www.zsb.cn" target="_blank">
                <img src="../../static/images/zsb-gg-ft-02.png" alt="">
              </a>
            </li>
            <li>
              <a href="http://www.zsb.net" target="_blank">
                <img src="../../static/images/zsb-gg-ft-03.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div style="height:20px;">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
    },
  }

</script>

<style scoped>


</style>
