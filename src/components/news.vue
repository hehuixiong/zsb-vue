<template>
  <div id="news">
    <!-- 中文版 -->
    <div v-if="this.$store.state.Language=='Chinese'">
      <div class="zsb_bridge">
        <img src="../../static/images/cn-zsb-bridge.jpg" alt="">
      </div>
      <div class="zsb_announcement">
        <div class="w clearfix">
          <!-- 标题 -->
          <div class="title left">
            <ul>
              <li @click="isshowhide(0)" :class="{active:0==num}">
                <router-link to="/news">新闻资讯</router-link>
              </li>
              <li @click="isshowhide(1)" :class="{active:1==num}">
                <router-link to="/news">行业资讯</router-link>
              </li>
            </ul>
          </div>
          <!-- 内容 -->
          <router-view></router-view>
          <div class="clear" style="height:100px;"></div>
        </div>
      </div>
    </div>
    <!-- 英文版 -->
    <div v-if="this.$store.state.Language=='English'">
      <div class="zsb_bridge">
        <img src="../../static/images/en-zsb-bridge.jpg" alt="">
      </div>
      <div class="zsb_announcement">
        <div class="w clearfix">
          <!-- 标题 -->
          <div class="title left">
            <ul>
              <li @click="isshowhide(0)" :class="{active:0==num}">
                <router-link to="/news">News</router-link>
                
              </li>
              <li @click="isshowhide(1)" :class="{active:1==num}">
                <router-link to="/news">Industry news</router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
          <div class="clear" style="height:100px;"></div>
        </div>
      </div>
    </div>
    <!-- 繁体版 -->
    <div v-if="this.$store.state.Language=='Complex'">
      <div class="zsb_bridge">
        <img src="../../static/images/ft-zsb-bridge.jpg" alt="">
      </div>
      <div class="zsb_announcement">
        <div class="w clearfix">
          <!-- 标题 -->
          <div class="title left">
            <ul>
              <li @click="isshowhide(0)" :class="{active:0==num}">
                <router-link to="/news">新聞資訊</router-link>
              </li>
              <li @click="isshowhide(1)" :class="{active:1==num}">
                <router-link to="/news">行業資訊</router-link>
              </li>
            </ul>
          </div>
          <!-- 内容 -->
          <router-view></router-view>
          <div class="clear" style="height:100px;"></div>
        </div>
      </div>
    </div>
    <!-- 合作媒体 -->
    <div class="zsb_cooperation">
      <div class="w">
        <h3 v-if="this.$store.state.Language=='Chinese'">合作媒体</h3>
        <h3 v-if="this.$store.state.Language=='English'">COOPERATIVE MEDIA</h3>
        <h3 v-if="this.$store.state.Language=='Complex'">合作媒體</h3>
        <ul class="clearfix">
          <li>
            <img src="../../static/images/zsb_third01.png" alt="">
          </li>
          <li>
            <img src="../../static/images/zsb_third02.png" alt="">
          </li>
          <li>
            <img src="../../static/images/zsb_third03.png" alt="">
          </li>
          <li>
            <img src="../../static/images/zsb_third04.png" alt="">
          </li>
          <li>
            <img src="../../static/images/zsb_third05.png" alt="">
          </li>
          <li>
            <img src="../../static/images/zsb_third06.png" alt="">
          </li>
          <li>
            <img src="../../static/images/zsb_third07.png" alt="">
          </li>
          <li>
            <img src="../../static/images/zsb_third08.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 0,
      }
    },
    methods: {
      isshowhide(index) {
        this.num = index;
        this.$store.dispatch("chageNum", index)
      },
      detailsBtn(index) {
        this.num = index;
        alert(1)
      }
    },
  }

</script>

<style scoped>


</style>
