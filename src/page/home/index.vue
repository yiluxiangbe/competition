<template>
  <div>
    <!-- 顶部学校标志 -->
    <div class="school-mark">
      <img src="https://www.ctbu.edu.cn/image/logob.png" alt="" />
      <div class="info">
        <router-link to="/admin"><span>学习党的二十大专题网站</span></router-link>
      </div>
    </div>
    <div class="banner"></div>
    <div class="nav">
      <div class="container">
        <ul class="other-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/ddcj">党的成就</router-link></li>
          <li><router-link to="/rdrp">热点热评</router-link></li>
          <li><router-link to="/xxls">学习路上</router-link></li>
          <li><router-link to="/zjgs">走进工商</router-link></li>
        </ul>
      </div>
    </div>
    <div class="feifan">
      <div class="feifan-tit"></div>
      <div class="feifan-main">
        <div class="container">
          <div class="feifan-main-left fl">
            <ul>
              <li class="first-news">
                <a href="http://cpc.people.com.cn/n1/2022/1012/c64387-32543448.html" target="_blank">
                  <p class="tit">高质量发展迈出坚实步伐（奋进新征程 建功新时代·非凡十年）</p>
                  <div>
                    <p class="abs">习近平总书记指出：“立足新发展阶段、贯彻新发展理念、构建新发展格局、推动高质量发展，必须深入实施科教兴国战略、人才强国战略、创新驱动发展战略，完善国...</p>
                  </div>
                </a>
              </li>

              <li><a href="http://cpc.people.com.cn/n1/2022/1010/c64387-32542026.html" target="_blank">创新第一动力更强劲（奋进新征程 建功新时代·非凡十年） </a></li>

              <li><a href="http://cpc.people.com.cn/n1/2022/0920/c64387-32529772.html" target="_blank">国家安全得到全面加强（奋进新征程 建功新时代·非凡十年） </a></li>

              <li><a href="http://cpc.people.com.cn/n1/2022/1011/c64387-32542714.html" target="_blank">现代产业体系迈出坚实步伐（奋进新征程 建功新时代·非凡十年）</a></li>

              <li><a href="http://cpc.people.com.cn/n1/2022/1008/c64387-32540479.html" target="_blank">绘就人水和谐的美丽图景（奋进新征程 建功新时代...</a></li>

              <li><a href="http://cpc.people.com.cn/n1/2022/0930/c64387-32537489.html" target="_blank">书写命运与共、共谋发展的崭新篇章（奋进新征程 ...</a></li>
              <router-link to="/ddcj" class="get-more ddcj-more">更多&gt;&gt;</router-link>
            </ul>
          </div>

          <div class="feifan-main-right fr">
            <div class="slideBox-2">
              <div class="hd">
                <ul>
                  <li class="on"></li>
                </ul>
              </div>
              <div class="bd">
                <ul>
                  <ul>
                    <li>
                      <img src="./image//qiji.jpg" />
                      <a href="http://www.gov.cn/xinwen/2022-10/09/content_5716747.htm" target="_blank">
                        <p>观众在“奋进新时代”主题成就展中央综合展区内参观拍摄中国经济“奇迹号”巨轮模型</p>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="container">
        <div class="news-tit"></div>
        <div class="news-text">
          <div class="news-text-right fl">
            <ul class="dot">
              <li><a href="https://mp.weixin.qq.com/s/xm1uhbJXuE0oRhEhmhaLLA" target="_blank">学习贯彻习近平新时代中国特色社会主义思想主题...</a><span class="fr">2023-04-03</span></li>
              <li><a href="http://society.people.com.cn/n1/2022/1128/c1008-32575664.html" target="_blank">让党的二十大精神传遍草原千万家</a><span class="fr">2022-11-28</span></li>
              <li><a href="https://news.ctbu.edu.cn/info/1360/1045495.htm" target="_blank">校长孙芳城宣讲党的二十大精神</a><span class="fr">2022-12-21</span></li>
              <li><a href="https://news.ctbu.edu.cn/info/1027/1046735.htm" target="_blank">我校召开学习习近平中国特色社会主义思想主题教育</a><span class="fr">2023-04-25</span></li>
              <li><a href="https://news.ctbu.edu.cn/info/1027/1046673.htm" target="_blank">重庆工商大学统一战线开展学习贯彻中共二十大精神...</a><span class="fr">2023-04-23</span></li>
            </ul>
          </div>
          <div class="news-text-left fr">
            <!--banner轮播-->
            <div class="swiper-container" ref="mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in bannerlist" :key="item.id"><img :src="item.imgUrl" alt="" /></div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part-two">
      <div class="container">
        <div class="part-two-right fr">
          <div class="part-two-head">
            <p>热点热评</p>
            <router-link to="/rdrp" class="get-more">更多&gt;&gt;</router-link>
          </div>
          <div class="part-two-list">
            <ul>
              <li v-for="hot in hotList" :key="hot.id">
                <i class="arrow"></i><a :href="hot.url" target="_blank">{{ hot.keyword }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="part-two-left fr">
          <div class="part-two-head">
            <p>学习路上</p>
            <router-link to="/xxls" class="get-more">更多&gt;&gt;</router-link>
          </div>
          <div class="part-two-list">
            <ul>
              <li><i class="arrow"></i><a href="https://www.chinacourt.org/article/detail/2022/10/id/6969466.shtml" target="_blank">学习党的报告和决议</a></li>
              <li><i class="arrow"></i><a href="http://dangshi.people.com.cn/n1/2021/0621/c436975-32136408.html" target="_blank">研究党的历史</a></li>
              <li><i class="arrow"></i><a href="http://www.qstheory.cn/zhuanqu/2021-11/17/c_1128072024.htm" target="_blank">学习党的思想理论</a></li>
              <li><i class="arrow"></i><a href="http://www.qstheory.cn/dukan/qs/2022-12/01/c_1129173153.html" target="_blank">深入调研和实践</a></li>
              <li><i class="arrow"></i><router-link to="zxdt">参与学习活动</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="xfby">
      <div class="container">
        <div class="part-two-head">
          <p>走进工商</p>
          <router-link to="/zjgs" class="get-more">更多&gt;&gt;</router-link>
        </div>
        <div class="">
          <ul class="by">
            <ul>
              <li>
                <img src="https://news.ctbu.edu.cn/__local/1/62/0A/F557D254B1EA9C0CD1E8B193F34_E541E390_238AC.jpg" />
                <a href="https://news.ctbu.edu.cn/info/1027/1046422.htm" target="_blank"> 宣讲党的二十大精神 </a>
              </li>
              <li>
                <img src="https://news.ctbu.edu.cn/__local/5/03/9B/0A41F579C3ECD8F9921C7644158_E5037027_D3C32.jpg" />
                <a href="https://news.ctbu.edu.cn/info/1027/1046191.htm" target="_blank"> 图书馆召开第三次分享交流会</a>
              </li>
              <li>
                <img src="https://news.ctbu.edu.cn/__local/8/0D/D6/35C13674FC89FE17C63E3590176_29823C7E_167AD.jpg" />
                <a href="https://news.ctbu.edu.cn/info/1027/1046168.htm" target="_blank"> 第八届辅导员素质能力大赛 </a>
              </li>
              <li>
                <img src="https://news.ctbu.edu.cn/__local/4/B0/90/B2D2EF74F057646B17229763FF0_B0B882EF_4BE55.jpg" />
                <a href="https://news.ctbu.edu.cn/info/1027/1046450.htm" target="_blank"> 讲授形势与政策课 </a>
              </li>
              <li>
                <img src="https://news.ctbu.edu.cn/__local/E/37/31/BA97434B85C3557F842A3C6D9B2_1AB3DA0F_297FC.jpg" />
                <a href="https://news.ctbu.edu.cn/info/1401/1046877.htm" target="_blank"> 图书馆召开第四次分享交流会 </a>
              </li>
              <li>
                <img src="https://news.ctbu.edu.cn/__local/2/EF/E7/B26D412775E2E6704AAE89AB1E1_E2F8C9D9_52E52.jpg" />
                <a href="https://news.ctbu.edu.cn/info/1027/1046460.htm" target="_blank"> 召开全面从严治党暨党风廉政建设大会 </a>
              </li>
              <li>
                <img src="https://news.ctbu.edu.cn/__local/9/0F/5B/AFBF8339B86E710ECB291CBFEC6_5831F88A_448D1.jpg" />
                <a href="https://news.ctbu.edu.cn/info/1027/1045910.htm" target="_blank"> 宣讲千场二十大精神报告启动仪式 </a>
              </li>
              <li>
                <img src="https://news.ctbu.edu.cn/__local/6/55/F0/31D01D9C740AE8D041A459A0995_FF0745BB_E9444.png" />
                <a href="https://news.ctbu.edu.cn/info/1027/1046673.htm" target="_blank"> 学习贯彻中共二十大精神主题活动</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
// 导入封装好的请求模块
// 请求轮播图数据
// 获取热点热评数据
import { reqBannerList, reqHotList } from '@/api/index'
export default {
  name: 'Home',
  data() {
    return {
      // 放轮播图数据
      bannerlist: [],
      // 放热点热评数据
      hotList: []
    }
  },
  methods: {
    // 获取轮播图数据的函数
    async getBannerList() {
      const result = await reqBannerList()
      // 存储数据
      this.bannerlist = result.data.data
      console.log(this.bannerlist)
    },
    // 获取热点热评的函数
    async getHotList() {
      // 携带token
      // 从localStorage中获取token值
      const token = localStorage.getItem('token')
      console.log('token:' + token)
      const result = await reqHotList(token)
      // 存储数据
      this.hotList = result.data.data
      console.log(this.hotList)
    }
  },
  mounted() {
    // 请求轮播图数据
    this.getBannerList()
    // 获取热点热评数据
    this.getHotList()
    setTimeout(() => {
      // 初始化Swiper类的实例
      let mySwiper = new Swiper(this.$refs.mySwiper, {
        // 设置轮播图防线
        direction: 'horizontal',
        // 开启循环模式
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          // 分页器类型
          type: 'bullets',
          // 点击分页器，切换轮播
          clickable: true
        },
        // 自动轮播
        autoplay: {
          delay: 2000,
          // 新版本的写法：目前是5版本
          // pauseOnMouseEnter: true,
          // 如果设置为true，当切换到最后一个slide时停止自动切换
          stopOnLastSlide: true,
          // 用户操作swiper之后，是否禁止autoplay
          disableOnInteraction: false
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // 切换效果
        // effect: "cube",
      })

      // 1:swiper插件,对外暴露一个Swiper构造函数
      // 2:Swiper构造函数需要传递参数 1、结构总根节点CSS选择器|根节点真实DOM节点  2、轮播图配置项
      // 鼠标进入停止轮播
      // mySwiper.el.onmouseover = function () {
      //   mySwiper.autoplay.stop()
      // }
      // // 鼠标离开开始轮播
      // mySwiper.el.onmouseout = function () {
      //   mySwiper.autoplay.start()
      // }
    }, 2000)
  }
}
</script>

<style>
.banner {
  height: 600px;
  min-width: 1200px;
  background: url(./image/guanwangtu.jpg) no-repeat top center;
  background-size: cover;
}

/* 顶部学校标志 */
.school-mark {
  width: 100%;
  height: 100px;
  background-color: #902828;
  opacity: 1;
  margin-top: -60px;
}
.school-mark img {
  display: inline-block;
  margin-top: 15px;
  margin-left: 10px;
}
.school-mark .info {
  display: inline-block;
  margin-left: 800px;
  vertical-align: middle;
  margin-top: 25px;
}
.school-mark .info span {
  color: #fff;
}
.nav {
  height: 60px;
  min-width: 1200px;
  background-color: #ed1e1e;
}
.nav .home li {
  float: left;
  position: relative;
  left: 180px;
  top: -14px;
}
.nav .home li a {
  color: #333333;
  font-size: 26px;
}
.nav .other-nav {
  float: right;
}
.nav .other-nav li {
  float: left;
}
.nav .other-nav li:hover {
  background-color: rgb(235, 239, 41);
}
.nav ul li a {
  padding: 10px 26px;
  line-height: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
.top-news {
  position: absolute;
  height: 90px;
  background: #f2f2f2;
  width: 100%;
  height: 90px;
}
.top-news .left {
  position: relative;
  left: 30px;
  top: 12px;
  width: 177px;
}
.top-news .left .left-col {
  width: 77px;
  height: 70px;
  background: url(./image/2.png) no-repeat top center;
}
.top-news .left .left-col p {
  font-size: 24px;
  font-weight: bold;
  color: #cd010d;
  padding: 0px 10px;
  text-align: center;
}

.top-news .right-tit a {
  font-size: 24px;
  color: #cd010d;
  font-weight: bold;
  line-height: 90px;
}
.news {
  min-width: 1200px;
  margin-top: 90px;
  overflow: hidden;
}
.news .news-tit {
  height: 140px;
  background: url(./image/xxgc.png) no-repeat top center;
}
.news .news-text {
  margin-top: 20px;
}
.news .news-text .news-text-left {
  width: 577px;
  height: 415px;
}
.news-text-left .swiper-container img {
  height: 415px;
  width: 577px;
}
.slideBox {
  width: 597px;
  height: 415px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.slideBox .hd {
  height: 20px;
  overflow: hidden;
  position: absolute;
  right: 5px;
  bottom: 65px;
  z-index: 1;
}

.slideBox .hd ul {
  overflow: hidden;
  zoom: 1;
  float: left;
}

.slideBox .hd ul li {
  float: left;
  width: 20px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #333;
  background: #ffffff;
  cursor: pointer;
  margin-right: 3px;
  transition: all 0.3 ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
}

.slideBox .hd ul li.on {
  font-size: 16px;
  background: #cd010d;
  color: #fff;
}
.slideBox .moreBox {
  height: 60px;
  width: 210px;
  line-height: 60px;
  background: #b70e17;
}
.slideBox .moreBox a {
  color: #ffffff;
}
.slideBox .bd {
  width: 597px;
  height: 415px;
  position: relative;
  height: 100%;
  z-index: 0;
}

.slideBox .bd li {
  zoom: 1;
  vertical-align: middle;
}

.slideBox .bd img {
  width: 100%;
  height: 415px;
  display: block;
}

.slideBox .bd li a {
  position: relative;
  display: block;
  z-index: 999;
  color: #fff;
  font-size: 18px;
  background: rgba(205, 1, 13, 0.8);
  top: -60px;
}

.slideBox .bd .news-date span {
  display: block;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
}
.slideBox .bd li p {
  padding: 10px 0px 40px 10px;
}
.news-text-right .dot li {
  width: 560px;
  height: 71px;
  margin-bottom: 15px;
  background: #f2f2f2;
  border-left: #cd010d 4px solid;
  position: relative;
}

.news-text-right ul li a {
  padding-left: 15px;
  line-height: 70px;
  position: relative;
  z-index: 2;
}
.news-text-right ul li span {
  line-height: 70px;
  padding-right: 10px;
  font-size: 16px;
  color: #696969;
}
.news-text-right .dot li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: #b70e17;
  -webkit-transform: scaleX(0);
  -ms-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  -ms-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.news-text-right .dot li:hover::before {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
  opacity: 0.2;
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
.part-two {
  min-width: 1200px;
  margin-top: 50px;
}
.part-two .part-two-left {
  width: 600px;
  margin-right: 60px;
}
.part-two-head {
  border-bottom: #cd010d 2px solid;
  position: relative;
}
.part-two-head p {
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
}
.get-more {
  position: absolute;
  right: 0px;
  top: 20px;
  font-size: 14px;
  color: #666;
}
i.arrow::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(./image/banner-list.png) no-repeat;
  position: relative;
  top: 10px;
  left: 5px;
}
.part-two .part-two-list ul {
  padding-top: 10px;
}
.part-two .part-two-list ul li {
  line-height: 50px;
}
.part-two .part-two-right {
  width: 598px;
}

.feifan {
  min-width: 1200px;
  clear: both;
  padding-top: 30px;
  padding-bottom: 20px;
  overflow: hidden;
  /* background: url(./image/dangdechengjiu.jpg) no-repeat center top;
  background-size: cover; */
}
.feifan .feifan-tit {
  height: 150px;
  background: url(./image/ff10.png) no-repeat top center;
  padding-bottom: 10px;
}
.feifan .feifan-main {
  min-height: 500px;
  background: url(./image/dj10.png) no-repeat top center;
}

.feifan .feifan-main-left ul li {
  line-height: 34px;
}
.feifan .feifan-main-left {
  width: 558px;
  padding: 40px 20px;
}
.feifan .feifan-main-left .first-news {
  border-bottom: #dedede 1px dashed;
}
.feifan .feifan-main-left .first-news .tit {
  font-weight: bold;
  line-height: 40px;
  font-size: 22px;
}
.feifan .feifan-main-left .first-news .abs {
  font-size: 14px;
  color: #909090;
  line-height: 24px;
  padding: 10px 0px;
}
.feifan .feifan-main-right {
  width: 678px;
  height: 455px;
}
.slideBox-2 {
  width: 630px;
  overflow: hidden;
  position: relative;
  right: 14px;
  top: 15px;
}

.slideBox-2 .hd {
  height: 20px;
  overflow: hidden;
  position: absolute;
  right: 5px;
  bottom: 80px;
  z-index: 1000;
}

.slideBox-2 .hd ul {
  overflow: hidden;
  zoom: 1;
  float: left;
}

.slideBox-2 .hd ul li {
  float: left;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 3px;
  transition: all 0.3 ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
}

.slideBox-2 .hd ul li.on {
  font-size: 16px;
  background: #cd010d;
  color: #fff;
}
.slideBox-2 .bd {
  width: 559px;
  position: relative;
  z-index: 0;
}

.slideBox-2 .bd li {
  zoom: 1;
  vertical-align: middle;
  text-align: left;
}
.slideBox-2 .bd img {
  width: 557px;
  height: 374px;
  display: block;
}

.slideBox-2 .bd li a {
  color: #fff;
  font-size: 18px;
  text-align: left;
  position: relative;
  z-index: 999;
  display: block;
  padding-top: 20px;
  line-height: 24px;
}
.xfby {
  min-width: 1200px;
  clear: both;
  margin-top: 70px;
}
.by {
  margin-left: -12px;
  padding-top: 10px;
  padding-left: 5px;
}
.by li {
  float: left;
  width: 289px;
  margin-left: 12px;
  position: relative;
  margin-bottom: 5px;
}
.by img {
  width: 100%;
  height: 217px;
}
.by li a {
  display: block;
  width: 100%;
  background: rgba(205, 1, 13, 0.8);
  position: absolute;
  bottom: 4px;
  color: #ffffff;
  font-size: 16px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.shiting {
  min-width: 1200px;
  clear: both;
  min-height: 500px;
  padding-top: 20px;
}
.shiting .shiting-tit {
  height: 170px;
  background: url(./image/stsh.png) no-repeat center 20px;
}
.shiting .shiting-main ul {
  margin-left: -5px;
}
.shiting .shiting-main ul li {
  float: left;
  width: 295px;
  position: relative;
  margin-left: 5px;
  margin-bottom: 5px;
}
.shiting .shiting-main ul li img {
  width: 100%;
  height: 234px;
}
.shiting .shiting-main ul li a {
  display: block;
  height: 40px;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  background: rgba(205, 1, 13, 0.8);
  position: absolute;
  bottom: 0px;
  color: #ffffff;
  padding: 0px 10px;
  text-align: center;
  line-height: 40px;
}
footer {
  min-width: 1200px;
  height: 110px;
  background: #910009;
}
footer .box {
  width: 400px;
  margin: 0 auto;
  text-align: center;
  padding-top: 26px;
}
footer .box p {
  font-size: 16px;
  color: #ffffff;
  line-height: 30px;
}
.list {
  min-width: 1200px;
  position: relative;
  top: -120px;
}
.list .list-tit {
  position: relative;
  overflow: hidden;
  font-size: 0px;
  width: 100%;
  white-space: nowrap;
  line-height: 36px;
  margin: -5px 0 38px;
}
.list .list-tit::after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 1px;
  background: #e99430;
  position: relative;
  top: -7px;
}
.list .list-tit .title {
  font-size: 28px;
  color: #910009;
  line-height: 50px;
  position: relative;
  display: inline-block;
  padding: 0 26px 0 0;
}
.list .list-tit .title:after {
  content: '';
  display: block;
  height: 28px;
  width: 2px;
  background: #e99430;
  position: absolute;
  top: 14px;
  right: 0;
}
.list .list-tit .local {
  position: absolute;
  right: 0px;
  top: 0px;
  color: #696969;
  font-size: 14px;
}
.list-text ul li {
  border-bottom: #dedede solid 1px;
}
.list-text ul li a {
  display: inline-block;
  padding: 30px 0px;
}
.list-text .info-date {
  width: 140px;
  text-align: right;
  float: left;
}
.list-text .info-date p {
  font-size: 14px;
  color: #910009;
  line-height: 32px;
}
.list-text .info-date p:first-child {
  font-size: 24px;
}
.list-text .info-date:after {
  content: '';
  display: block;
  height: 2px;
  width: 53px;
  background: #e99430;
  float: right;
}
.list-text img {
  width: 280px;
  height: 180px;
  float: left;
}
.list-text .info-main {
  position: relative;
  margin: -4px 0 0 207px;
}
.list-text .info-news {
  position: relative;
  margin: -4px 0 0 317px;
}
.list-text .info-news-title {
  line-height: 40px;
}
.list-text .info-main .info-title {
  line-height: 40px;
}
.list-text .info-abs {
  font-size: 14px;
  color: #888;
  line-height: 26px;
}
.list-text .info-news-date p {
  font-size: 14px;
  color: #828282;
  position: relative;
  padding-left: 36px;
  line-height: 90px;
}
* {
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: '微软雅黑', '宋体';
  font-size: 18px;
  color: #333;
}
a {
  text-decoration: none !important;
  color: #333333 !important;
  font-size: 18px;
  transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}
a:hover {
  color: #b70e17 !important;

  /*text-decoration: underline;*/
}
ul li {
  list-style: none;
}

img {
  border: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clear {
  clear: both;
}
.container {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  position: relative;
}
.container2 {
  width: 1240px;
  height: auto;
  margin: 0 auto;
}
.container3 {
  width: 960px;
  height: auto;
  margin: 0 auto;
}
/* 清除浮动带来的影响 */
.clearfix::after,
.clearfix::before {
  content: '';
  display: table;
}
.clearfix::after {
  clear: both;
}
</style>
