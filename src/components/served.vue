<template>
  <div id="served">
    <!-- 中文版 -->
    <div v-if="this.$store.state.Language=='Chinese'">
      <div class="zsb_dingyi">
        <img src="../../static/images/cn-zsb-dingyi.jpg" alt="">
      </div>
      <div class="zsb_zhaoshang">
        <div class="w">
          <div class="zsb_platform">
            <div class="platform platform1">招商平台</div>
            <div class="platform platform2"></div>
            <div class="platform platform3"></div>
            <div class="zsb_introduce zsb_introduce1">
              <h2>平台推广</h2>
              <p>
                旗下有21大矩阵平台
                <br>将招商平台与搜索推广相结合
                <br>锁定行业95.9%的投资者,多元化的推广入口
                <br>实现一份投入，多份回报
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce2">
              <h2>多媒体流量</h2>
              <p>
                集合大搜+信息流+全网多媒体平台数据资产
                <br>一站实现流量过滤+流量转化+流量分发
                <br>享受最大性价比的效果
                <br>为千万项目找到合适的流量落地
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce3">
              <h2>高效对接</h2>
              <p>
                严格客服对接体系制定
                <br>365*24有求必应
                <br>达到最大产出比
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce4">
              <h2>核心服务</h2>
              <p>
                将各行媒介资源立体化收集
                <br>去除一切中间渠道环节
                <br>完成企业品牌落地、企业形象高效转化
              </p>
            </div>
          </div>
          <h2>海纳百川，精选全球的高品质应用</h2>
          <p>别人都在用什么？更多关联产品、定制化服务，为智能运营锦上添花</p>
          <ul class="zsb_zs clearfix">
            <li>
              <div class="img">
                <img src="../../static/images/guanggao1.png" alt="">
              </div>
              <span>网络广告</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao2.png" alt="">
              </div>
              <span>网络托管</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao3.png" alt="">
              </div>
              <span>搜索竞价</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao4.png" alt="">
              </div>
              <span>VR推广</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao5.png" alt="">
              </div>
              <span>搜索推广</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao6.png" alt="">
              </div>
              <span>团队培训</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao7.png" alt="">
              </div>
              <span>品牌VI策划</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao8.png" alt="">
              </div>
              <span>明星助力</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao9.png" alt="">
              </div>
              <span>网络培训</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao10.png" alt="">
              </div>
              <span>项目策划</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao11.png" alt="">
              </div>
              <span>360全景秀</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao12.png" alt="">
              </div>
              <span>招商会执行</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao13.png" alt="">
              </div>
              <span>企业内训</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao14.png" alt="">
              </div>
              <span>M90制作</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao15.png" alt="">
              </div>
              <span>微信群推广建设</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao16.png" alt="">
              </div>
              <span>群控建设</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao17.png" alt="">
              </div>
              <span>呼叫中心系统建设</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao18.png" alt="">
              </div>
              <span>品牌传奇铜牌授权</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao19.png" alt="">
              </div>
              <span>招商培训</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 英文版 -->
    <div v-if="this.$store.state.Language=='English'">
      <div class="zsb_dingyi">
        <img src="../../static/images/en-zsb-dingyi.jpg" alt="">
      </div>
      <div class="zsb_zhaoshang">
        <div class="w">
          <div class="zsb_platform englist">
            <div class="platform platform1">INVESTMENT
              <br>PROMOTION PALTFORM</div>
            <div class="platform platform2"></div>
            <div class="platform platform3"></div>
            <div class="zsb_introduce zsb_introduce1">
              <h2>PLATFORM PROMOTION</h2>
              <p>
                There are 21 big matrix platform
                <br>The investment platform and search promotion combination
                <br>95.9% of investors locked in the industry, diversified
                <br>promotion of importsAchieve an investment, multiple returns
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce2">
              <h2>MULTIMEDIA TRAFFIC</h2>
              <p>
                Big collection + information flow + network multimedia data
                <br>platform data assetsOne station to achieve traffic filtering +
                <br>traffic conversion + traffic distributionEnjoy the most
                <br>cost-effective resultsFind the right traffic for millions of
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce3">
              <h2>EFFICIENT DOCKING</h2>
              <p>
                Strict customer service docking system
                <br>365 * 24 responsive
                <br>Achieve the maximum output ratio
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce4">
              <h2>CORE SERVICES</h2>
              <p>
                Big collection + information flow + network multimedia data
                <br>platform data assetsOne station to achieve traffic filtering +
                <br>traffic conversion + traffic distribution
                <br>Enjoy the most cost-effective results
                <br>Find the right traffic for millions of projects......
              </p>
            </div>
          </div>
          <h2>The best choice of the world's high-quality applications</h2>
          <p>What are people using? More related products and customized services are icing on the cake for smart operation</p>
          <ul class="zsb_zs clearfix zsb_zs_englist">
            <li>
              <div class="img">
                <img src="../../static/images/guanggao1.png" alt="">
              </div>
              <span>Online advertising</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao2.png" alt="">
              </div>
              <span>web hosting</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao3.png" alt="">
              </div>
              <span>Search bidding</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao4.png" alt="">
              </div>
              <span>VR promotion</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao5.png" alt="">
              </div>
              <span>Search promotion</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao6.png" alt="">
              </div>
              <span>Team training</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao7.png" alt="">
              </div>
              <span>Brand VI planning</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao8.png" alt="">
              </div>
              <span>Star power</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao9.png" alt="">
              </div>
              <span>Network training</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao10.png" alt="">
              </div>
              <span>Project planning</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao11.png" alt="">
              </div>
              <span>360°panorama show</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao12.png" alt="">
              </div>
              <span>Implementation of China
                <br>Merchants</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao13.png" alt="">
              </div>
              <span>In-house training</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao14.png" alt="">
              </div>
              <span>M90 production</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao15.png" alt="">
              </div>
              <span>WeChat group promotion
                <br>construction</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao16.png" alt="">
              </div>
              <span>Group control construction</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao17.png" alt="">
              </div>
              <span>Call center system
                <br>construction</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao18.png" alt="">
              </div>
              <span>Brand legend bronze
                <br> license</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao19.png" alt="">
              </div>
              <span>Investment training</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 繁体版 -->
    <div v-if="this.$store.state.Language=='Complex'">
      <div class="zsb_dingyi">
        <img src="../../static/images/ft-zsb-dingyi.jpg" alt="">
      </div>
      <div class="zsb_zhaoshang">
        <div class="w">
          <div class="zsb_platform">
            <div class="platform platform1">招商平台</div>
            <div class="platform platform2"></div>
            <div class="platform platform3"></div>
            <div class="zsb_introduce zsb_introduce1">
              <h2>平台推廣</h2>
              <p>
                旗下有21大矩陣平台
                <br>將招商平台與搜索推廣相結合
                <br>鎖定行業95.9%的投資者,多元化的推廣入口
                <br>實現一份投入，多份回報
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce2">
              <h2>多媒體流量</h2>
              <p>
                集合大搜+信息流+全网多媒体平台数据资产
                <br>一站實現流量過濾+流量轉化+流量分發
                <br>享受最大性价比的效果
                <br>為千萬項目找到合適的流量落地
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce3">
              <h2>高效對接</h2>
              <p>
                嚴格客服對接體系制定
                <br>365*24有求必應
                <br>達到最大產出比
              </p>
            </div>
            <div class="zsb_introduce zsb_introduce4">
              <h2>核心服務</h2>
              <p>
                將各行媒介資源立體化收集
                <br>去除一切中間渠道環節
                <br>完成企業品牌落地、企業形象高效轉化
              </p>
            </div>
          </div>
          <h2>海納百川，精選全球的高品質應用</h2>
          <p>別人都在用什麼？更多關聯產品、定製化服務，為智能運營錦上添花</p>
          <ul class="zsb_zs clearfix">
            <li>
              <div class="img">
                <img src="../../static/images/guanggao1.png" alt="">
              </div>
              <span>網絡廣告</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao2.png" alt="">
              </div>
              <span>網絡託管</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao3.png" alt="">
              </div>
              <span>搜索競價</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao4.png" alt="">
              </div>
              <span>VR推廣</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao5.png" alt="">
              </div>
              <span>搜索推廣</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao6.png" alt="">
              </div>
              <span>團隊培訓</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao7.png" alt="">
              </div>
              <span>品牌VI策劃</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao8.png" alt="">
              </div>
              <span>明星助力</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao9.png" alt="">
              </div>
              <span>網絡培訓</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao10.png" alt="">
              </div>
              <span>項目策劃</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao11.png" alt="">
              </div>
              <span>360全景秀</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao12.png" alt="">
              </div>
              <span>招商會執行</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao13.png" alt="">
              </div>
              <span>企業內訓</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao14.png" alt="">
              </div>
              <span>M90製作</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao15.png" alt="">
              </div>
              <span>微信群推廣建設</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao16.png" alt="">
              </div>
              <span>群控建設</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao17.png" alt="">
              </div>
              <span>呼叫中心系統建設</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao18.png" alt="">
              </div>
              <span>品牌傳奇銅牌授權</span>
            </li>
            <li>
              <div class="img">
                <img src="../../static/images/guanggao19.png" alt="">
              </div>
              <span>招商培訓</span>
            </li>
          </ul>
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
