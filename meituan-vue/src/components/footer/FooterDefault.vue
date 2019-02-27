<template>
  <footer class="com-footer">
    <div class="footer-content">
      <div class="footer-link clearfix">
        <div class="footer-column">
          <dl>
            <dt>用户帮助</dt>
            <dd v-for="item in userHelpList"
                :key="item.problem">
              <a rel="nofollow" :href="item.src" target="_blank">{{item.problem}}</a>
            </dd>
          </dl>
          <dl>
            <dt>美团服务</dt>
            <dd v-for="item in meituanServiceList"
                :key="item.problem">
              <a :href="item.src" target="_blank">{{item.problem}}</a>
            </dd>
          </dl>
        </div>
        <div class="footer-column">
          <dl>
            <dt>商家合作</dt>
            <dd v-for="item in shangjiaList"
                :key="item.problem">
              <a rel="nofollow" :href="item.src" target="_blank">{{item.problem}}</a>
            </dd>
          </dl>
        </div>
        <div class="footer-column">
          <dl>
            <dt>代理商加盟</dt>
            <dd v-for="item in dailiList"
                :key="item.problem">
              <a rel="nofollow" :href="item.src" target="_blank">{{item.problem}}</a>
            </dd>
          </dl>
          <dl>
            <dt>行业规范</dt>
            <dd>
              <a
                rel="nofollow"
                href="http://www.meituan.com/about/saferule"
                target="_blank"
              >美团点评餐饮安全管理办法</a>
            </dd>
          </dl>
          <dl>
            <dt>廉正举报</dt>
            <dd>
              <a rel="nofollow" href="mailto:lianzheng@meituan.com" target="_self">廉政邮箱</a>
            </dd>
          </dl>
        </div>
        <div class="footer-column">
          <dl>
            <dt>关注美团</dt>
            <dd>
              <a rel="nofollow" href="http://weibo.com/meituan" target="_blank">美团新浪微博</a>
            </dd>
          </dl>
          <dl>
            <dt>公司信息</dt>
           <dd v-for="item in companyInfo"
                :key="item.problem">
              <a rel="nofollow" :href="item.src" target="_blank">{{item.problem}}</a>
            </dd>
          </dl>
        </div>
        <div class="footer-column">
          <dl>
            <dt>消费者服务热线</dt>
            <dd>外卖消费者：
              <a rel="nofollow" href="tel:10109777" target="_blank">10109777</a>
            </dd>
            <dd>猫眼消费者：
              <a rel="nofollow" href="tel:10105335" target="_blank">10105335</a>
            </dd>
            <dd>其他消费者：
              <a rel="nofollow" href="tel:10107888" target="_blank">10107888</a>
            </dd>
          </dl>
          <dl>
            <dt>商家服务热线</dt>
            <dd>外卖&amp;餐饮商家：
              <a rel="nofollow" href="tel:10105557" target="_blank">10105557</a>
            </dd>
            <dd>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：
              <a rel="nofollow" href="tel:10100107" target="_blank">10100107</a>
            </dd>
          </dl>
          <dl>
            <dt>投诉举报热线</dt>
            <dd>违法和不良信息举报电话：
              <a rel="nofollow" href="tel:4006018900" target="_blank">4006018900</a>
            </dd>
            <dd>举报邮箱：
              <a
                rel="nofollow"
                href="mailto:tousujubao@meituan.com"
                target="_self"
              >tousujubao@meituan.com</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a
                rel="nofollow"
                href="https://ecom.meituan.com/bizsettle/settle/merchantsSettle"
                target="_blank"
              >商家自助入驻美团入口</a>
            </dt>
          </dl>
        </div>
      </div>
      <div class="footer-copyright clearfix">
        <div class="footer-copyright-left">
          <p>©美团网团购 meituan.com
            <a
              href="http://www.beianbeian.com/beianxinxi/283f39a9-4c00-427a-97ef-3c7a9e1e0af1.html"
            >京ICP证070791号</a>
            <a href="http://www.miitbeian.gov.cn/">京ICP备10211739号</a>
            <a href="https://www.meituan.com/about/rules" target="_blank">电子公告服务规则</a>
          </p>
          <p>
            <a
              href="https://i.meituan.com/brunch/default/right"
              target="_blank"
            >广播电视节目制作经营许可证（京）字第03889号</a>
          </p>
        </div>
        <div class="footer-copyright-right">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025545"
            target="_blank"
          >京公网安备11010502025545号</a>
          <div class="footer-copyright-cert">
            <a
              class="sp-ft sp-ft--record"
              href="https://www.meituan.com/about/openinfo"
              title="备案信息"
              target="_blank"
            >备案信息</a>
            <a
              class="sp-ft sp-ft--knet"
              href="http://t.knet.cn/index_new.jsp"
              title="可信网站认证"
              target="_blank"
            >可信网站</a>
            <a
              class="sp-ft sp-ft--12315"
              href="http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq"
              title="12315消费争议"
              target="_blank"
            >12315消费争议</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault',
  data () {
    return {
        userHelpList: [
            {
                src: 'http://www.meituan.com/help/selfservice',
                problem: '申请退款'
            },
            {
                src: 'http://www.meituan.com/help/selfservice?tab=2',
                problem: '查看美团券密码'
            },
            {
                src: 'http://www.meituan.com/help/faq',
                problem: '常见问题'
            },
            {
                src: 'http://www.meituan.com/about/terms',
                problem: '用户协议'
            },
            {
                src: 'http://www.meituan.com/about/privacy',
                problem: '隐私政策'
            },
            {
                src: 'http://www.meituan.com/about/anticheat',
                problem: '反诈骗公告'
            }
        ],
        meituanServiceList: [
            {
                src: 'http://waimai.meituan.com/',
                problem: '美团外卖'
            },
            {
                src: 'http://hotel.meituan.com/',
                problem: '美团酒店'
            },
            {
                src: 'http://maoyan.com/',
                problem: '猫眼电影'
            },
            {
                src: 'http://peisong.meituan.com/',
                problem: '美团配送'
            },
            {
                src: 'http://www.mtyun.com/',
                problem: '美团云'
            },
            {
                src: 'http://www.dianping.com/',
                problem: '大众点评'
            },
            {
                src: 'https://phoenix.meituan.com/',
                problem: '榛果民宿'
            },
            {
                src: 'http://mad.meituan.com/',
                problem: '无人配送'
            }
        ],
        shangjiaList: [
            {
                src: 'https://ecom.meituan.com/bizsettle/settle?utm_source=mt_C_my',
                problem: '美食商家入驻(非外卖)'
            },
            {
                src: 'https://kd.meituan.com/',
                problem: '美团外卖开店申请'
            },
            {
                src: 'http://shouyin.meituan.com?utm_source=inner&amp;utm_medium=mtpc',
                problem: '美团收银官网'
            },
            {
                src: 'http://page.peisong.meituan.com/apply/join',
                problem: '外卖配送加盟申请'
            },
            {
                src: 'https://xue.meituan.com/?from=mtpc',
                problem: '美团点评餐饮学院'
            },
            {
                src: 'http://ruzhu.meituan.com/ruzhu/index.html',
                problem: '酒店商家入驻'
            },
            {
                src: 'https://i.meituan.com/awp/h5/trip/business/cooperation/index.html?client=pc',
                problem: '境内度假商家入驻'
            },
            {
                src: 'https://e.dianping.com/claimcpc/page/index?source=mt',
                problem: '综合商家入驻'
            },
            {
                src: 'https://phoenix.meituan.com/about/',
                problem: '榛果民宿房东商家入驻'
            },
            {
                src: 'http://pc.meituan.com/?activity_code=mtpcdb',
                problem: '商家开票申请'
            },
            {
                src: 'https://h5.youzan.com/v2/feature/nALm22bkFF?dc_ps=2039811416638097413.200001',
                problem: '美团点评智能收银机'
            },
            {
                src: 'http://developer.meituan.com/',
                problem: '聚宝盆餐饮开放平台'
            },
            {
                src: 'http://smartpay.meituan.com/',
                problem: '美团智能支付'
            },
            {
                src: 'https://paidui.meituan.com/?activity_code=167_00038050',
                problem: '免费使用美团排队'
            },
            {
                src: 'https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html',
                problem: '快驴进货商家合作'
            },
            {
                src: 'https://shangou.meituan.com/joinin',
                problem: '美团闪购商家入驻'
            }
        ],
        dailiList: [
            {
                src: 'https://i.meituan.com/awp/hfe/block/4544/index.html',
                problem: '智能支付渠道加盟商招募'
            },
            {
                src: 'https://daili.meituan.com/?comeFrom=mtwebBusinesscoopd',
                problem: '到店餐饮代理商招募'
            },
            {
                src: 'http://www.dianping.com/apollo/agent/index?source=mtpcd',
                problem: '非餐饮代理商招募'
            },
            {
                src: 'http://union.meituan.com/',
                problem: '美团联盟'
            },
            {
                src: 'https://store.meituan.com/distribution/broadcast',
                problem: '美团收银招募线上分销商'
            },
            {
                src: 'href="https://agent.meituan.com/zhaoshang?entry=5',
                problem: '美团点评5S服务商招募'
            }
        ],
        companyInfo: [
            {
                src: 'https://about.meituan.com/',
                problem: '关于我们'
            },
            {
                src: 'https://about.meituan.com/investor.html',
                problem: '投资者关系'
            },
            {
                src: 'http://zhaopin.meituan.com/',
                problem: '加入我们'
            },
            {
                src: 'http://www.meituan.com/about/law',
                problem: '法律声明'
            },
            {
                src: 'http://www.meituan.com/about/bizlicense',
                problem: '商户服务协议'
            },
            {
                src: 'https://dpapp-appeal.meituan.com/#/shopCreditRegulationPC',
                problem: '商户诚信公约及管理办法'
            }
        ]
    }
  }

}
</script>
<style lang='scss' >
@import '~css/public/footer.scss';
</style>
