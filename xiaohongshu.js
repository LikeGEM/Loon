#!name= 小红书
#!desc= 小红书优化
#!homepage= https://ocd0522.tk/ddgksf2013
#!author= ddgksf2013
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/xiaohongshu.png

[Rewrite]

# > XiaoHongShu_小红书_AdEngage@ddgksf2013
^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d\/tag\/ads_engage reject-dict
# > XiaoHongShu_小红书_AdRecord@ddgksf2013
^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d\/ads\/apple\/record reject-dict
# > XiaoHongShu_小红书_AdResource@ddgksf2013
^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d\/ads\/resource reject-dict
# > XiaoHongShu_小红书_Report@ddgksf2013
^https?:\/\/referee\.xiaohongshu\.com\/v\d\/stateReport reject-dict
# > XiaoHongShu_小红书_Switches@ddgksf2013
^https?:\/\/pages\.xiaohongshu\.com\/data\/native\/matrix_switches reject-dict
# > XiaoHongShu_小红书_Teenager@ddgksf2013
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/user\/teenager\/status reject-dict

[Script]

# > XiaoHongShu_小红书_开屏广告@ddgksf2013
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/splash_config script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/xiaohongshu.js, requires-body=true, timeout=10, tag=xiaohongshu
# > XiaoHongShu_小红书_瀑布流@ddgksf2013
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/homefeed\? script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/xiaohongshu.js, requires-body=true, timeout=10, tag=xiaohongshu
# > XiaoHongShu_小红书_启动处理@ddgksf2013
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/config\? script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/xiaohongshu.js, requires-body=true, timeout=10, tag=xiaohongshu

[MITM]

hostname = edith.xiaohongshu.com,www.xiaohongshu.com,pages.xiaohongshu.com,referee.xiaohongshu.com
