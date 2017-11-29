<template>
  <div id="home">
    <header>
      <div class="w">
        <div class="left" v-if="this.$store.state.Language=='Chinese'">
          服务热线：400-777-3191
        </div>
        <div class="left" v-if="this.$store.state.Language=='English'">
          Contact：400-777-3191
        </div>
        <div class="left" v-if="this.$store.state.Language=='Complex'">
          服務熱線：400-777-3191
        </div>
        <div class="right">
          <!-- 语言/LANGUAGE -->
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              语言/LANGUAGE
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="Chinese">简体中文</el-dropdown-item>
              <el-dropdown-item command="English">English</el-dropdown-item>
              <el-dropdown-item command="Complex">繁体中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
    <!-- 中文版 -->
    <nav v-if="this.$store.state.Language=='Chinese'">
      <div class="w">
        <router-link to="/index" class="zsb_logo left">
          <img src="../../static/images/logo.png" alt="">
        </router-link>
        <div class="zsb_nav right">
          <ul class="clearfix">
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li>
              <router-link to="/regarding">关于我们</router-link>
            </li>
            <li>
              <router-link to="/served">业务服务</router-link>
            </li>
            <li>
              <router-link to="/news">新闻中心</router-link>
            </li>
            <li>
              <router-link to="/activity">展会活动</router-link>
            </li>
            <li>
              <router-link to="/relation">联系我们</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- 英文版 -->
    <nav v-if="this.$store.state.Language=='English'">
      <div class="w">
          <router-link to="/index" class="zsb_logo left">
            <img src="../../static/images/logo.png" alt="">
          </router-link>
        <div class="zsb_nav right">
          <ul class="clearfix">
            <li>
              <router-link to="/index">Home</router-link>
            </li>
            <li>
              <router-link to="/regarding">About us</router-link>
            </li>
            <li>
              <router-link to="/served">Service</router-link>
            </li>
            <li>
              <router-link to="/news">News</router-link>
            </li>
            <li>
              <router-link to="/activity">Events</router-link>
            </li>
            <li>
              <router-link to="/relation">Contact us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- 繁体版 -->
    <nav v-if="this.$store.state.Language=='Complex'">
      <div class="w">
        <router-link to="/index" class="zsb_logo left">
          <img src="../../static/images/logo.png" alt="">
        </router-link>
        <div class="zsb_nav right">
          <ul class="clearfix">
            <li>
              <router-link to="/index">首頁</router-link>
            </li>
            <li>
              <router-link to="/regarding">關於我們</router-link>
            </li>
            <li>
              <router-link to="/served">業務服務</router-link>
            </li>
            <li>
              <router-link to="/news">新聞中心</router-link>
            </li>
            <li>
              <router-link to="/activity">展會活動</router-link>
            </li>
            <li>
              <router-link to="/relation">聯繫我們</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
    <!-- 中文版 -->
    <footer v-if="this.$store.state.Language=='Chinese'">
      <div class="w clearfix">
        <div class="zsb_call left clearfix">
          <div class="call_img left">
            <img src="../../static/images/font-phone.png" alt="">
          </div>
          <div class="call_text left">
            <span>服务热线</span>
            <img src="../../static/images/dianhuahm.png" alt="">
          </div>
        </div>
        <div class="zsb_foot_nav left">
          <ul class="clearfix">
            <li>
              <router-link to="/relation">联系我们</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/regarding">关于我们</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/news">新闻中心</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/served">业务服务</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/activity">展会活动</router-link>
            </li>
          </ul>
          <p>Copyright © 20013-2017 广州招商帮传媒有限公司</p>
        </div>
        <div class="zsb_phone_weixin right">
          <ul class="clearfix">
            <li>
              <img src="../../static/images/zsb-phone-right.png" alt="">
            </li>
            <li @mouseenter="show" @mouseleave="hide">
              <img src="../../static/images/weixin.png" alt="">
            </li>
          </ul>
          <!-- 二维码 -->
          <div class="zsb_ewm" v-if="isshow">
            <img src="../../static/images/zsb-ewm.png" alt="">
          </div>
        </div>
      </div>
    </footer>
    <!-- 英文版 -->
    <footer v-if="this.$store.state.Language=='English'">
      <div class="w clearfix">
        <div class="zsb_call left clearfix">
          <div class="call_img left">
            <img src="../../static/images/font-phone.png" alt="">
          </div>
          <div class="call_text left">
            <span>SERVICE HOTLINE</span>
            <img src="../../static/images/dianhuahm.png" alt="">
          </div>
        </div>
        <div class="zsb_foot_nav left">
          <ul class="clearfix">
            <li>
              <router-link to="/relation">contact us</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/regarding">About us</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/news">News</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/served">corporate services</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/activity">Exhibition</router-link>
            </li>
          </ul>
          <p>Copyright © 20013-2017 Zhaoshangbang Media Co., Ltd.</p>
        </div>
        <div class="zsb_phone_weixin right">
          <ul class="clearfix">
            <li>
              <img src="../../static/images/zsb-phone-right.png" alt="">
            </li>
            <li @mouseenter="show" @mouseleave="hide">
              <img src="../../static/images/weixin.png" alt="">
            </li>
          </ul>
          <!-- 二维码 -->
          <div class="zsb_ewm" v-if="isshow">
            <img src="../../static/images/zsb-ewm.png" alt="">
          </div>
        </div>
      </div>
    </footer>
    <!-- 繁体版 -->
    <footer v-if="this.$store.state.Language=='Complex'">
      <div class="w clearfix">
        <div class="zsb_call left clearfix">
          <div class="call_img left">
            <img src="../../static/images/font-phone.png" alt="">
          </div>
          <div class="call_text left">
            <span>服務熱線</span>
            <img src="../../static/images/dianhuahm.png" alt="">
          </div>
        </div>
        <div class="zsb_foot_nav left">
          <ul class="clearfix">
            <li>
              <router-link to="/relation">聯繫我們</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/regarding">關於我們</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/news">新聞中心</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/served">業務服務</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/activity">展會活動</router-link>
            </li>
          </ul>
          <p>Copyright © 20013-2017 廣州招商幫傳媒有限公司</p>
        </div>
        <div class="zsb_phone_weixin right">
          <ul class="clearfix">
            <li>
              <img src="../../static/images/zsb-phone-right.png" alt="">
            </li>
            <li @mouseenter="show" @mouseleave="hide">
              <img src="../../static/images/weixin.png" alt="">
            </li>
          </ul>
          <!-- 二维码 -->
          <div class="zsb_ewm" v-if="isshow">
            <img src="../../static/images/zsb-ewm.png" alt="">
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isshow: false
      }
    },
    methods: {
      show() {
        this.isshow = true;
      },
      hide() {
        this.isshow = false;
      },
      handleCommand(LANGUAGE) {
        this.$store.dispatch("chageLanguage", LANGUAGE)
      }
    },
  }

</script>

<style scoped>


</style>
