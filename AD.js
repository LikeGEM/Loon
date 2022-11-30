#!name= 开屏广告
#!desc= 去除APP首页启动广告和应用内广告
#!homepage= https://ocd0522.tk/ddgksf2013
#!author= ddgksf2013
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/guanggao.png

[Rewrite]

# > 58tongcheng
^https?:\/\/.+\.58cdn\.com\.cn\/brandads\/ reject
^https?:\/\/app\.58\.com\/api\/home\/advertising\/ reject
^https?:\/\/app\.58\.com\/api\/home\/appadv\/ reject-200
# > 555
^https:\/\/vip7\.fzwdyy\.cn:8083\/api\/getAdvertInfo reject-200
# > aihuishou
^https?:\/\/gw.aihuishou.com\/app-portal\/home\/getadvertisement reject
# > appso
^https?:\/\/sso.ifanr.com\/jiong\/IOS\/appso\/splash\/ reject
# > aiqiyi
^https?:\/\/.+\/cdn\/qiyiapp\/\d{8}\/.+&dis_dz= reject-img
^https?:\/\/.+\/cdn\/qiyiapp\/\d{8}\/.+&z=\w reject-img
^https?:\/\/.+\/videos\/other\/ reject
^https?:\/\/iface2\.iqiyi\.com\/fusion\/3\.0\/fusion_switch reject-img
# > alibaba
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv\/ reject
# > baiduditu
^https:\/\/dss0\.bdstatic\.com\/.+/tam-ogel\/.+\.(jpg|mp4) reject
^https?:\/\/bp-api\.bestv\.com\.cn\/cms\/api\/free\/open\/advertisingV2 reject
^https?:\/\/bp-api\.bestv\.com\.cn\/cms\/api\/c\/home\/searchMark reject
# > baidufanyi
^https?:\/\/mime\.baidu\.com\/v\d\/IosStart\/getStartInfo reject
^https?:\/\/mime\.baidu\.com\/v\d\/activity\/advertisement reject
# > baiduwenku
^https?:\/\/appwk\.baidu\.com\/xpage\/interface\/wknaad reject
# > baiduwangpan
^https?:\/\/pan\.baidu\.com\/act\/v\d\/bchannel\/list reject-200
^https?:\/\/pan\.baidu\.com\/act\/v\d\/welfare\/list reject-200
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/pcs\/ad reject-200
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry reject-200
# > clicli
^https?:\/\/js-ad\.ayximgs\.com\.ad-universe-cdn\.hzhcbkj\.cn\/xgapp\.php\/v2\/top_notice reject-200
# > chinabank
^https?:\/\/mbs\.boc\.cn\/ubas-mgateway-static\/images\/advertType\/.+.jpg reject-200
# > chelaile@ddgksf2013
^https?:\/\/cdn\.\w{3}\.chelaileapp\.cn\/(api\/)?adpub reject-dict
^https?:\/\/api.chelaile.net.cn\/adpub\/ reject
^https?:\/\/api.chelaile.net.cn\/goocity\/advert\/ reject
^https?:\/\/atrace.chelaile.net.cn\/adpub\/ reject
^https?:\/\/atrace.chelaile.net.cn\/exhibit\?&adv_image reject
^https?:\/\/pic1.chelaile.net.cn\/adv\/ reject
# > chaoxingxuexitong
^https?:\/\/learn\.chaoxing\.com\/apis\/service\/appConfig reject
# > caifu
^https?:\/\/emdcadvertise\.eastmoney\.com\/infoService\/v\d reject
# > dashixiong
^http?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/xgapp\.php\/v\d\/version reject-200
^http?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/xgapp\.php\/v\d\/advert\?position=[^2]+ reject-200
^http?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/xgapp\.php\/v\d\/top_notice\? reject-200
# > douban
^https?:\/\/api\.douban\.com\/v2\/app_ads\/splash reject-dict
^https?:\/\/api\.douban\.com\/b.*\/common_ads\?.* reject-dict
# > dingdongmaicai
^https?:\/\/maicai\.api\.ddxq\.mobi\/advert\/ reject
# > didachuxing
^https?:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\? reject
# > didichuxing@ddgksf2013
https?://res\.xiaojukeji\.com\/resapi\/activity\/mget reject-dict
https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) reject
# > daoyu@ddgksf2013
^https?:\/\/daoyu\.sdo\.com\/api\/userCommon\/getAppStartAd reject
# > douyu@kyle
^https?:\/\/rtbapi\.douyucdn\.cn\/japi\/sign\/app\/getinfo reject
# > dewu@kyle
^https:\/\/app\.dewu\.com\/api\/v1\/app\/advertisement\/ reject
# > dazhihui
^https?://ssp\.dzh\.com\.cn/v2api/adgroupjson reject
# > dangdangyuedu
^https?:\/\/e.dangdang.com\/media\/api.+\?action=getDeviceStartPage reject
^https?:\/\/api\.dangdang\.com\/mapi\d\/mobile\/init reject
^https?+:\/\/mapi\.dangdang\.com\/index\.php\?action=init reject
^https?+:\/\/e\.dangdang\.com\/.+?getDeviceStartPage reject
# > dianshijia
^https?:\/\/api\.gaoqingdianshi\.com\/api\/v\d\/ad\/ reject
^https?:\/\/cdn\.dianshihome\.com\/static\/ad\/ reject
# > elema
^https?:\/\/elemecdn.com\/.+\/sitemap reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} reject
^https?:\/\/fuss10.elemecdn.com\/.+.mp4 reject
^https?:\/\/www1.elecfans.com\/www\/delivery\/ reject
# > feizhu
^https?:\/\/gw\.alicdn\.com\/imgextra\/\w{2}\/[\w!]+-\d-tps-\d{3}-\d{4}\.(jpg|png)$ reject
# > feikechaguan@ddgksf2013
^https?:\/\/47\.100\.65\.202\/source\/plugin\/mobile\/mobile\.php\?module=advis reject
# > gongshijilu
^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg reject
^https:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ reject
# > gaidepaihang@ddgksf2013
https://zone.guiderank-app.com/guiderank-web/app/ad/listLaunchADByCity.do reject
# > gaode
^https?:\/\/m5.amap.com\/ws\/valueadded\/ reject
# > guanyu@ddgksf2013
https://guanyu.longfor.com/app-server/api/v1/main/start reject
# > guojiadili
^https?:\/\/dili\.bdatu\.com\/jiekou\/ad reject
^https?+:\/\/wap\.ngchina\.cn\/news\/adverts reject
# > haochezhu
^https?:\/\/hcz-member\.pingan\.com\.cn\/micro-api\/homepage\/do\/app\/popbox\/getTopPopBox reject-200
# > huazhu
^https?:\/\/appapi\.huazhu\.com:\d{4}\/client\/app\/getAppStartPage\/ reject
# > hupu@ddgksf2013
^https?:\/\/i\d\.hoopchina\.com\.cn/blogfile\//d+\//d+\/BbsImg\.(?<=(big.(png|jpg)))$ reject-img
^https?:\/\/games\.mobileapi\.hupu\.com\/.+\/(search|interfaceAdMonitor|status|hupuBbsPm)/(hotkey|init|hupuBbsPm)\. reject-img
^https?:\/\/games\.mobileapi\.hupu\.com\/interfaceAdMonitor reject-img
^https?:\/\/goblin\.hupu\.com\/.+\/interfaceAd\/getOther reject
^https?:\/\/i1\.hoopchina\.com\.cn\/blogfile\/.+_\d{3}x\d{4} reject-img
# > hongbanbao@ddgksf2013
https://fbchina.flipchina.cn/v2/ad/query/* reject
# > huyazhibo
^http?:\/\/business\.msstatic\.com\/advertiser\/material reject-dict
# > haoqixinribao@ddgksf2013
^https?:\/\/app3\.qdaily\.com\/app\d\/boot_advertisements\.json reject
# > huxiu@ddgksf2013
^https:\/\/api-ad-product\.huxiu\.com\/Api\/Product\/SDK\/Advert\/Query\/queryAdvertListInfo reject
# > huangyouxiangji@ddgksf2013
^https?:\/\/api4\.bybutter\.com\/v\d\/app\/placements\/\d\/advertisements reject
# > hanglvzongheng@ddgksf2013
^http?:\/\/(discardrp|startup)\.umetrip\.com\/gateway\/api\/umetrip\/native reject
# > hangzhougongjiao
^https?:\/\/m.ibuscloud.com\/v2\/app\/getStartPage reject
# > haohaozhu
^https?:\/\/api\.haohaozhu\.cn\/index\.php\/home\/AppInit\/getStartPhoto reject
# > huabao
^https?:\/\/api\.touker\.com\/v2\/IAdvertisementAPI\.queryStartAdvertisement reject
# > i4
^https?:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml reject
# > jianxun
^https?:\/\/api\.tipsoon\.com\/api\/v\d\/top\/ad reject-200
# > jingdongdushu
https://jdread-api.jd.com/jdread/api/channel/module/opens reject-200
https://jdread-api.jd.com/jdread/api/popup reject-200
# > jingdong
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start reject-dict
^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=queryMaterialAdverts reject
^https?:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx\/ reject
# > jingdongjinrong
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture reject
# > jiaohangmaidanba@HotKids
^https?:\/\/creditcardapp\.bankcomm\.com\/mapp\/common\/queryGuidePageAds\.do$ reject-200
^https?:\/\/creditcardapp\.bankcomm\.com\/mapp\/common\/getPopAds\.do$ reject-200
# > jiemianxinwen@ddgksf2013
^https?:\/\/img\.jiemian\.com\/ads\/ reject
# > jinshi@kyle
^https?:\/\/jad-api\.jin10\.com\/ad reject
# > JsCMCC@ddgksf2013
^https?+:\/\/wap\.js\.10086\.cn\/jsmccClient\/cd\/market_content\/api\/v\d\/market_content\.page\.query reject-200
# > 12123@kyle
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery reject
# > jijianhuilv
^https?:\/\/explorer\.tratao\.com\/api\/client\/v4\/xtransfer\/ad\/ reject
# > jiaxiaoediantong
^https?:\/\/api\.jxedt\.com\/ad\/ reject
# > jiakaobaodian
^https?:\/\/\w+\.kakamobi\.cn\/api\/open\/v\d\/advert-sdk\/ reject
# > jianhanglife
^https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341A002 reject-200
^https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341A009 reject-200
# > kfc
^https?:\/\/res.kfc.com.cn\/advertisement\/ reject
# > kuwo
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ reject
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ reject
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/adBubble\/.+ reject
# > kuaikan
^https?:\/\/api.kkmh.com\/v\d\/(ad|advertisement)\/ reject
# > Keep@ddgksf2013
^https?:\/\/api\.gotokeep\.com\/kprime\/v\d\/popups\/primeGuide reject
^https?:\/\/kad\.gotokeep\.com\/op-engine-webapp\/v\d\/ad reject
https://api.gotokeep.com/cauchy/user/notice/growth/guide reject-dict
^https?:\/\/api.gotokeep.com/cauchy/growth/init reject-dict
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/default\/keyword\/list reject
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/hotword\/list reject
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/hotCourse\/list reject
^https?:\/\/api\.gotokeep\.com\/op-engine-webapp\/v\d\/ad reject
^https?:\/\/api\.gotokeep\.com\/ads\/v\d\/ads\/preload reject
^https?:\/\/api\.gotokeep\.com\/training\/box\/config reject
^https?:\/\/api\.gotokeep\.com\/anno\/v\d\/upgrade\/check reject
^https?://api-access\.pangolin-sdk-toutiao\.com/api/ad/union/sdk reject
# > kuan@ddgksf2013
^https?:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch reject-dict
# > kanlixiang
^https?:\/\/api\.vistopia\.com\.cn\/api\/v\d\/home\/advertisement reject-dict
# > kantianxia@ddgksf2013
https://open3.vistastory.com/v3/api/index/loading_ad reject
https://open3.vistastory.com/v3/api.*get_popup reject
# > kuaishou
^https:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ reject
# > LinXi@ddgksf2013
^https?:\/\/api\.internetofcity\.cn\/api\/resource\/anon\/popups\/getSplashList reject-dict
^https?:\/\/api\.internetofcity\.cn\/api\/resource\/anon\/popups\/getList reject-dict
# > LeCheng
https://dl-cu-hz.lechange.cn/oms-online/advertisementPush/* reject
# > Block 100@ddgksf2013
https://tagit.hyhuo.com/recover/list reject
# > LaiChon@ddgksf2013
^https?:\/\/(mobile|shop)\.laichon\.com\/api\/(v1\/goods\/goodsList|exposureAdvStatistics|getWebAdvList) reject-dict
# host-suffix, admobile.top, reject
https?:\/\/helper\.2bulu\.com\/(greenPea\/queryTasks|proSpecial\/allData|saveSplashFrequencyStatistics|getPopInfo|getAppEntranceConfig|promote\/list|getSplash|outing\/reqFoundNewList|outing\/reqIndex) reject
# > LanRenTingShu
^https?:\/\/.*\/yyting\/advertclient\/ClientAdvertList.action reject
# > MeiRiYouXian
^https:\/\/j-image\.missfresh\.cn\/img_(.+)\.gif$ reject
^https:\/\/j-image\.missfresh\.cn\/img_(.+)\.(jpg|jpeg|gif|png)\?iopcmd=convert&dst=webp&q=85$ reject
# > MeiTuan
^https?:\/\/peisongapi\.meituan\.com\/client\/getInitiateImage reject-200
^https?:\/\/img\.meituan\.net\/(adunion|display|midas)\/\w+\.(gif|jpg|jpg\.webp)$ reject
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) reject
^https?:\/\/p\d\.meituan\.net\/(bizad|wmbanner)\/\w+\.jpg reject
^https?:\/\/p\d\.meituan\.net\/movie\/\w+\.jpg\?may_covertWebp reject
# > MeiTuanWaiMai
^https?:\/\/img\.meituan\.net\/(bizad|brandCpt)\/\w+\.(png|jpg) reject
^https?:\/\/wmapi\.meituan\.com\/api\/v\d+\/loadInfo\? reject
^https?:\/\/wmapi\.meituan\.com\/api\/v\d\/startpicture reject
^https?:\/\/www\.meituan\.com\/api\/v\d\/appstatus\?ad reject
# > MeiWeiBuYongDeng
^https?:\/\/capi.mwee.cn\/app-api\/V12\/app\/getstartad reject
# > MaFengWo
^https://mapi.mafengwo.cn\/ad\/get_launch_ad_list\/v2 reject
# > MaiDuiDui@ddgksf2013
^https?:\/\/mob\.mddcloud\.com\.cn\/adApi\/advert reject
# > ManHuaRen@ddgksf2013
^https?://tel.mangaapi.manhuaren.com/(v2/public/getStartUpMessage|v1/public/getStartPageAds) reject
http://tel.mangaapi.manhuaren.com/v2/ad/getMultiAdsStrategy reject
http://mangaapi.manhuaren.com/v2/public/getShelfActivity reject
^https?://mangaapi.manhuaren.com/(v2/public/getStartUpMessage|v1/public/getStartPageAds) reject
http://mangaapi.manhuaren.com/v2/ad/getMultiAdsStrategy reject
# > MIX@kyle
^https:\/\/dispatcher\.camera360\.com\/api\/v1\/list$ reject
# > MaKaLong@kyle
^https:\/\/app\.api\.versa-ai\.com\/launch\/ads\? reject
# > MoMo@ddgksf2013
^https?:\/\/open\.taou\.com\/maimai\/launch_ad reject
^https?:\/\/api\.taou\.com\/sdk\/global\/splash_ad reject
^https?:\/\/track\.mm\.taou\.com/v\d\/track reject
# > omofun
^https?:\/\/103\.91\.210\.141\:2515\/xgapp\.php\/v2\/top_notice reject-200
# > One@ddgksf2013
^http:\/\/app\.api\.d3yuiw4\.com\/api\/app\/ad reject
# > Oray
^https?:\/\/slapi\.oray\.net\/client\/ad reject
^https?:\/\/slapi\.oray\.net\/adver reject
# > pinduoduo
^https?:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash reject-200
# > PiaoGen
^https?:\/\/pss\.txffp\.com\/piaogen\/images\/launchScreen/ reject-200
# > pengpainews
^https?:\/\/adpai\.thepaper\.cn\/.+&ad= reject
# > qqbrower
^https:\/\/us\.l\.qq\.com\/exapp\?spsa=\d reject
# > QuNaEr@ddgksf2013
https://homefront.qunar.com/front/splash/ad reject
^https?:\/\/client\.qunar\.com\/pitcher-proxy\?qrt=p_splashAd reject
# > QiCheZhiJia
^https?:\/\/adproxy.autohome.com.cn\/AdvertiseService\/ reject
^https?:\/\/app2.autoimg.cn\/appdfs\/ reject
# > QiDianDuShu
^https?:\/\/magev\d\.if\.qidian\.com\/argus\/api\/v\d\/client\/getsplashscreen reject
# > RenMinRiBao@ddgksf2013
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/getAdvertImage reject
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/adv reject-dict
^https?:\/\/stat\.peopleapp\.com\/ reject
# > shaoshupai
https://ios.sspai.com/api/v3/recommend/page/get\?ad.*ios_home_modal reject
# > ShunFengYouXuan
^https://mapi.sfbest.com\/brokerservice-server\/cms\/getPositionById.* reject
# > spotify@ddgksf2013
^https?://spclient.wg.spotify.com/ad-logic/* reject-img
^https?://spclient.wg.spotify.com/ads/* reject-img
^https?://spclient.wg.spotify.com/.+ad_slot reject-img
^https?://spclient.wg.spotify.com/.+banners reject-img
^https?://spclient.wg.spotify.com/.+canvases reject-img
^https?://spclient.wg.spotify.com/.+cards reject-img
^https?://spclient.wg.spotify.com/.+crashlytics reject-img
^https?://spclient.wg.spotify.com/.+doubleclick.net reject-img
^https?://spclient.wg.spotify.com/.+enabled-tracks reject-img
^https?://spclient.wg.spotify.com/.+promoted_offer reject-img
^https?:\/\/api\d?\.musical\.ly\/api\/ad\/ reject-img
# > SanLianZhongDu@ddgksf2013
https://apis.lifeweek.com.cn/api/baseConfig/getIosNewConfig reject
# > ShunFeng@ddgksf2013
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/appVersion\/detectionUpgrade reject-dict
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryAdImages reject-dict
^https?:\/\/shopic\.sf-express\.com\/crm\/mobile\/common\/flashscreen reject
# > ShanDongCMCC@ddgksf2013
https?:\/\/m\.sd\.10086\.cn\/zapi\/app_common\/homeWelcome\/welcome.do reject-dict
# > Soul@kyle
^https:\/\/data-collector\.soulapp\.cn\/api\/data\/report$ reject
# > suning
^https?:\/\/mpcs\.suning\.com\/mpcs\/dm\/getDmInfo reject
# > tianxingjinrong
^http?:\/\/t1\.market\.xiaomi\.com\/thumbnail\/webp\/w1170q100\/ reject-200
# > tianyiyunpan
^https?:\/\/api\.cloud\.189\.cn\/guns\/getOpenscreenBanners reject
# > tianmaojingling
^https?:\/\/zconfig\.alibabausercontent\.com\/zconfig reject
^http?:\/\/g\.alicdn\.com\/living\/mesh-std-spec reject
# > TengXunShouJiGuanJia
^https://otheve.beacon.qq.com\/analytics\/upload\?sid=.* reject
# > TuNiu
^https?:\/\/m\.tuniu\.com\/api\/operation\/splash\/ reject
# > TaoPiaoPiao@fangpide
^https://acs.m.taobao.com\/gw\/mtop.film.mtopadvertiseapi.queryadvertise\/5.0.* reject
# > TianTianJiJin@ddgksf2013
^https?:\/\/appactive\.1234567\.com\.cn\/AppoperationApi\/OperationService\/GetAppStartImg reject-dict
# > topwidget@ddgksf2013
https://top-widgets-api.xiaozujian.com/api/ad/config reject-200
# > TencentNews
^https?:\/\/r\.inews\.qq\.com\/(adsBlacklist|getFullScreenPic|getQQNewsRemoteConfig) reject
^https?:\/\/r\.inews\.qq\.com\/getBannerAds reject
^https?:\/\/r\.inews\.qq\.com\/getNewsRemoteConfig reject
^https?:\/\/r\.inews\.qq\.com\/getSplash reject
^https?:\/\/r\.inews\.qq\.com\/searchHotCatList reject
^https?:\/\/r\.inews\.qq\.com\/upLoadLoc reject
# > tonghuashun
^https?:\/\/adm\.10jqka\.com\.cn\/interface\/ad\/recommend reject
# > weipinhui
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get reject-200
https://b.appsimg.com/upload/momin/ reject
https://mapi.appvipshop.com/vips-mobile/rest/activity/advertisement/get reject
^https:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/iosAdInfo\/report reject
# > WangYiDaShen
^https?:\/\/god\.gameyw\.netease\.com\/v\d\/ad\/serving\/app-start reject
# > WangYiMusic
^https?:\/\/interface(\d)?.music.163.com\/eapi\/ad\/ reject
# > WangYiYouXiang
^https?:\/\/appconf\.mail\.163\.com\/mmad\/get\.do reject
^https?:\/\/client\.mail\.163.com\/apptrack\/confinfo\/(searchMultiAds.do|showAds.do) reject
# > WangYiYanXuan@ddgksf2013
https://support.you.163.com/appversync/check.do reject
^https?+:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json reject
^https?:\/\/yanxuan.nosdn.127.net\/(static-union\/)?.*\.gif reject
https:\/\/yanxuan.nosdn.127.net\/.*\.mp4 reject-dict
# > weixindaihuo@RuCu6
^https?:\/\/mp\.weixin\.qq\.com\/mp\/cps_product_info reject-200
# > Weifeng
^https:\/\/api\.wfdata\.club\/v2\/yesfeng\/(infoCenterAd|yesList) reject
# > Weico
^https?:\/\/overseas.weico.cc\/portal.php\?a=get_coopen_ads reject
# > wangyiwoniudushu
^https?+:\/\/easyreadfs\.nosdn\.127\.net\/ad-material\/ reject
# > wangyikaola
^https?:\/\/sp\.kaola\.com\/api\/openad reject
^https?:\/\/gw\.kaola\.com\/gw\/dgmobile\/newOpenAd reject
# > xinyue
^https?:\/\/bgw\.xinyue\.qq\.com\/xyapi\.PageService\/GetIndexPopFlash reject-200
^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d\/tag\/ads_engage reject-dict
^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d\/ads\/apple\/record reject-dict
^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d\/ads\/resource reject-dict
^https?:\/\/referee\.xiaohongshu\.com\/v\d\/stateReport reject-dict
^https?:\/\/pages\.xiaohongshu\.com\/data\/native\/matrix_switches reject-dict
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/user\/teenager\/status reject-dict
# > XiaoShuiMian
^https?:\/\/api.psy-1.com\/cosleep\/startup reject
# > XieCheng
^https:\/\/ma-adx\.ctrip\.com\/_ma\.gif reject
^https:\/\/m\.ctrip\.com\/restapi\/.+json\/tripAds reject
^https:\/\/m\.ctrip\.com\/html5\/webresource\/js\/iscroll\.js$ reject
^https:\/\/mbd\.baidu\.com\/newspage\/api\/getmobads\?page\=landingshare reject
# > XiChuangZhu@ddgksf2013
^https?:\/\/lchttpapi\.xczim\.com\/1\.1\/functions\/getLaunchImageForIOS reject-dict
# > XianYu
^https:\/\/gw.alicdn.com\/mt\/ reject
^https:\/\/gw.alicdn.com\/tfs\/.+\d{3,4}-\d{4} reject
^https:\/\/gw.alicdn.com\/tps\/.+\d{3,4}-\d{4} reject
# > XiaoYi@ddgksf2013
^https://api.xiaoyi.com\/v5\/app\/mobile\/ads reject
^https://api.xiaoyi.com\/v5\/app\/config\?userid=.* reject
# > xiachufang
^https:\/\/api\.xiachufang\.com\/v\d\/ad/ reject-dict
# > xiaolishenghuo
^https?:\/\/mpos-pic\.helipay\.com\/upload\/images\/advertisment reject-dict
# > xiaomi
^https?:\/\/api\.m\.mi\.com\/v1\/app\/start reject
# > xifandongman
^https?:\/\/pzoap\.moedot\.net\/xgapp\.php\/v2\/top_notice reject-200
# > yanaifei
^https?:\/\/pipi\.4kya\.com\/\/xgapp\.php\/v3\/advert\.position=[^2]+ reject-200
# > YangShiPin
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/\w+\.json reject-200
# > YiHaoDian
^https?:\/\/venus\.yhd\.com\/memhome\/launchConfig reject
# > YiKaoBang@ddgksf2013
^https?:\/\/api\.yikaobang\.com\.cn\/client\/main\/homePageSmallAd reject
^https?:\/\/api\.yikaobang\.com\.cn\/index\.php\/Client\/main\/startPage reject
# > YouLinYouKe@ddgksf2013
https://new-app-api.ylyk.com/v1/user/myinfo/adviser reject
# > YinkeZhiBo@kyle
^https?:\/\/service\.busi\.inke\.cn\/api\/flash\/screen reject
# > YinxiangNote
^https?:\/\/app\.yinxiang\.com\/ads\/ reject-200
# > zhongguoyidong
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/explorePage\/getAdverList reject-200
# > zhuanzhuan
^https?:\/\/app\.zhuanzhuan\.com\/zzx\/transfer\/getConfigInfo reject-dict
# > zhiboba
^https?:\/\/a\.qiumibao\.com\/activities\/config\.php$ reject
^https?:\/\/a\.qiumibao\.com\/ios\/config\/\?version_code= reject
# > zuoyebang
^https?:\/\/syh\.zybang\.com\/com\/adx\/ reject
# > ZuiYou
^https?:\/\/api\.izuiyou\.com\/ad\/ reject
# > Zhihu
^https?:\/\/static\.zhihu\.com\/[^\/]+\/(main|column)\.signflow\.[^.]+.js reject
# > zhangyue
^https?+:\/\/ih2\.ireader\.com\/zyapi\/bookstore\/ad reject
^https?+:\/\/ih2\.ireader\.com\/zyapi\/self\/screen\/ad reject
^https?+:\/\/ih2\.ireader\.com\/zycl\/api\/ad reject

