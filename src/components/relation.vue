<template>
  <div id="relation">
    <!-- 中文版 -->
    <div v-if="this.$store.state.Language=='Chinese'">
      <div class="zsb_relation">
        <img src="../../static/images/cn-zsb-lianxi.jpg" alt="">
      </div>
      <div class="zsb_guanyu_lianxi">
        <div class="w">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/relation' }">关于我们</el-breadcrumb-item>
            <el-breadcrumb-item>联系我们</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="guanyu_lianxi">
            <div class="guanyu_left left">
              <div class="active">{{text}}</div>
              <ul>
                <li @click="textCut(1)">联系我们</li>
                <li @click="textCut(2)">关于我们</li>
              </ul>
            </div>
            <div class="guanyu_right right">
              <h2>总部联系方式</h2>
              <h3>招商帮</h3>
              <p>地址：广州市白云区机场路1600号汇创意产业园C3栋</p>
              <p>网址(Web)：www.zsb.cn</p>
              <p>服务热线：18902221200 熊经理 / 18923091795 柯经理</p>
              <div class="atlas">
                <img src="../../static/images/ditu.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 英文版 -->
    <div v-if="this.$store.state.Language=='English'">
      <div class="zsb_relation">
        <img src="../../static/images/en-zsb-lianxi.jpg" alt="">
      </div>
      <div class="zsb_guanyu_lianxi">
        <div class="w">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/relation' }">About Us</el-breadcrumb-item>
            <el-breadcrumb-item>ContactUs</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="guanyu_lianxi">
            <div class="guanyu_left left">
              <div class="active">{{textEn}}</div>
              <ul>
                <li @click="textCut(1)">ContactUs</li>
                <li @click="textCut(2)">About Us</li>
              </ul>
            </div>
            <div class="guanyu_right right">
              <h2>Contact Information</h2>
              <h3>ZhangShangBang</h3>
              <p>Site：1600, huiyuan creative industrial park, no.1600, airport road, baiyun district, guangzhou</p>
              <p>URL(Web)：www.zsb.cn</p>
              <p>Phone：18902221200 熊经理 / 18923091795 柯经理</p>
              <div class="atlas">
                <img src="../../static/images/ditu.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 繁体版 -->
    <div v-if="this.$store.state.Language=='Complex'">
      <div class="zsb_relation">
        <img src="../../static/images/ft-zsb-lianxi.jpg" alt="">
      </div>
      <div class="zsb_guanyu_lianxi">
        <div class="w">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/relation' }">關於我們</el-breadcrumb-item>
            <el-breadcrumb-item>聯繫我們</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="guanyu_lianxi">
            <div class="guanyu_left left">
              <div class="active">{{text}}</div>
              <ul>
                <li @click="textCut(1)">聯繫我們</li>
                <li @click="textCut(2)">關於我們</li>
              </ul>
            </div>
            <div class="guanyu_right right">
              <h2>總部聯繫方式</h2>
              <h3>招商幫</h3>
              <p>地址：廣州市白雲區機場路1600號匯創意產業園C3棟</p>
              <p>網址(Web)：www.zsb.cn</p>
              <p>服務熱線：18902221200 熊經理 / 18923091795 柯經理</p>
              <div class="atlas">
                <img src="../../static/images/ditu.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: '联系我们',
        textEn: 'Contact Us',
      }
    },
    methods: {
      textCut(index) {
        if (index == 1) {
          this.text = '联系我们';
          this.textEn = 'Contact Us'
        } else {
          this.text = '关于我们';
          this.textEn = 'About Us'
        }
      }
    },
  }

</script>

<style scoped>

</style>
