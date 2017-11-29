<template>
  <div id="activity">
    <!-- 中文版 -->
    <div v-if="this.$store.state.Language=='Chinese'">
      <div class="zsb_jujiao_qqh">
        <img src="../../static/images/cn-zsb-qqh.jpg" alt="">
      </div>
      <div class="zsb_activity_content">
        <div class="w">
          <div class="content content_top">
            <h4>近期展会</h4>
            <ul class="clearfix">
              <li class="left">
                <p>2017第三十五届广州特许连锁加盟展览会</p>
                <span>2017年9月9日—11日, 中国，广州</span>
              </li>
              <li class="left">
                <p>2017第三十五届广州特许连锁加盟展览会</p>
                <span>2017年9月9日—11日, 中国，广州</span>
              </li>
            </ul>
          </div>
          <div class="content">
            <h4>近期展会</h4>
            <ul class="clearfix">
              <li class="left">
                <p>2017第三十五届广州特许连锁加盟展览会</p>
                <span>2017年9月9日—11日, 中国，广州</span>
              </li>
              <li class="left">
                <p>2017第三十五届广州特许连锁加盟展览会</p>
                <span>2017年9月9日—11日, 中国，广州</span>
              </li>
              <li class="left">
                <p>2017第三十五届广州特许连锁加盟展览会</p>
                <span>2017年9月9日—11日, 中国，广州</span>
              </li>
              <li class="left">
                <p>2017第三十五届广州特许连锁加盟展览会</p>
                <span>2017年9月9日—11日, 中国，广州</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 英文版 -->
    <div v-if="this.$store.state.Language=='English'">
      <div class="zsb_jujiao_qqh">
        <img src="../../static/images/en-zsb-qqh.jpg" alt="">
      </div>
      <div class="zsb_activity_content">
        <div class="w">
          <div class="content content_top">
            <h4>A recent exhibition</h4>
            <ul class="clearfix">
              <li class="left">
                <p>The thirty-fifth Guangzhou franchise chain Exhibition</p>
                <span>2017 Hongkong International Franchise Exhibition</span>
              </li>
              <li class="left">
                <p>Guangzhou June 12, 2016 - 11</p>
              </li>
            </ul>
          </div>
          <div class="content">
            <h4>The exhibition period</h4>
            <ul class="clearfix">
              <li class="left">
                <p>The thirty-fifth Guangzhou franchise chain Exhibition</p>
                <span>2017 Hongkong International Franchise Exhibition</span>
              </li>
              <li class="left">
                <p>Guangzhou June 12, 2016 - 11</p>
              </li>
              <li class="left">
                <p>The thirty-fifth Guangzhou franchise chain Exhibition</p>
                <span>2017 Hongkong International Franchise Exhibition</span>
              </li>
              <li class="left">
                <p>Guangzhou June 12, 2016 - 11</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 繁体版 -->
    <div v-if="this.$store.state.Language=='Complex'">
      <div class="zsb_jujiao_qqh">
        <img src="../../static/images/ft-zsb-qqh.jpg" alt="">
      </div>
      <div class="zsb_activity_content">
        <div class="w">
          <div class="content content_top">
            <h4>近期展會</h4>
            <ul class="clearfix">
              <li class="left">
                <p>2017第三十五屆廣州特許連鎖加盟展覽會</p>
                <span>2017年9月9日—11日, 中國，廣州</span>
              </li>
              <li class="left">
                <p>2017第三十五屆廣州特許連鎖加盟展覽會</p>
                <span>2017年9月9日—11日, 中國，廣州</span>
              </li>
            </ul>
          </div>
          <div class="content">
            <h4>近期展会</h4>
            <ul class="clearfix">
              <li class="left">
                <p>2017第三十五屆廣州特許連鎖加盟展覽會</p>
                <span>2017年9月9日—11日, 中國，廣州</span>
              </li>
              <li class="left">
                <p>2017第三十五屆廣州特許連鎖加盟展覽會</p>
                <span>2017年9月9日—11日, 中國，廣州</span>
              </li>
              <li class="left">
                <p>2017第三十五屆廣州特許連鎖加盟展覽會</p>
                <span>2017年9月9日—11日, 中國，廣州</span>
              </li>
              <li class="left">
                <p>2017第三十五屆廣州特許連鎖加盟展覽會</p>
                <span>2017年9月9日—11日, 中國，廣州</span>
              </li>
            </ul>
          </div>
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
      return {}
    },
    methods: {},
  }

</script>

<style scoped>


</style>