[Script]

# > 12306
http-response ^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/12306.js, requires-body=true, timeout=10, tag=12306
# > aliyunpan
http-response ^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/alidrive.js, requires-body=true, timeout=10, tag=alidrive
# > donghuafeng@NobyDa
;http-response ^https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v\d/(token|m3u8).php\? script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutAnimeAds.js, requires-body=true, timeout=10, tag=BahamutAnimeAds
http-response ^https?:\/\/47\.100\.65\.202\/source\/plugin\/mobile\/mobile\.php\?module=threadpost&.+?&page=1 script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Crack/fly.js, requires-body=true, timeout=10, tag=fly
# > jingxi
http-response ^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/startup.js, requires-body=true, timeout=10, tag=startup
http-response ^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=hotWords script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/jd_json.js, requires-body=true, timeout=10, tag=jd_json
http-response ^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=hotSearchTerms script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/jd_json.js, requires-body=true, timeout=10, tag=jd_json
http-response ^https?:\/\/api\.gotokeep\.com\/athena\/v\d\/people\/my script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/keepStyle.js, requires-body=true, timeout=10, tag=keepStyle
http-response ^https?:\/\/api\.gotokeep\.com\/config\/v\d\/basic script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/keepStyle.js, requires-body=true, timeout=10, tag=keepStyle
http-response https://api.gotokeep.com/homepage/v7/tab/find script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/keepStyle.js, requires-body=true, timeout=10, tag=keepStyle
http-response https://api.gotokeep.com/nuocha/course/v2/\w+/preview script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/keepStyle.js, requires-body=true, timeout=10, tag=keepStyle
http-response https://api.gotokeep.com/sportpage/sport/v3/mysport script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/keepStyle.js, requires-body=true, timeout=10, tag=keepStyle
# > kuan@kk pp
http-response ^https?:\/\/api\.coolapk\.com\/v6\/(feed\/(replyList|detail)|main\/indexV8|dataList) script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/coolapk.js, requires-body=true, timeout=10, tag=coolapk
# > spotify pro@app2smile
http-response ^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js, requires-body=true, binary-body-mode=true, timeout=10, tag=spotify-proto
http-response https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/shunfeng_json.js, requires-body=true, timeout=10, tag=shunfeng_json
# > Stay@ddgksf2013
http-response ^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/stay.js, requires-body=true, timeout=10, tag=stay
# > WeChat110@zZPiglet
http-response ^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/asset/UnblockURLinWeChat.js, requires-body=true, timeout=10, tag=UnblockURLinWeChat
# > XiaoHongShu@ddgksf2013
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/splash_config script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/xiaohongshu.js, requires-body=true, timeout=10, tag=xiaohongshu
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/homefeed\? script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/xiaohongshu.js, requires-body=true, timeout=10, tag=xiaohongshu
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/config\? script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/xiaohongshu.js, requires-body=true, timeout=10, tag=xiaohongshu

