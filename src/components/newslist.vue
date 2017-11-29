<template>
  <div id="newslist">
    <!-- 中文版 -->
    <div class="zsb_announcement" v-if="this.$store.state.Language=='Chinese'">
      <div class="content left">
        <p>
          你当前的位置：新闻动态>新闻公告
        </p>
        <div class="xw_border" v-if="this.$store.state.num==0">
          <h2>新闻公告</h2>
          <ul>
            <li>
              <router-link to="/news/details/1">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details/2">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details/3">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details/4">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
          </ul>
        </div>
        <div class="xw_border" v-show="this.$store.state.num==1">
          <h2>行业资讯</h2>
          <ul>
            <li>2招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</li>
            <li>2招商帮受邀参加我国信用体系建设促进工程启动，助力企业公信力建设传播</li>
            <li>2招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</li>
            <li>2招商帮受邀参加我国信用体系建设促进工程启动，助力企业公信力建设传播</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 英文版 -->
    <div class="zsb_announcement" v-if="this.$store.state.Language=='English'">
      <div class="content left">
        <p>
          Your position：News events>News
        </p>
        <div class="xw_border" v-if="this.$store.state.num==0">
          <h2>NEWS</h2>
          <ul>
            <li>
              <router-link to="/news/details">1Our vision: convoy for the enterprises, and steer for the industry</router-link>
            </li>
            <li>
              <router-link to="/news/details">1Our vision: convoy for the enterprises, and steer for the industry</router-link>
            </li>
            <li>
              <router-link to="/news/details">1Our vision: convoy for the enterprises, and steer for the industry</router-link>
            </li>
            <li>
              <router-link to="/news/details">1Our vision: convoy for the enterprises, and steer for the industry</router-link>
            </li>
          </ul>
        </div>
        <div class="xw_border" v-show="this.$store.state.num==1">
          <h2>INDUSTRY NEWS</h2>
          <ul>
            <li>
              <router-link to="/news/details">1Our vision: convoy for the enterprises, and steer for the industry</router-link>
            </li>
            <li>
              <router-link to="/news/details">1Our vision: convoy for the enterprises, and steer for the industry</router-link>
            </li>
            <li>
              <router-link to="/news/details">1Our vision: convoy for the enterprises, and steer for the industry</router-link>
            </li>
            <li>
              <router-link to="/news/details">1Our vision: convoy for the enterprises, and steer for the industry</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 繁体版 -->
    <div class="zsb_announcement" v-if="this.$store.state.Language=='Complex'">
      <div class="content left">
        <p>
          你當前的位置：新聞動態>新聞公告
        </p>
        <div class="xw_border" v-if="this.$store.state.num==0">
          <h2>新闻公告</h2>
          <ul>
            <li>
              <router-link to="/news/details">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
          </ul>
        </div>
        <div class="xw_border" v-show="this.$store.state.num==1">
          <h2>行业资讯</h2>
          <ul>
            <li>
              <router-link to="/news/details">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
            <li>
              <router-link to="/news/details">1招商帮传媒携手广东电视台《品牌传奇》栏目建立广州采编分站！</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: {
      return: {},
    },
    methods: {},
  }

</script>

<style scoped>


</style>