[MITM]

hostname = ad.12306.cn, 103.91.210.141, js-ad.ayximgs.com, pzoap.moedot.com, pipi.4kya.com, vip7.fzwdyycom, sdk.alibaba.com.ailbaba.me, tft-app.cdtft.cn, bgw.xinyue.qq.com, pan.baidu.com, yunbusiness.ccb.com, client.app.coc.10086.cn, t1.market.xiaomi.com, api.m.mi.com, mbs.boc.cn, app.zhuanzhuan.com, api.cloud.189.cn, appwk.baidu.com, us.l.qq.com, open.e.kuaishou.com, mi.gdt.qq.com, emdcadvertise.eastmoney.com, adm.10jqka.com, a.qiumibao.com, api.tipsoon.com, b.appsimg.com, hcz-member.pingan.com, ios.sspai.com, zconfig.alibabausercontent.com, g.alicdn.com, api.touker.com, mpcs.suning.com, api.pinduoduo.com, api.yangkeduo.com, easyreadfs.nosdn.127.net, sp.kaola.com, gw.kaola.com, mime.baidu.com, learn.chaoxing.com, mapi.dangdang.com, api.dangdang.com, open.e.kuaishou.com, client.qunar.com, mpos-pic.helipay.com, dili.bdatu.com, wap.ngchina.cn, ih2.ireader.com, adpai.thepaper.cn, api.haohaozhu.cn, list-app-m.i4.cn, api.xiachufang.com, jdread-api.jd.com, peisongapi.meituan.com, *gaoqingdianshi.com, *.kakamobi.cn, api.jxedt.com, slapi.oray.net, r.inews.qq.com, app.yinxiang.com, mapi.appvipshop.com, syh.zybang.com, cdn.cmgadx.com, kad.gotokeep.com, api.internetofcity.cn, img.meituan.net, lcen.xiaote.net, venus.yhd.com, api.shenyin.name, api.aliyundrive.com, mage*.if.qidian.com, god.gameyw.netease.com, m.ibuscloud.com, e.dangdang.com, app2.autoimg.cn, adproxy.autohome.com.cn, discardrp.umetrip.com, startup.umetrip.com, bp-api.bestv.com.cn, explorer.tratao.com, overseas.weico.cc, 118.178.214.118, dapis.mting.info, acs.m.taobao.com, open3.vistastory.com, ssp.dzh.com.cn, api-access.pangolin-sdk-toutiao.com, maicai.api.ddxq.mobi, www.meituan.com, client.mail.163.com, api.izuiyou.com, appapi.huazhu.com, api.wfdata.club, interface*.music.163.com, api.psy-1.com, res.kfc.com.cn, mp.weixin.qq.com, security.wechat.com, weixin110.qq.com, cdn.*.chelaileapp.cn, api.coolapk.com, edith.xiaohongshu.com, app3.qdaily.com, daoyu.sdo.com, img.jiemian.com, ccsp-egmas.sf-express.com, *.laichon.com, app.ap.d3yuiw4.com, www.i3zh.com, api.yikaobang.com.cn, api-ad-product.huxiu.com, jad-api.jin10.com, mob.mddcloud.com.cn, appactive.1234567.com.cn, rtbapi.douyucdn.cn, service.busi.inke.cn, gab.122.gov.cn, dispatcher.camera360.com, app.api.versa-ai.com, open.taou.com, api.taou.com, track.mm.taou.com, app.dewu.com, data-collector.soulapp.cn, api.gamer.com.tw, beta-api.crunchyroll.com, api.vistopia.com.cn, pss.txffp.com, m.sd.10086.cn, gw.alicdn.com, helper.2bulu.com, 47.100.65.202, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, new.vip.weibo.cn, wap.js.10086.cn, tagit.hyhuo.com, top-widgets-api.xiaozujian.com, tel.mangaapi.manhuaren.com, apis.lifeweek.com.cn, support.you.163.com, yanxuan.nosdn.127.net, *.peopleapp.com, new-app-api.ylyk.com, gw.aihuishou.com, *.58cdn.com.cn, app.58.com, static.zhihu.com, creditcardapp.bankcomm.com, res.xiaojukeji.com, 116.85.2.15, 116.85.2.14, lchttpapi.xczim.com, business.msstatic.com, mangaapi.manhuaren.com, api.gotokeep.com, api.kkmh.com, *.chelaile.net.cn, api.jr.mi.com, api.m.mi.com, guanyu.longfor.com, pages.xiaohongshu.com, www.xiaohongshu.com, elemecdn.com, fuss10.elemecdn.com, www1.elecfans.com, m.tuniu.com, mapi.mafengwo.cn, api.xiaoyi.com, api.douban.com, otheve.beacon.qq.com, mapi.sfbest.com, m5.amap.com, api.mwee.cn, sso.ifanr.com, s3plus.meituan.net, flowplus.meituan.net, p*.meituan.net, testflight.apple.com, rich.kuwo.cn, *.kwcdn.kuwo.cn, mobilead.kuwo.cn, ms.jr.jd.com, wmapi.meituan.com, appconf.mail.163.com, dl-cu-hz.lechange.cn, bdsp-x.jd.com, dsp-x.jd.com, api.m.jd.com, fbchina.flipchina.cn, zone.guiderank-app.com, homefront.qunar.com, afd.baidu.com, *.bdstatic.com, j-image.missfresh.cn, ma-adx.ctrip.com, m.ctrip.com, mbd.baidu.com, img.rr.tv, api.rr.tv, capis.didapinche.com, capis*.didapinche.com, *.hoopchina.com, goblin.hupu.com, spclient.wg.spotify.com